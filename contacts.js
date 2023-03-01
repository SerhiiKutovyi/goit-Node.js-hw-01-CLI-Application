const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const fs = require("fs/promises");
// fs.readFile(contactsPath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// TODO: задокументировать каждую функцию

async function listContacts({ action }) {
  switch (action) {
    case "read":
      const list = await fs.readFile(contactsPath, "utf8");
      console.log(list);

      break;

    default:
      console.log("Unknown action");
  }
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

// module.export = listContacts;

listContacts({ action: "read" });
