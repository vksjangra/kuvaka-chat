# Kuvaka Tech - Real-Time Chat App (Node.js)

## Directory structure:
kuvaka-chat/
├── server.js
├── client.js
├── README.md


## ✅ How to Run

### Server:
node server.js



### Client:
## Open other multiple terminals for chats and use:
node client.js

You can run multiple clients simultaneously.

---

## ✅ Architecture

- **Language**: Node.js (no external libraries)
- **Concurrency**: Handled using asynchronous I/O (`net` module's non-blocking sockets)
- **Communication**: TCP sockets over port 3000
- **UI**: Simple terminal-based interface using `readline`

---

## ✅ Assumptions / Design Choices

- TCP/IP protocol used for simplicity and real-time message delivery
- No authentication, persistent storage, or message history — only real-time chat
- Broadcast excludes sender as required
- Text interface for faster development and to follow the "simple UI" instruction

---


