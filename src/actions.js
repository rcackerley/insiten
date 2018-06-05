export const setCompany = editedLead =>
  ({
    type: setCompany.toString(),
    payload: editedLead
  });

export const deleteCompany = company =>
  ({
    type: deleteCompany.toString(),
    payload: company
  })

export const addCompany = company =>
  ({
    type: addCompany.toString(),
    payload: company
  })

  setCompany.toString = () => 'SET_COMPANY';
  deleteCompany.toString = () => 'DELETE_COMPANY';
  addCompany.toString = () => 'ADD_COMPANY';
