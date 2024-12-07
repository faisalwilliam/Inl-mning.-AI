

==========================================================


# Kontaktbok
Detta är en enkel kontaktbok som låter dig lagra och hämta kontaktuppgifter.

# Funktioner
1. Lägg till nya kontakter med namn, e-post, telefonnummer och adress.
2. Hämta alla sparade kontakter.

# Krav
* Node.js
* SQLite3

# Installation
1. Installera Node.js: 
2. Klona repo: `git clone <repo-url>`
3. Installera beroenden: `npm install`
4. Installera: `sqlite3 install`

# Körning
1. Starta servern: `node server.js`
2. Öppna webbläsaren och navigera till `http://localhost:8000/kontakter`

# Databas
Kontakterna lagras i en SQLite-databas som skapas i mappen `database.db`.

# API
API:et exponerar två endpoints:
1. kontakter: Hämta alla kontakter (GET)
2. kontakter: Lägg till en ny kontakt (POST)




