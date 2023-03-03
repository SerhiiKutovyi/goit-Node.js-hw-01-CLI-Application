const contacts = require('./contacts');

async function getAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const ContactsList = await contacts.listContacts();
      console.log(typeof ContactsList);
      break;

    case 'get':
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;

    case 'add':
      const addNewContact = await contacts.addContact(name, email, phone);
      console.log(addNewContact);
      break;

    case 'remove':
      break;

    default:
      break;
  }
}

// getAction({ action: 'list' });
// getAction({ action: 'get', id: '1' });
getAction({ action: 'add', id: '', name: '', email: '', phone: '' });
