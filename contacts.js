const fs = require('node:fs/promises');
const path = require('node:path');

const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументировать каждую функцию

async function listContacts() {
  const list = await fs.readFile(contactsPath, 'utf8');
  return JSON.parse(list);
}

async function getContactById(id) {
  const contact = await listContacts();
  const contactId = contact.find(ele => ele.id === id);
  return contactId || null;
}

async function addContact({ name, email, phone }) {
  const contact = await listContacts();
  const newContact = {
    name,
    email,
    phone,
    id: uuidv4(),
  };
  contact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
  return newContact;
}

function removeContact(id) {
  console.log();
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
