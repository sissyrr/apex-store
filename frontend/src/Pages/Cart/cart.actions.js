export function addItem(item){
  return {
    type:'cartAddItem',
    payload:{
      selectedItem:item
    }
  }
}

export function removeItem(itemId){
  return {
    type: 'cartRemoveItem',
    payload:{
      itemId
    }
  }
}

export function clearAll(){
  return {
    type:'cartClearAll'
  }
}