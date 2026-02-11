# Deno React Starter

A monorepo setup featuring a React frontend and Deno backend configuration.

## Technologies

- **Package Manager**: [pnpm](https://pnpm.io/) (Workspaces)
- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) +
  [TypeScript](https://www.typescriptlang.org/)
- **Tanstack Router**: [Tanstack Router](https://tanstack.com/router/latest)
- **Backend Framework**: [Hono](https://hono.dev/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)

## Project Structure

- `apps/web`: The React application.
- `deno`: Deno backend configuration and migrations.

## Getting Started

### Prerequisites

- Node.js
- pnpm
- deno
- docker

### Installation

```bash
pnpm install
```

### Environment Setup

1. Copy the example environment file in the web app:
   ```bash
   cp apps/web/.env.local.example apps/web/.env.local
   ```
2. Update `apps/web/.env.local` with your Supabase credentials.

## Backend Application

### Database Migrations

To generate a new migration:

```bash
pnpm generate
```

To apply migrations:

```bash
npx supabase migrations up
```

To revert migrations:

```bash
npx supabase migrations down
```

## Frontend Application

### Shadcn UI components & TailwindCSS

- [Shadcn UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)

To install components:

```bash
cd apps/web
pnpm dlx shadcn@latest add <component-name>
```

For live deployments on Deno Deploy, please set the following environment
variables:

- `VITE_API_URL_PROD` (set it with production Deno Deploy URL)
- `VITE_API_URL_TEST` (set it with test branch deployment URL, it should contain
  a `--test` string in the URL)

## Running the Application

To start the frontend development server:

```bash
pnpm dev
```

To start Deno locally and serve the api (Hono) functions:

```bash
pnpm deno-dev
```
