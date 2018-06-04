export const setStatus = editedLead =>
  ({
    type: setStatus.toString(),
    payload: editedLead
  });


  setStatus.toString = () => 'SET_STATUS';
