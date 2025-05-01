import express from 'express';
import mysql from 'mysql2/promise'; // Using promise version
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'patil@180',
    database: 'contact_form_db'
});

console.log('Connected to MySQL database');
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
        await db.query(query, [name, email, subject, message]);

        res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error('Error saving contact:', err);
        res.status(500).json({ success: false, message: 'Error saving contact' });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});