export let editCompanyStatus = (company, newStatus) => (
    {...company, status: newStatus }
  )

export let createContact = (name, email, img, id) => {
  if (id) {
    return ({
      'name': name,
      'img': img,
      'email': email,
      'id': id
    })
  } else {
    let id = Math.floor((Math.random() * 10000) + 1);
    return ({
      'name': name,
      'img': img,
      'email': email,
      'id': id
    })
  }
}

export let combineContacts = leads => {
  let contacts = leads.map(lead => lead.contacts.map(contact => {contact.company = lead.name; return contact  }));
  return contacts.reduce((acc, val) => acc.concat(val), []);
}
