import express from 'express';
import cors from 'cors';
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({message: "Backend ist verbunden!"});
});

app.post("/api/characters", async (req, res) => {
    const { name, alignment } = req.body;
    if (!name || !alignment) {
        return res.status(400).json({error: "Name and Alignment is required"});
    }
    try {
        const result = await pool.query(
            "INSERT INTO characters (name, alignment) VALUES ($1, $2) RETURNING *",
            [name, alignment]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM characters");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));