axios.get("http://localhost:3002/hot").then(function (res) {
  let data = res.data;
  hotDishes(data);
  hotArrow(data)
  // ModalBasket(data)
});

let hot_arrow = document.querySelector("#hot_arrow");
let hot_arrow_box = document.querySelector(".hot_arrow_box");

let first_hot_click = document.querySelector(".first_hot_click");
let about_popular_dishes = document.querySelector(".about_popular_dishes");
let basket_counter = document.querySelector(".basket_counter");
let count = 0;

let parent_basket_modal = document.querySelector(".parent_basket_modal");
let basketLink = document.querySelector("#basketLink");
let exit = document.querySelector("#close_basket");
let box_of_products_in_basket = document.querySelector(
  ".box_of_products_in_basket"
);
let all_count_n = document.querySelector(".all-count-number");


//название блюд в загаловке

hot_arrow.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};


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

first_hot_click.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};


basketLink.onclick = () => {
  parent_basket_modal.classList.add("open");

  for (let item of basket.dish) {
    ModalBasket(basket.dish, box_of_products_in_basket);
  }
};

close_basket.onclick = () => {
  parent_basket_modal.classList.remove("open");
};

let basket = {
  allPrice: 0,
  count: 1,
  dish: [],
};

first_hot_click.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};

let grids_of_hot_dishes_slide = document.querySelector(
  ".grids_of_hot_dishes_slide"
);
// console.log(categories[0].hot);
function hotDishes(arr) {
  for (let item of arr) {
    // console.log(item.hot[0].name);
    let dish = document.createElement("div");
    let first_img = document.createElement("img");
    let ab_dish = document.createElement("h2");
    let weight = document.createElement("div");
    let text_of_salmon = document.createElement("p");
    let p_w_bs = document.createElement("span");
    let price = document.createElement("p");
    let basketImg = document.createElement("img");
    let inshoper = document.createElement("div");
    
    if(item.basket == true){
        basketImg.src = "../img/Inbasket.svg";
    }else{
        basketImg.src = "../img/basket.svg";
    }
    dish.classList.add("dish");
    ab_dish.classList.add("ab_dish");
    ab_dish.id = "dish_of_menu";
    weight.classList.add("weight");
    text_of_salmon.classList.add("text_of_salmon");
    p_w_bs.classList.add("p_w_bs");
    price.classList.add("price");
    inshoper.classList.add("inshoper");

    first_img.src = item.menuImg;
    

    ab_dish.innerHTML = item.name;
    weight.innerHTML = item.weight + "г";
    text_of_salmon.innerHTML = item.title;
    price.innerHTML = item.price + " ₽";

    grids_of_hot_dishes_slide.append(dish);
    dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs);
    p_w_bs.append(price, basketImg);

    basketImg.onclick = () => {
      let num = +basket_counter.innerHTML;

      basketImg.classList.toggle("star_active");
      if (basketImg.classList.contains("star_active")) {
        basket.dish.push(item);
        ModalBasket(basket.dish, box_of_products_in_basket);
        basket_counter.innerHTML = num + 1;
        all_count_n.innerHTML = num + 1;
        item.basket = true;
        localStorage.setItem("basket", JSON.stringify(basket.dish));
       
        console.log(item.basket);
      } else {
        basket_counter.innerHTML = num - 1;
        all_count_n.innerHTML = num - 1;
        basket.dish.splice(basket.dish.indexOf(item), 1);
        ModalBasket(basket.dish, box_of_products_in_basket);
        console.log(basket.dish);
       
        item.basket = false;
        console.log(item.basket);
      }
    };
   
    
    ab_dish.addEventListener("click", () => {
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
    let top_count_style = document.createElement("div");
    let center = document.createElement("div");
    let minus = document.createElement("span");
    let modal_numb = document.createElement("span");
    let plus = document.createElement("span");
    let bottom_count_style = document.createElement("div");
    let price = document.createElement("div");
    let total_price = 0;

    count.id = "countOfBasket";
    center.id = "centerBasket";
    minus.id = "minus";
    modal_numb.id = "modal_numb";
    plus.id = "plus";
    price.id = "priceOfBasket";

    product.classList.add("product");
    imgOfProduct.classList.add("imgOfProduct");
    left_of_product.classList.add("left_of_product");
    spanOfNPandWght.classList.add("spanOfNPandWght");
    nameOfProduct.classList.add("nameOfProduct");
    weight.classList.add("weight");
    right_of_product.classList.add("right_of_product");
    count.classList.add("count");
    top_count_style.classList.add("top_count_style");
    center.classList.add("center");
    bottom_count_style.classList.add("bottom_count_style");
    price.classList.add("price");

    imgOfProduct.src = item.menuImg;

    nameOfProduct.innerHTML = item.name;
    weight.innerHTML = item.weight + "г";
    minus.innerHTML = "-";
    modal_numb.innerHTML = "0 шт";
    plus.innerHTML = "+";
    price.innerHTML = item.price + "₽";

    place.append(product);
    product.append(left_of_product, right_of_product);
    left_of_product.append(imgOfProduct, spanOfNPandWght);
    spanOfNPandWght.append(nameOfProduct, weight);
    right_of_product.append(count, price);
    count.append(top_count_style, center, bottom_count_style);
    center.append(minus, modal_numb, plus);

    plus.onclick = () => {
      if (item.count >= 19) {
        item.count = 0;
        modal_numb.innerHTML = item.count + "шт";
      }
      item.count += 1;
      modal_numb.innerHTML = item.count + "шт";
      total_price = 0;

      price.innerHTML = item.price * item.count + "₽";
      let t = 0;
      let allPriceNumb = document.querySelector(".all-price-number");

      for (let i of basket.dish) {
        t = i.count * i.price;
        total_price = t + total_price;
      }

      allPriceNumb.textContent = total_price + "₽";
    };

    minus.onclick = () => {
      if (item.count <= 1) {
        item.count = 19;
        modal_numb.innerHTML = item.count + "шт";

        let total_price = 0;
        let allPriceNumb = document.querySelector(".all-price-number");
        price.innerHTML = item.price * item.count + "₽";

        for (let i of basket.dish) {
          let t = i.count * i.price;
          total_price -= t;
          // console.log(i.price, i.count, i.count * i.price);
        }

        allPriceNumb.textContent = Math.abs(total_price) + "₽";
      } else {
        item.count -= 1;
        modal_numb.innerHTML = item.count + "шт";

        let total_price = 0;
        let allPriceNumb = document.querySelector(".all-price-number");
        price.innerHTML = item.price * item.count + "₽";

        for (let i of basket.dish) {
          let t = i.count * i.price;
          total_price -= t;
          // console.log(i.price, i.count, i.count * i.price);
        }

        allPriceNumb.textContent = Math.abs(total_price) + "₽";
      }
    };

    total_price = 0;
    let t = 0;
    let allPriceNumb = document.querySelector(".all-price-number");

    for (let i of basket.dish) {
      t = i.count * i.price;
      total_price = t + total_price;
    }
    allPriceNumb.textContent = total_price + "₽";

    item.count = 1;
    modal_numb.innerHTML = item.count + 0 + "шт";
  }
  const fUBK = (arr, key) => {
    const seen = new Set();
    return arr.filter((item) => {
      const isDublicate = seen.has(item[key]);
      seen.add(item[key]);
      return !isDublicate;
    });
  };
  const uniqueItems = fUBK(basket.dish, "name");
  console.log(uniqueItems);

  let countlenght = 0;

  countlenght = basket.dish.length;
  all_count_n.innerHTML = countlenght;

}
// console.log(categories.hot);
basket_counter.classList.remove("hidden");

let num = basket.dish.length;
basket_counter.innerHTML = num;

let total = document.querySelector(".total");

total.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/pages/basket.html`;
  for (let item of basket.dish) {
    axios.post("http://localhost:3002/total_basket", item);
  }
});