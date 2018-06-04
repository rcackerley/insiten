export let editCompanyStatus = (company, newStatus) => (
    {...company, status: newStatus }
  )

// export let editCompany = (company, location, firstRow, secondRow, thirdRow) => {
//   return location === 'financials' ? {...company, financials:
//     {...company.financials, revenue: firstRow, profit: secondRow, capital: thirdRow}}
//     : {...company, email: firstRow, phone: secondRow, address: thirdRow}
// }
