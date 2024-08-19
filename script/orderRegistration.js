let first_hot_click = document.querySelector(".first_hot_click");
let about_popular_dishes = document.querySelector(".about_popular_dishes");
let basket_counter = document.querySelector(".basket_counter");
let count = 0;

let parent_basket_modal = document.querySelector(".parent_basket_modal");
let basketLink = document.querySelector("#basketLink");
let exit = document.querySelector("#close_basket");
let block__order_info = document.querySelector(".block__order-info");
let all_count_n = document.querySelector(".all-count-number");

axios.get("http://localhost:3002/hot").then(function (res) {
  let data = res.data;
  hotArrow(data);
  // ModalBasket(data)
});

let basket = {
  allPrice: 0,
  count: 1,
  dish: [],
};
//   localStorage.setItem("basket", JSON.stringify(basket.dish));

let hot_arrow = document.querySelector("#hot_arrow");
let hot_arrow_box = document.querySelector(".hot_arrow_box");

hot_arrow.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};

//назыание блюд в загаловке

function hotArrow(arr) {
  for (let item of arr) {
    let a = document.createElement("a");
    a.classList.add("a_of_black");
    a.innerHTML = item.name;
    hot_arrow_box.append(a);

    a.addEventListener("click", () => {
      window.location.href = `/pages/about_product.html?id=${item.id}`;
    });
  }
}

if (typeof localStorage.getItem("basket") === "string") {
  basket.dish = JSON.parse(localStorage.getItem("basket"));
}

function ModalBasket(arr, place) {
  place.innerHTML = "";

  for (let item of arr) {
    let product = document.createElement("div");
    let imgOfProduct = document.createElement("img");
    let left_of_product = document.createElement("div");
    let spanOfNPandWght = document.createElement("span");
    let nameOfProduct = document.createElement("p");
    let weight = document.createElement("div");
    //
    let right_of_product = document.createElement("div");
    let count = document.createElement("div");

    let modal_numb = document.createElement("span");


    let price = document.createElement("div");
    let total_price = 0;

    count.id = "countOfBasket";
    right_of_product.id = "submit_right_of_product";
    price.id = "priceOfBasket";
    modal_numb.id = "submit_numb";
    left_of_product.id = "submit-left_of_product";
    nameOfProduct.id = "submit-nameOfProduct";
    price.id = "sub-price"
    weight.style.display = "none";

    product.classList.add("product");
    imgOfProduct.classList.add("imgOfProduct");
    left_of_product.classList.add("left_of_product");
    spanOfNPandWght.classList.add("spanOfNPandWght");
    nameOfProduct.classList.add("nameOfProduct");
    weight.classList.add("weight");
    right_of_product.classList.add("right_of_product");
    count.classList.add("count");
    price.classList.add("price");

    imgOfProduct.src = item.menuImg;

    nameOfProduct.innerHTML = item.name;
    weight.innerHTML = item.weight + "г";

    modal_numb.innerHTML = "0 шт";

    price.innerHTML = item.price + "₽";

    place.append(product);
    product.append(left_of_product, right_of_product);
    left_of_product.append(imgOfProduct, spanOfNPandWght);
    spanOfNPandWght.append(nameOfProduct, weight);
    right_of_product.append(count, price);
    count.append(modal_numb);

    total_price = 0;
    let t = 0;
    let allPriceNumb = document.querySelector(".all-total-price-number");

    for (let i of basket.dish) {
      t = i.count * i.price;
      total_price = t + total_price;
    }
    allPriceNumb.textContent = total_price + "₽";

    // item.count = 1;
    // modal_numb.innerHTML = item.count + 0 + "шт";
  }
}
// console.log(categories.hot);

for (let item of basket.dish) {
  ModalBasket(basket.dish, block__order_info);
}
