import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
    connectionString: 'postgresql://postgres:patil@180@db.amzzfjtzgscuzwcbqymp.supabase.co:5432/postgres',
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
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
