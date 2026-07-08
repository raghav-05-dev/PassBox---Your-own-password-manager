# 🔐 PassBox

A full-stack password manager built with **React**, **Express.js**, and **MongoDB**. PassBox lets you securely store, view, edit, and delete your website credentials, all from a clean, responsive interface.

<p align="center">
  <em>&lt;PassBox/&gt; — Your secure password manager</em>
</p>

---

## ✨ Features

- **Add passwords** — Save a website URL, username, and password in one form
- **View saved passwords** — All entries are listed in a table with passwords masked by default
- **Copy to clipboard** — One-click copy for site, username, or password with toast confirmation
- **Edit passwords** — Load an existing entry back into the form for quick updates
- **Delete passwords** — Remove an entry with a confirmation prompt before deletion
- **Show/hide password** — Toggle password visibility while typing
- **Toast notifications** — Instant feedback for save, delete, and error states via `react-toastify`
- **Persistent storage** — Passwords are stored in MongoDB, not just the browser, so they survive refreshes and are accessible across sessions
- **Responsive UI** — Built with Tailwind CSS for a clean layout on any screen size

---

## 🛠️ Tech Stack

**Frontend** (package name: `passop`)
- React 19
- Vite 8
- Tailwind CSS 3
- react-toastify — toast notifications
- uuid — unique ID generation for entries
- lord-icon — animated icons (loaded via script, not an npm dependency)
- ESLint — linting

**Backend**
- Node.js + Express 4
- MongoDB 7 (via the official `mongodb` driver)
- body-parser
- cors
- dotenv

---

## 📁 Project Structure

```
PassBox-MongoDB/
├── backend/
│   ├── .env
│   ├── package.json
│   └── server.js
└── (frontend root)
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Footer.jsx
    │   │   ├── Manager.jsx
    │   │   └── Navbar.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.js
    └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) running locally (default: `mongodb://localhost:27017/`)

### 1. Clone the repository

```bash
git clone https://github.com/raghav-05-dev/PassBox-MongoDB.git
cd PassBox-MongoDB
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:

```
MONGO_URI=mongodb://localhost:27017/
```

Start the backend server:

```bash
node server.js
```

The API will run on **http://localhost:3000**.

### 3. Set up the frontend

From the project root:

```bash
npm install
npm run dev
```

The app will be available at the URL Vite prints in the terminal (typically **http://localhost:5173**).

> **Note:** Make sure the backend server and MongoDB are running before starting the frontend, since the app fetches passwords from `http://localhost:3000` on load.

> **Note:** This project requires Node.js 20.19+ or 22.12+ to run Vite 8 and the other tooling in `devDependencies`.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`    | `/` | Fetch all saved passwords |
| `POST`   | `/` | Save a new password |
| `DELETE` | `/` | Delete a password by `id` |

---

## 📌 Notes

- Passwords are currently stored as plain text in MongoDB. If you plan to deploy this project publicly, consider adding encryption for the password field before production use.
- The database name used is `PassBox`, with a `passwords` collection.

---

## 👤 Author

**Raghav Pandey**

- GitHub: [@raghav-05-dev](https://github.com/raghav-05-dev)

---

## 📄 License

This project is licensed under the ISC License.
