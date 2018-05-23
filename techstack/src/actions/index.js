export const selectItem = (itemID) => {
  return {
    type: 'select_item',
    payload: itemID,
  };
};
