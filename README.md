# 🚀 NxtBuild — AI Web App Builder

> Build full web apps from plain English using AI.

---

## ⚡ What It Does
- Convert ideas → working web apps instantly  
- Generate complete **HTML/CSS/JS** using AI  
- Live preview + editable code  
- Chat-based iterative development  

---

## 🔥 Key Features
- 🔐 JWT Authentication (secure login/signup)  
- 📁 Project Management (CRUD with MongoDB)  
- 🤖 AI Code Generation (Gemini API)  
- 💬 Chat Interface for app building  
- 👁️ Live Preview  
- 🧑‍💻 Built-in Code Editor  
- 📦 Download generated code  

---

## 🧩 Tech Stack
- **Frontend:** React (Vite), Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Auth:** JWT, bcrypt  
- **AI:** Google Gemini API  

---

## ⚙️ Setup

```bash
# Clone
git clone https://github.com/your-username/nxtbuild.git

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

---

### Create `.env` in `/server`
```env
MONGODB_URI=your_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key

> ⚠️ Do not commit your `.env` file. Add it to `.gitignore`.
