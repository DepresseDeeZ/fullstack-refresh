// swicth statements
function selectedItems(item) {
  let price = 0;
  switch (item) {
    case "Coffe":
      price = 2;
      break;
    case "Tea":
      price = 1;
      break;
    case "Sandwitches":
      price = 3;
      break;
    default:
      return `Sorry this item ${item} doesnt exist`;
  }
  return `You have selected ${item}. That will be $${price}`;
}
console.log(selectedItems(Coffe));
