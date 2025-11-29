
// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Enable CORS for frontend requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// --- First API: Test endpoint ---
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// --- Users API: Example endpoint ---
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

// --- Posts API: Example endpoint ---
let posts = [
  { id: 1, userId: 1, content: "Hello world!" },
  { id: 2, userId: 2, content: "My first post" },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    userId: req.body.userId,
    content: req.body.content,
  };
  posts.push(newPost);
  res.json(newPost);
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});