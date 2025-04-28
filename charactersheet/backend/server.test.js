import {describe, it, expect} from 'vitest';
import pool from './db.js';

describe("Database Operations", () => {
    it("Kann einen Charakter zur Datenbank hinzufügen", async () => {
        const characterName = "Bobling the Goblin";

        const result = await pool.query("INSERT INTO characters (name) VALUES ($1) RETURNING *", [characterName]);
        
        expect(result.rows[0]).toBeDefined();
        expect(result.rows[0].name).toBe(characterName);       
    });
});