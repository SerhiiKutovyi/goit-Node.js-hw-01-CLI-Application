const { program } = require('commander');
const program = new Command();

const contacts = require('./contacts');

// TODO рефакторить

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

getAction(argv);

program
  .option('-a,--action <type>')
  .option('-i,--id <type>')
  .option('-n,--name <type>')
  .option('-e,--email <type>')
  .option('-p,--phone <type>');

program.parse(process.argv);

const argv = program.opts();
console.log(argv);
