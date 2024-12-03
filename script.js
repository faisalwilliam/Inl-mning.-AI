let contacts = [];
let name = '';
let email = '';
let phone = '';
let search = '';

document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
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

  searchInput.addEventListener('input', function(e) {
    search = e.target.value;
    updateContactList();
  });

  addContactBtn.addEventListener('click', function() {
    contacts.push({ name, email, phone });
    name = '';
    email = '';
    phone = '';
    updateContactList();
  });

 function updateContactList() {
   const filteredContacts = contacts.filter(contact => {
     return contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.toLowerCase().includes(search.toLowerCase());
   });
 
   const contactListHtml = filteredContacts.map(contact => {
     return `
       <li>
         <p>${contact.name}</p>
         <p>${contact.email}</p>
         <p>${contact.phone}</p>
       </li>
     `;
   }).join('');
 
   contactList.innerHTML = contactListHtml;
 };
 console.log(contacts);
});
