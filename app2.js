const product = [
  { name: "Koi", price: 150, type: "water" },
  { name: "Touchlist", price: 50, type: "marker" },
  { name: "Deli", price: 80, type: "pencil" },
  { name: "Thienlong", price: 30, type: "water" },
  { name: "Win", price: 25, type: "water" },
  { name: "Copic", price: 100, type: "marker" },
  { name: "Superior", price: 90, type: "water" },
  { name: "Marco", price: 110, type: "pencil" },
];

// product.forEach(function(element){
//     console.log(element);
// });
const productListElement = document.getElementById("product-list");

function render(productList) {
  productListElement.innerHTML = "";
  productList.forEach(function (element) {
    productListElement.insertAdjacentHTML(
      // vị trí chèn
      "beforeend",
      `
                  <li>
                      <h2>${element.name} </h2>
                      <span>${element.price}</span>
                  </li>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BYR_color_wheel.svg/2048px-BYR_color_wheel.svg.png"  alt="">
              `
    );
  });
}
render(product);

const ascBtn = document.getElementById("asc");
const descBtn = document.getElementById("desc");
ascBtn.onclick = function () {
  const sortedProducts = product.sort(function (a, b) {
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return -1;
    }
  });
  render(sortedProducts);
};
descBtn.onclick = function () {
  const sortedProducts = product.sort(function (a, b) {
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      return -1;
    } else {
      return 1;
    }
  });
  render(sortedProducts);
};
const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelect = filterSelect.value;
  let filteredProduct = [];
  switch (typeSelect) {
    case "water":
      filteredProduct = product.filter(function (element) {
        if (element.type == "water") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "marker":
      filteredProduct = product.filter(function (element) {
        if (element.type == "marker") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "pencil":
      filteredProduct = product.filter(function (element) {
        if (element.type == "pencil") {
          return true;
        } else {
          return false;
        }
      });
      break;

    default:
      filteredProduct = product;
      break;
  }
  render(filteredProduct);
};
