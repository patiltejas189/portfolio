import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection using environment variable
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use environment variable for the connection string
    ssl: {
        rejectUnauthorized: false, // Required for Supabase
    },
});

console.log('Connected to Supabase PostgreSQL');

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const query = `
            INSERT INTO "contact-from-project" (name, email, subject, message)
            VALUES ($1, $2, $3, $4)
        `;
        await pool.query(query, [name, email, subject, message]);

        res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error('Error saving contact:', err.message);
        res.status(500).json({ success: false, message: 'Error saving contact' });
    }
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
