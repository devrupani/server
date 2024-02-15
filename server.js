const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

let users = [
  { id: 1, userId: 11, title: "Angular ", body:"Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS." },
  { id: 2, userId: 12, title: "Node ", body:"Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting" },
  { id: 3, userId: 13, title: "Figma ", body:"Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows." },
  { id: 4, userId: 14, title: "MongoDB", body:"MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License." },
  { id: 5, userId: 15, title: "AWS", body:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling." },
  // Add more users if needed
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get a user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const { title, description, userId } = req.body;
  const newUser = { id: users.length + 1, title, description, userId };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
