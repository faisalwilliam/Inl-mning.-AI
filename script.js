














//script.js
let contacts = [];
let name = '';
let email = '';
let phone = '';
let address = '';
let search = '';

document.addEventListener('DOMContentLoaded', function() {
  // Hämta referenser till HTML-elementer
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const searchInput = document.getElementById('search');
  

  const addContactBtn = document.querySelector('.add-contact-btn');
  const contactList = document.getElementById('contact-list');
  
// Händelsehanterare för att uppdatera kontaktlistan
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
    Name = '';
    email = '';
    phone = '';
    address = '';
    updateContactList();
  });
// Funktion för att uppdatera kontaktlistan
  function updateContactList() {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(search.toLowerCase()) ||
             contact.email.toLowerCase().includes(search.toLowerCase()) ||
             contact.phone.toLowerCase().includes(search.toLowerCase()) ||
             contact.address.toLowerCase().includes(search.toLowerCase());
    });
  // Skapa HTML-kod för kontaktlistan
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

  // Funktion för att hämta kontakter med GET-metoden
  function getContacts() {
    fetch('http://localhost:8000/kontakter')
      .then(response => response.json())
      .then(data => {
        contacts = data;
        updateContactList();
      })
      .catch(error => console.error('Error:', error));
  }

  // Funktion för att skicka en ny kontakt till servern med POST-metoden
  function addContact() {
    const newContact = {
      name: Name,
      email: email,
      phone: phone,
      address: address
    };

    fetch('http://localhost:8000/kontakter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Kontakt tillagd:', data);
        getContacts();
      })
      .catch(error => console.error('Error:', error));
  }
// Funktionen som anropas vid klick i knappen
  addContactBtn.addEventListener('click', function() {
    addContact();
  });

  getContacts();
});
/*
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
  addContactBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value; // assuming you have an input field with id "name"
    contacts.push({ name, email, phone, address });
    // ...
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
// Funktion för att hämta kontakter med GET-metoden
function getContacts() {
  fetch('http://localhost:8000/kontakter')
    .then(response => response.json())
    .then(data => {
      contacts = data;
      updateContactList();
    })
    .catch(error => console.error('Error:', error));
}

// Funktion för att skicka en ny kontakt till servern med POST-metoden
function addContact() {
  const newContact = {
    name: name,
    email: email,
    phone: phone,
    address: address
  };

  fetch('http://localhost:8000/kontakter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newContact)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Kontakt tillagd:', data);
      getContacts();
    })
    .catch(error => console.error('Error:', error));
}
document.addEventListener('DOMContentLoaded', function() {
  // ...

  addContactBtn.addEventListener('click', function() {
    addContact();
  });

  getContacts();
});
*/