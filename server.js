







import sqlite3 from 'sqlite3';
const server = new sqlite3.Database('./server.js');

//const db = new sqlite3.Database('./database.server.js');
import express from 'express';

const app = express();
const port = 1000;

// Middleware för att hantera JSON-data
app.use(express.json());

// Funktion för att hämta alla kontakter

function getContacts(_req,res) {
  
  server.all('SELECT * FROM kontakter', (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'Fel vid hämtning av kontakter' });
    } else {
      res.send(rows);
    }
  });
}

// Funktion för att lägga till en ny kontakt
function addContact(req, res) {
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
}


// Rout för att hämta alla kontakter
app.get('/kontakter', getContacts);


// Rout för att lägga till en ny kontakt
app.post('/kontakter', addContact);

// Starta servern
app.listen(port, () => {
  console.log('http://localhost:1000/kontakter');
});

