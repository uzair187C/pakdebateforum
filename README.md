# Pak Debate Forum Academy

A modern, dynamic, and fully functional platform for the Pak Debate Forum Academy. This project serves as the central hub for discovering debate programmes, viewing tournament events, registering as participants, accessing resources, and managing administrative tasks.

## 🏗 Architecture

This platform is built using a serverless architecture designed for extreme speed, high availability, and zero maintenance:

*   **Frontend:** Vanilla HTML, CSS, and JavaScript. No heavy frameworks, ensuring blazing-fast load times. The UI relies on a token-based design system (`tokens.css`).
*   **Backend:** Cloudflare Workers (Node.js compatible).
*   **Database:** Cloudflare D1 (Serverless SQLite).
*   **Asset Hosting:** Cloudflare Workers Static Assets (`/public`).

## 🗂 Directory Structure

```text
.
├── public/                 # Static assets (HTML, CSS, JS, Images)
│   ├── css/                # Token-based design system and page styles
│   ├── js/                 # API client (api.js), universal nav/footer, and scripts
│   └── ...                 # Frontend HTML pages
└── divine-boat-b7b4/       # Cloudflare Worker Backend
    ├── src/index.js        # Main API logic and routing
    ├── schema.sql          # D1 Database schema definitions
    ├── seed.sql            # D1 Database dummy data for testing
    └── wrangler.jsonc      # Worker configuration and bindings
```

## 🚀 Local Development

To run the project locally, you will need Node.js and Wrangler installed.

1.  **Install Dependencies:**
    Navigate to the worker directory and install the necessary packages.
    ```bash
    cd divine-boat-b7b4
    npm install
    ```

2.  **Initialize the Local Database:**
    Apply the schema and seed data to your local D1 SQLite instance.
    ```bash
    npx wrangler d1 execute DB --local --file=schema.sql
    npx wrangler d1 execute DB --local --file=seed.sql
    ```

3.  **Start the Development Server:**
    Run the local Cloudflare dev server. It will automatically bind the database and serve static assets.
    ```bash
    npm run dev
    ```
    The application will be available at `http://127.0.0.1:8787`.

## ☁️ Deployment

To deploy the application to a live Cloudflare environment:

1.  **Create the Remote Database:**
    ```bash
    npx wrangler d1 create pakdebate-db
    ```
    *Note the `database_id` returned and update the `wrangler.jsonc` file accordingly.*

2.  **Initialize the Remote Database:**
    ```bash
    npx wrangler d1 execute DB --remote --file=schema.sql
    npx wrangler d1 execute DB --remote --file=seed.sql
    ```

3.  **Set the Admin Secret:**
    The admin dashboard is protected by an API key. Set it securely via Wrangler:
    ```bash
    npx wrangler secret put ADMIN_KEY
    ```

4.  **Deploy the Worker:**
    ```bash
    npx wrangler deploy
    ```

## 🛡️ Admin Dashboard Access

The administrative dashboard (`/admin.html`) provides full CRUD operations for Events, Programs, Registrations, Feedback, Resources, and Coaches.
*   **Local Dev Key:** `local-admin-2024` (Configured in `wrangler.jsonc`)
*   **Production Key:** Managed securely via Cloudflare Secrets.

---
*Built for the Pak Debate Forum Academy.*
