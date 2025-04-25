import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({message: "Backend ist verbunden!"});
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));