const INITIAL_STATE ={
  selectedItems:[]
}

function addItem(state,payload) {
  const selectedItems = [...state.selectedItems, payload.selectedItem];
  return {...state,selectedItems}
}

function removeItem(state,payload) {
  const selectedItems = state.selectedItems.filter( item => item.id !== payload.itemId);
  return {...state,selectedItems}
}

function removerTodosItens(state,payload){
  const selectedItems = []
  return {...state,selectedItems}
}

export function reducer(state = INITIAL_STATE,action){
  switch(action.type){
    case 'cartAddItem':
      return addItem(state,action.payload);
    case 'cartRemoveItem':
      return removeItem(state,action.payload);
    case 'cartClearAll':
      return removerTodosItens(state);
    default:
      return state;
  }
}