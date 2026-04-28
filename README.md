# Web Store

Full-stack web store: **React** (frontend) + **Node.js Express** (backend).

## Project structure

```
web-store/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── assets/         # Images, global styles
│       ├── components/     # Reusable UI (common, layout, store)
│       ├── config/         # App config, env
│       ├── constants/      # App constants
│       ├── context/        # React context providers
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Third-party lib setup
│       ├── pages/          # Route-level components
│       ├── services/        # API calls, external services
│       ├── store/          # State (Redux/Zustand/etc.)
│       ├── types/          # TypeScript types
│       ├── utils/          # Helpers
│       └── App.jsx
│   └── tests/
├── server/                 # Node.js Express backend
│   └── src/
│       ├── config/         # DB, env config
│       ├── constants/      # Server constants
│       ├── controllers/    # Route handlers
│       ├── middleware/     # Auth, validation, error handling
│       ├── models/         # Data models (DB schemas)
│       ├── routes/         # API routes
│       ├── services/       # Business logic
│       ├── utils/          # Helpers
│       ├── validators/     # Request validation
│       └── app.js / index.js
│   └── tests/
├── shared/                 # Shared types/constants (optional)
├── package.json            # Root workspace
└── README.md
```

## Quick start

1. **Install dependencies** (from project root):
   ```bash
   npm install
   ```

2. **Set up environment**  
   Copy `.env.example` to `.env` in `client` and `server`, then fill in values.

3. **Run development**:
   - Backend: `npm run server`
   - Frontend: `npm run client`  
   Or run both with your preferred tool (e.g. `concurrently`).

## Next steps

- In **client**: scaffold a React app (Vite/CRA) and add routing, API client, and store logic.
- In **server**: add Express app, database connection, and API routes (auth, products, cart, orders).
