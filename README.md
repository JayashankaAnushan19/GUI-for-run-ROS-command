# 🌐 GUI for Running System Commands

A lightweight web-based interface that allows users to execute system commands from a browser using a Node.js backend. This project demonstrates how frontend and backend systems communicate to trigger and display command-line operations.

---

## 🚀 Overview

This project implements a simple client-server architecture:

* A web UI sends a request
* A backend server executes a system command
* The result is returned and displayed in the browser

It is designed to help understand:

* Web-to-server communication
* Backend command execution
* Real-time output rendering

---

## ✨ Features

* 🖱️ One-click execution of system commands
* 🌐 Simple web-based interface
* ⚡ Real-time command output display
* 🔗 REST API communication using Fetch
* 🧩 Minimal and easy to extend

---

## 🧠 Concepts Used

* Client-Server Architecture
* REST API Design
* Asynchronous JavaScript (Fetch API)
* Node.js Backend Development
* System Process Execution (`child_process.exec`)

---

## ⚙️ Tech Stack

* **Frontend:** HTML, JavaScript
* **Backend:** Node.js, Express.js
* **Core Module:** child_process

---

## 📂 Project Structure

```
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── requirements.txt
└── server.js
```

---

## 🔄 How It Works

```
[User Clicks Button]
        ↓
Frontend sends request (fetch)
        ↓
http://localhost:3000/run-command
        ↓
Node.js server receives request
        ↓
System command executed (exec)
        ↓
Output returned to server
        ↓
Response sent to browser
        ↓
Displayed on UI
```

---

## ▶️ How to Run

### 1. Install Dependencies

```bash
npm install express
```

---

### 2. Start the Server

```bash
node server.js
```

---

### 3. Open in Browser

Go to:

```
http://localhost:3000
```

Click the button to execute the command and view the output.

---

## ⚠️ Security Notice

This project is intended for **local development and learning only**.

Executing system commands from a web interface can be unsafe if exposed publicly.

Do NOT use this in production without:

* Input validation
* Command whitelisting
* Authentication and authorization

---

## 🧪 Use Cases

* Learning full-stack development basics
* Building local automation tools
* Developer utilities and dashboards
* Prototyping system control interfaces

---

## 🤖 Future Scope (Robotics Integration)

This concept can be extended into robotics applications such as:

* Triggering ROS 2 nodes from a web interface
* Remote robot control dashboards
* Monitoring system logs and sensor data
* Managing distributed robotic systems

Example:

```bash
ros2 run package_name node_name
```

This command could be triggered directly from a browser UI.

---

## 🔮 Future Improvements

* Add command selection UI
* Implement authentication system
* Add real-time output streaming (WebSockets)
* Support multiple commands
* Containerize using Docker

---

## 👨‍💻 Author

Developed by **Jayashanka Anushan**
