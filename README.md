# CampingSite Management System (Docker)

This project combines the supplied Eclipse Spring Boot backend, supplied React frontend, and the teacher's multi-stage Dockerfile pattern.

## Run

1. Install/start Docker Desktop.
2. Open a terminal in this folder (the folder containing `docker-compose.yml`).
3. Run:

   ```bash
   docker compose up --build
   ```

4. Open the frontend at http://localhost:3000.
5. Backend API is available at http://localhost:8081/campingsite/ and Swagger UI may be available at http://localhost:8081/swagger-ui/index.html.

To stop, press Ctrl+C, then run `docker compose down`. Database data is retained in the `campingsite_data` volume. To remove the database data too, use `docker compose down -v` (destructive).

## API endpoints from the supplied controller

- `GET /campingsite/`
- `POST /campingsite/add`
- `GET /campingsite/displayall`
- `DELETE /campingsite/delete/{id}`

The frontend uses `/api/campingsite/...`; Nginx forwards these requests to the backend service inside Docker. PostgreSQL is reached by service name `db`, not `localhost`, from the backend container.

## Notes

- Java package names from the supplied Eclipse backend are preserved (`com.klef.soa.docker`).
- `node_modules`, Maven `target`, IDE metadata, and Git metadata are intentionally excluded from the ZIP; Docker builds the required artifacts.
- The Compose database credentials are sample local-development values. Change them before using this outside a local assignment environment.
