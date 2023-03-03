const contacts = require('./contacts');

async function getAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const ContactsList = await contacts.listContacts();
      console.log(ContactsList);
      break;

    case 'get':
      break;

    case 'add':
      break;

    case 'remove':
      break;

    default:
      break;
  }
}

getAction({ action: 'list' });
