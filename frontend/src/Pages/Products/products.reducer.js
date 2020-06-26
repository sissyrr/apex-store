const INITIAL_STATE = {
  records: []
}

export function reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case "productADDRecord":
      return addRecord(state, action.payload);
    case "productSetRecords":
      return setRecords(state, action.payload);
    default:
      return state;
  }
}

function addRecord(state,payload){
  const records = [...state.records, payload.record]
  return{...state, records}
}

function setRecords(state,payload){
  const records = [...payload.records]
  return{...state, records}
}