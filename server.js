

import sqlite3 from 'sqlite3';
const server = new sqlite3.Database('./server.js');
//const server = new sqlite3.Database('./database.server.js');

import express from 'express';

const app = express();
const port = 8000;

// Middleware för att hantera JSON-data
app.use(express.json());

// Rout för att hämta alla kontakter

app.get('/kontakter', (req, res) => {
  console.log(`Request URL: ${req.url}`);

  server.all('SELECT * FROM kontakter', (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'Fel vid hämtning av kontakter' });
    } else {
      res.send(rows);
    }
  });
});

// Rout för att lägga till en ny kontakt

app.post('/kontakter', (req, res) => {

const kontakt = req.body;

  server.run(`
    INSERT INTO kontakter (name, email, phone, address)
    VALUES (?, ?, ?, ?)

  `, [kontakt.name, kontakt.email, kontakt.phone, kontakt.address], (err) => {

    if (err) {
      res.status(500).send({ message: 'Fel vid lagring av kontakt' });

    } else {
      res.send({ message: 'Kontakt lagrad!' });

    }
  });
});

// Starta servern
app.listen(port, () => {
  //console.log(`Servern lyssnar på port ${port}`);
  console.log('http://localhost:8000/kontakter');
});



