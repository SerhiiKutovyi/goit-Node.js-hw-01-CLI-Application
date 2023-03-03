const fs = require('node:fs/promises');
const path = require('node:path');

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументировать каждую функцию

async function listContacts() {
  const list = await fs.readFile(contactsPath, 'utf8');
  return list;
}

function getContactById(contactId) {
  console.log();
}

function removeContact(contactId) {
  console.log();
}

function addContact(name, email, phone) {
  console.log();
}

module.exports = {
  listContacts,
};
