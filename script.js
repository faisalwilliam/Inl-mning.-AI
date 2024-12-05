

let contacts = [];
let name = '';
let email = '';
let phone = '';
let address = '';
let search = '';


document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const searchInput = document.getElementById('search');
  
 
  const addContactBtn = document.querySelector('.add-contact-btn');
  const contactList = document.getElementById('contact-list');

  nameInput.addEventListener('input', function(e) {
    name = e.target.value;
  });

  emailInput.addEventListener('input', function(e) {
    email = e.target.value;
  });

  phoneInput.addEventListener('input', function(e) {
    phone = e.target.value;
  });

  addressInput.addEventListener('input', function(e) {
    address = e.target.value;
  });

  searchInput.addEventListener('input', function(e) {
    search = e.target.value;
    updateContactList();
  });

  addContactBtn.addEventListener('click', function() {
    contacts.push({ name, email, phone, address });
    name = '';
    email = '';
    phone = '';
    address = '';
    updateContactList();
  });

  function updateContactList() {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(search.toLowerCase()) ||
             contact.email.toLowerCase().includes(search.toLowerCase()) ||
             contact.phone.toLowerCase().includes(search.toLowerCase()) ||
             contact.address.toLowerCase().includes(search.toLowerCase());
    });

    const contactListHtml = filteredContacts.map(contact => {
      return `
        <li>
          <p>${contact.name}</p>
          <p>${contact.email}</p>
          <p>${contact.phone}</p>
          <p>${contact.address}</p>
        </li>
      `;

    }).join('');

    contactList.innerHTML = contactListHtml;

  }
}); 

const AI = {
  // Funktion för att hantera frågor om kontakter
  handleQuestion: (question) => {
    // Om frågan är om en specifik kontakt
    if (question.includes("vem är")) {
      const name = question.split("vem är ")[1];
      // Hämta kontaktinformation från databasen
      server.get(`SELECT * FROM kontakter WHERE name = ?`, [name], (err, row) => {
        if (err) {
          console.error(err);
        } else {
          // Svara på frågan
          console.log(` ${row.name} är en kontakt med e-post ${row.email} och telefonnummer ${row.phone}.`);
        }
      });
    }
  }
};

// Funktion för att lyssna på inkommande frågor
app.post('/ai', (req, res) => {
  const question = req.body.question;
  AI.handleQuestion(question);
  res.send({ message: 'Frågan har hanterats!' });
});

