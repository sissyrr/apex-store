
export const addRecord = (record)=>{
  const payload = {record}
  return {
    type: "productADDRecord",
    payload
  }

}

export const setRecords = (records)=>{
  const payload = {records};
  return {
    type: "productSetRecords",
    payload
  }
}