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
  const contacts = await listContacts();
  const contactId = contacts.find(ele => ele.id === id);
  return contactId || null;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone,
    id: uuidv4(),
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

async function removeContact(id) {
  const contacts = await listContacts();
  const removeContact = contacts.findIndex(ele => ele.id === id);
  if (removeContact === -1) {
    return null;
  }
  const [result] = contacts.splice(removeContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
