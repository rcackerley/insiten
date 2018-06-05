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

export function compareNames (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
     return -1;
  }
  if (nameA > nameB) {
     return 1;
  }

   // names must be equal
  return 0;
}


// export let editCompany = (company, location, firstRow, secondRow, thirdRow) => {
//   return location === 'financials' ? {...company, financials:
//     {...company.financials, revenue: firstRow, profit: secondRow, capital: thirdRow}}
//     : {...company, email: firstRow, phone: secondRow, address: thirdRow}
// }
