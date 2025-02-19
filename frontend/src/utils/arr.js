export const excludeItems = (arr, excludeItems) => {
  return arr.filter((item) => !excludeItems.includes(item));
};

export const filterItems = (arr, allowedItems) => {
  return arr.filter((key) => allowedItems.includes(key));
};
