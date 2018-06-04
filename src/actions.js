export const setCompany = editedLead =>
  ({
    type: setCompany.toString(),
    payload: editedLead
  });


  setCompany.toString = () => 'SET_COMPANY';
