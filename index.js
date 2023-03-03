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
      const addNewContact = await contacts.addContact({ name, email, phone });
      console.log(addNewContact);
      break;

    case 'remove':
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.log('Unknown action');
  }
}

// getAction({ action: 'list' });
// getAction({ action: 'get', id: '1' });
// getAction({
//   action: 'add',
//   name: 'Serhii',
//   email: 'test@test.com',
//   phone: '(123) 456-7890',
// });
getAction({ action: 'remove', id: 'cfa4cbd8-e83b-4a0f-9ad5-44faa314051b' });
