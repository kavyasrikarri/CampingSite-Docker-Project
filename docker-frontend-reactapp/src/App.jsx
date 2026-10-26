
import { useEffect, useState } from 'react'
import './App.css'

const API = '/api/campingsite'

function App() {
  const [sites, setSites] = useState([])
  const [siteName, setSiteName] = useState('')
  const [location, setLocation] = useState('')
  const [tentCapacity, setTentCapacity] = useState('')
  const [nightlyFee, setNightlyFee] = useState('')
  const [message, setMessage] = useState('')

  function loadSites() {
    fetch(`${API}/displayall`)
      .then(response => {
        if (!response.ok) throw new Error('Unable to load camping sites')
        return response.json()
      })
      .then(data => setSites(data))
      .catch(() => setMessage('Unable to connect to backend. Check whether it is running.'))
  }

  useEffect(() => {
    loadSites()
  }, [])

  function addSite(event) {
    event.preventDefault()

    const site = {
      siteName,
      location,
      tentCapacity: Number(tentCapacity),
      nightlyFee: Number(nightlyFee),
    }

    fetch(`${API}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(site),
    })
      .then(async response => {
        if (!response.ok) {
          const error = await response.text()
          throw new Error(error || 'Unable to add camping site')
        }
        return response.json()
      })
      .then(() => {
        setMessage('Camping site added successfully!')
        setSiteName('')
        setLocation('')
        setTentCapacity('')
        setNightlyFee('')
        loadSites()
      })
      .catch(error => setMessage(error.message))
  }

  function deleteSite(id) {
    if (!window.confirm('Do you want to delete this camping site?')) return

    fetch(`${API}/delete/${id}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error('Unable to delete camping site')
        setMessage('Camping site deleted successfully!')
        loadSites()
      })
      .catch(error => setMessage(error.message))
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-success px-4">
        <span className="navbar-brand fw-bold">Camping Site Management</span>
      </nav>

      <main className="container py-4">
        <h2 className="mb-3">Add Camping Site</h2>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={addSite} className="card card-body mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Site Name</label>
              <input
                className="form-control"
                value={siteName}
                onChange={e => setSiteName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Location</label>
              <input
                className="form-control"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Tent Capacity</label>
              <input
                className="form-control"
                type="number"
                min="1"
                value={tentCapacity}
                onChange={e => setTentCapacity(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Nightly Fee (₹)</label>
              <input
                className="form-control"
                type="number"
                min="0.01"
                step="0.01"
                value={nightlyFee}
                onChange={e => setNightlyFee(e.target.value)}
                required
              />
            </div>
          </div>

          <button className="btn btn-success mt-3" type="submit">
            Add Camping Site
          </button>
        </form>

        <h2 className="mb-3">Available Camping Sites</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Site Name</th>
                <th>Location</th>
                <th>Tent Capacity</th>
                <th>Nightly Fee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sites.map(site => (
                <tr key={site.id}>
                  <td>{site.id}</td>
                  <td>{site.siteName}</td>
                  <td>{site.location}</td>
                  <td>{site.tentCapacity}</td>
                  <td>₹{site.nightlyFee}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteSite(site.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {sites.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No camping sites available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
