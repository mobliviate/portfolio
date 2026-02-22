# Portfolio – Marc Odermatt

Personal portfolio website showcasing my frontend development projects, skills, and professional background.

**[marcodermatt.ch](https://marcodermatt.ch)**

---

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Angular 17                          |
| Language   | TypeScript                          |
| Styling    | SCSS                                |
| Hosting    | Docker / Nginx / Portainer          |
| CI/CD      | GitHub Actions → GHCR → Portainer   |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4200
ng serve
```

## Build & Deploy

The project is automatically built and deployed on every push to `main`:

1. GitHub Actions builds a Docker image (multi-stage: Node → Nginx)
2. The image is pushed to GitHub Container Registry
3. A Portainer webhook triggers the redeployment

To build locally:

```bash
# Production build
ng build --configuration production

# Or via Docker
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable UI components (header, hero, projects, …)
│   ├── pages/          # Route-level pages (home, project detail, …)
│   └── shared/         # Services, data, models
├── assets/             # Images, icons, fonts
└── styles/             # Global SCSS variables & mixins
```

## Contact

Marc Odermatt – [info@marcodermatt.ch](mailto:info@marcodermatt.ch)
