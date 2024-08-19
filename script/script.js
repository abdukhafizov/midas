axios.get("http://localhost:3002/dishes").then(function (res) {
  let data = res.data;
  console.log(data);
  reload(data);
  // modalRel(data)
  // ModalBasket(data)
});
axios.get("http://localhost:3002/hot").then(function (res) {
  let data = res.data;
  const idToFind = "14";
  const foundItem = data.find((item) => item.id === idToFind);

  console.log(foundItem);
  indexSalmon(foundItem);
  hotArrow(data)
  // modalRel(data)
  // ModalBasket(data)
});

axios.get("http://localhost:3002/deserts").then(function (res) {
  let data = res.data;
  const idToFind = "18";
  const foundItem = data.find((item) => item.id === idToFind);

  console.log(foundItem);
  dailyDish(foundItem);
  // modalRel(data)
  // ModalBasket(data)
});

//     let url = window.location.href
//     let url_id = url.slice(url.lastIndexOf("=") + 1)

// axios.get(`http://localhost:3002/dishes/${url_id}`)
//    .then(function (res) {
//        let data = res.data
//        console.log(data, typeof data);

//    })
let id;
let hot_arrow = document.querySelector("#hot_arrow");
let hot_arrow_box = document.querySelector(".hot_arrow_box");
// let hotdishes = document.querySelector(".hotdishes")
// let blackBox = document.querySelector(".blackBox")
let first_hot_click = document.querySelector(".first_hot_click");
let about_popular_dishes = document.querySelector(".about_popular_dishes");
let basket_counter = document.querySelector(".basket_counter");
let exit = document.querySelector(".exit");
let parent_modal = document.querySelector(".parent_modal");
let count = 0;
let count_of_modal = 0;
let pwImg = document.querySelector("#pwImg");
let emptyShopper = document.querySelector("#emptyShopper");
let totalBlock = document.querySelector(".totalBlock");
let all_count_n = document.querySelector(".all-count-number");

let countlenght = 0;

let categories = [
  {
    name: "hot",
    hot: [],
  },
  {
    name: "khinkals",
    khinkals: [],
  },
];

let basket = {
  allPrice: 0,
  count: 1,
  dish: [],
};

//---ЛОКАЛ СТРЕЙДЖ

if (typeof localStorage.getItem("basket") === "string") {
  basket.dish = JSON.parse(localStorage.getItem("basket"));
}
//---------
console.log(basket);

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

first_hot_click.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};

//Создание элементов (блюд)
all_count_n.innerHTML = basket.dish.length;

function dailyDish(arr) {
  let ab_dailyDish = document.querySelector(".ab_dailyDish");

  let photoOftiramisu = document.createElement("div");
  let not_abs_tr = document.createElement("span");
  let ab_dish = document.createElement("p");
  let weight = document.createElement("div");
  let p_w_bs = document.createElement("span");
  let price = document.createElement("p");
  let sec_img = document.createElement("img");

  photoOftiramisu.classList.add("photoOftiramisu");
  not_abs_tr.classList.add("not_abs_tr");
  ab_dish.classList.add("ab_dish");
  weight.classList.add("weight");
  p_w_bs.classList.add("p_w_bs");
  price.classList.add("price");

  ab_dish.id = "ab_tiramisu";
  weight.id = "tira_w";
  p_w_bs.id = "p_w_bs_tirami";

  sec_img.src = "../img/basket.svg";
  ab_dish.innerHTML = arr.name;
  weight.innerHTML = arr.weight + "г";
  price.innerHTML = arr.price + "₽";
  photoOftiramisu.style.backgroundImage = `url(${arr.menuImg})`;

  ab_dailyDish.append(photoOftiramisu, not_abs_tr);
  not_abs_tr.append(ab_dish, weight, p_w_bs);
  p_w_bs.append(price, sec_img);

  ab_dish.addEventListener("click", () => {
    window.location.href = `/pages/about_product.html?id=${arr.id}`;
  });

  sec_img.onclick = () => {
    basket_counter.classList.remove("hidden");
    // emptyShopper.style.display = "none"
    let num = +basket_counter.innerHTML;
    totalBlock.style.display = "flex";
    // count++
    //можно при добавлении в корзину сразу же увелчиивать итоговую цену
    sec_img.classList.toggle("star_active");
    if (sec_img.classList.contains("star_active")) {
      basket_counter.innerHTML = num + 1;
      all_count_n.innerHTML = num + 1;
      basket.dish.push(arr);
      ModalBasket(basket.dish, box_of_products_in_basket);
      // emptyShopper.classList.add("hidden")
      localStorage.setItem("basket", JSON.stringify(basket.dish));
      sec_img.src = "../img/Inbasket.svg";
      arr.basket == true;
      // console.log(item.basket);
    } else {
      basket_counter.innerHTML = num - 1;
      all_count_n.innerHTML = num - 1;
      basket.dish.splice(basket.dish.indexOf(arr), 1);
      ModalBasket(basket.dish, box_of_products_in_basket);
      // emptyShopper.classList.remove("hidden")
      sec_img.src = "../img/basket.svg";
      arr.basket == false;
      // console.log(item.basket);
    }

    console.log(basket.dish);
    console.log(basket.dish.length);
  };
}

function indexSalmon(arr) {
  let ab_right = document.querySelector(".ab_right");

  let ab_salmon = document.createElement("div");
  let ab_dish = document.createElement("h2");
  let weight = document.createElement("div");
  let text_of_salmon = document.createElement("p");
  let p_w_bs = document.createElement("span");
  let price = document.createElement("p");
  let sec_img = document.createElement("img");

  ab_dish.classList.add("ab_dish");
  weight.classList.add("weight");
  text_of_salmon.classList.add("text_of_salmon");
  p_w_bs.classList.add("p_w_bs");
  price.classList.add("price");
  ab_salmon.classList.add("ab_salmon");
  sec_img.id = "pwImg";
  sec_img.src = "../img/basket.svg";
  ab_dish.id = "indexfishtext";
  
  // ab_salmon.setAttribute("data-tilt", "")

  ab_dish.innerHTML = arr.name;
  weight.innerHTML = arr.weight + "г";
  text_of_salmon.innerHTML = arr.title;
  price.innerHTML = arr.price + "₽";

  ab_right.append(ab_salmon);
  ab_salmon.append(ab_dish, weight, text_of_salmon, p_w_bs);
  p_w_bs.append(price, sec_img);

  ab_dish.addEventListener("click", () => {
    window.location.href = `/pages/about_product.html?id=${arr.id}`;
  });

  sec_img.onclick = () => {
    basket_counter.classList.remove("hidden");
    // emptyShopper.style.display = "none"
    let num = +basket_counter.innerHTML;
    totalBlock.style.display = "flex";
    // count++
    //можно при добавлении в корзину сразу же увелчиивать итоговую цену
    sec_img.classList.toggle("star_active");
    if (sec_img.classList.contains("star_active")) {
      basket_counter.innerHTML = num + 1;
      all_count_n.innerHTML = num + 1;
      basket.dish.push(arr);
      ModalBasket(basket.dish, box_of_products_in_basket);
      // emptyShopper.classList.add("hidden")
      localStorage.setItem("basket", JSON.stringify(basket.dish));
      sec_img.src = "../img/Inbasket.svg";
      arr.basket == true;
      // console.log(item.basket);
    } else {
      basket_counter.innerHTML = num - 1;
      all_count_n.innerHTML = num - 1;
      basket.dish.splice(basket.dish.indexOf(arr), 1);
      ModalBasket(basket.dish, box_of_products_in_basket);
      // emptyShopper.classList.remove("hidden")
      sec_img.src = "../img/basket.svg";
      arr.basket == false;
      // console.log(item.basket);
    }

    console.log(basket.dish);
    console.log(basket.dish.length);
  };
}

function reload(arr) {
  for (let item of arr) {
    if (item.Varieties) {
      let dish = document.createElement("div");
      let first_img = document.createElement("img");
      let ab_dish = document.createElement("a");
      let weight = document.createElement("div");
      let text_of_salmon = document.createElement("p");
      let p_w_bs = document.createElement("span");
      let price = document.createElement("p");
      let sec_img = document.createElement("img");
      let inshoper = document.createElement("div");
      let species = document.createElement("div");

      dish.classList.add("dish");
      ab_dish.classList.add("ab_dish");
      ab_dish.id = "dish_of_menu";
      weight.classList.add("weight");
      text_of_salmon.classList.add("text_of_salmon");
      p_w_bs.classList.add("p_w_bs");
      price.classList.add("price");
      inshoper.classList.add("inshoper");
      species.classList.add("species");

      first_img.src = item.menuImg;
      sec_img.src = "../img/basket.svg";

      ab_dish.innerHTML = item.name;
      weight.innerHTML = item.weight + "г";
      text_of_salmon.innerHTML = item.title;
      price.innerHTML = item.price + "₽";
      // species.innerHTML = "3 ВИДА";
      species.style.display = "none";
      // sec_img.style.display = "block";
      sec_img.classList.add("nonee");
      price.id = "scpecies";

      about_popular_dishes.append(dish);
      dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs);
      p_w_bs.append(price, sec_img);

      ab_dish.addEventListener("click", () => {
        window.location.href = `/pages/about_product.html?id=${item.id}`;
      });

      sec_img.onclick = () => {
        basket_counter.classList.remove("hidden");
        // emptyShopper.style.display = "none"
        let num = +basket_counter.innerHTML;
        totalBlock.style.display = "flex";
        // count++
        //можно при добавлении в корзину сразу же увелчиивать итоговую цену
        sec_img.classList.toggle("star_active");
        if (sec_img.classList.contains("star_active")) {
          basket_counter.innerHTML = num + 1;
          all_count_n.innerHTML = num + 1;
          basket.dish.push(item);
          ModalBasket(basket.dish, box_of_products_in_basket);
          // emptyShopper.classList.add("hidden")
          localStorage.setItem("basket", JSON.stringify(basket.dish));
          sec_img.src = "../img/Inbasket.svg";
          item.basket == true;
          console.log(item.basket);
        } else {
          basket_counter.innerHTML = num - 1;
          all_count_n.innerHTML = num - 1;
          basket.dish.splice(basket.dish.indexOf(item), 1);
          ModalBasket(basket.dish, box_of_products_in_basket);
          // emptyShopper.classList.remove("hidden")
          sec_img.src = "../img/basket.svg";
          item.basket == false;
          console.log(item.basket);
        }

        console.log(basket.dish);
        console.log(basket.dish.length);
      };

      // species.onclick = () => {
      //   parent_modal.classList.remove("hide");
      //   for (let item2 of item.Varieties) {
      //     console.log(item2);

      //     let modal_blocks = document.querySelector(".modal_blocks");

      //     let modal_block = document.createElement("div");
      //     let titleWithWeight = document.createElement("span");
      //     let ab_dish = document.createElement("p");
      //     let weight = document.createElement("div");
      //     let count = document.createElement("div");
      //     let top_count_style = document.createElement("div");
      //     let center = document.createElement("div");
      //     let minus = document.createElement("span");
      //     let modal_numb = document.createElement("span");
      //     let plus = document.createElement("span");
      //     let bottom_count_style = document.createElement("div");
      //     let p_w_bs = document.createElement("span");
      //     let price = document.createElement("p");
      //     let basketImg = document.createElement("img");

      //     modal_block.classList.add("modal_block");
      //     titleWithWeight.classList.add("titleWithWeight");
      //     ab_dish.classList.add("ab_dish");
      //     weight.classList.add("weight");
      //     count.classList.add("count");
      //     top_count_style.classList.add("top_count_style");
      //     center.classList.add("center");
      //     minus.id = "minus";
      //     modal_numb.id = "modal_numb";
      //     plus.id = "plus";
      //     bottom_count_style.classList.add("bottom_count_style");
      //     p_w_bs.classList.add("p_w_bs");
      //     price.classList.add("price");
      //     basketImg.classList.add("baskimg");

      //     basketImg.src = "../img/basket.svg";
      //     ab_dish.innerHTML = item2.name;
      //     weight.innerHTML = item2.weight + "г";
      //     price.innerHTML = item2.price + "₽";
      //     minus.innerHTML = "-";
      //     modal_numb.innerHTML = item2.count + "шт";
      //     plus.innerHTML = "+";

      //     basketImg.setAttribute("data-name", item2.id);

      //     exit.onclick = () => {
      //       parent_modal.classList.add("hide");
      //       let m_b = document.querySelectorAll(".modal_block");
      //       for (let items of m_b) {
      //         items.remove();
      //       }
      //     };

      //     modal_blocks.append(modal_block);
      //     modal_block.append(titleWithWeight, count, p_w_bs);
      //     titleWithWeight.append(ab_dish, weight);
      //     // count.append(top_count_style, center, bottom_count_style)
      //     center.append(minus, modal_numb, plus);
      //     p_w_bs.append(price, basketImg);

      //     basketImg.onclick = () => {
      //       basket_counter.classList.remove("hidden");
      //       // emptyShopper.style.display = "none"
      //       let num = +basket_counter.innerHTML;
      //       totalBlock.style.display = "flex";
      //       // count++
      //       //можно при добавлении в корзину сразу же увелчиивать итоговую цену
      //       basketImg.classList.toggle("star_active");
      //       if (basketImg.getAttribute("data-name") == 0) {
      //         item.id_v0 = basketImg.getAttribute("data-name");
      //       } else if (basketImg.getAttribute("data-name") == 1) {
      //         item.id_v1 = basketImg.getAttribute("data-name");
      //       } else if (basketImg.getAttribute("data-name") == 2) {
      //         item.id_v2 = basketImg.getAttribute("data-name");
      //       }

      //       if (basketImg.classList.contains("star_active")) {
      //         basket_counter.innerHTML = num + 1;
      //         all_count_n.innerHTML = num + 1;

      //         basket.dish.push(item);
      //         console.log(item);
      //         ModalBasket(basket.dish, box_of_products_in_basket);
      //         // emptyShopper.classList.add("hidden")
      //         localStorage.setItem("basket", JSON.stringify(basket.dish));
      //       } else {
      //         basket_counter.innerHTML = num - 1;
      //         all_count_n.innerHTML = num - 1;
      //         basket.dish.splice(basket.dish.indexOf(item), 1);
      //         ModalBasket(basket.dish, box_of_products_in_basket);
      //         // emptyShopper.classList.remove("hidden")
      //       }
      //       console.log(basket.dish);
      //       console.log(basket.dish.length);
      //       // }
      //     };
      //   }
      // };

      console.log(item.Varieties);
    } else {
      let dish = document.createElement("div");
      let first_img = document.createElement("img");
      let ab_dish = document.createElement("a");
      let weight = document.createElement("div");
      let text_of_salmon = document.createElement("p");
      let p_w_bs = document.createElement("span");
      let price = document.createElement("p");
      let sec_img = document.createElement("img");
      let inshoper = document.createElement("div");
      let species = document.createElement("div");

      dish.classList.add("dish");
      ab_dish.classList.add("ab_dish");
      ab_dish.id = "dish_of_menu";
      weight.classList.add("weight");
      text_of_salmon.classList.add("text_of_salmon");
      p_w_bs.classList.add("p_w_bs");
      price.classList.add("price");
      inshoper.classList.add("inshoper");
      species.classList.add("species");

      first_img.src = item.menuImg;
      sec_img.src = "../img/basket.svg";

      ab_dish.innerHTML = item.name;
      weight.innerHTML = item.weight + "г";
      text_of_salmon.innerHTML = item.title;
      price.innerHTML = item.price + "₽";
      species.style.display = "none";
      sec_img.classList.add("nonee");
      sec_img.style.transition = "1s";

      about_popular_dishes.append(dish);
      dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs);
      p_w_bs.append(price, sec_img, species);

      sec_img.onclick = () => {
        basket_counter.classList.remove("hidden");
        // emptyShopper.style.display = "none"
        let num = +basket_counter.innerHTML;
        totalBlock.style.display = "flex";
        // count++
        //можно при добавлении в корзину сразу же увелчиивать итоговую цену
        sec_img.classList.toggle("star_active");
        if (sec_img.classList.contains("star_active")) {
          basket_counter.innerHTML = num + 1;
          all_count_n.innerHTML = num + 1;
          basket.dish.push(item);
          ModalBasket(basket.dish, box_of_products_in_basket);
          // emptyShopper.classList.add("hidden")
          localStorage.setItem("basket", JSON.stringify(basket.dish));
          sec_img.src = "../img/Inbasket.svg";
        } else {
          basket_counter.innerHTML = num - 1;
          all_count_n.innerHTML = num - 1;
          basket.dish.splice(basket.dish.indexOf(item), 1);
          ModalBasket(basket.dish, box_of_products_in_basket);
          // emptyShopper.classList.remove("hidden")
          sec_img.src = "../img/basket.svg";
        }
        console.log(basket.dish);
        console.log(basket.dish.length);
      };

      ab_dish.addEventListener("click", () => {
        window.location.href = `/pages/about_product.html?id=${item.id}`;
      });
    }
  }
}

console.log(basket.dish.length);

let parent_basket_modal = document.querySelector(".parent_basket_modal");
let basketLink = document.querySelector("#basketLink");

basketLink.onclick = () => {
  parent_basket_modal.classList.add("open");
  basket.dish = removeDuplicates(basket.dish);
  console.log(basket);
  for (let item of basket.dish) {
    ModalBasket(basket.dish, box_of_products_in_basket);
  }
};

basket_counter.classList.remove("hidden");

let num = basket.dish.length;
basket_counter.innerHTML = num;

close_basket.onclick = () => {
  parent_basket_modal.classList.remove("open");
};

// создание/перенесение элементов в корзину

let box_of_products_in_basket = document.querySelector(
  ".box_of_products_in_basket"
);

function ModalBasket(arr, place) {
  place.innerHTML = "";

  for (let item of arr) {
    console.log("not ok");
    let product = document.createElement("div");
    let imgOfProduct = document.createElement("img");
    let left_of_product = document.createElement("div");
    let spanOfNPandWght = document.createElement("span");
    let nameOfProduct = document.createElement("p");
    let weight = document.createElement("div");
    let subspecies = document.createElement("p");
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
    subspecies.classList.add("subspecies");

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
    spanOfNPandWght.append(nameOfProduct, subspecies, weight);
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

  //---ПРОВЕРКА НА ИДЕНЧИНОСТЬ
  const fUBK = (arr, key) => {
    const seen = new Set();
    return arr.filter((item) => {
      const isDublicate = seen.has(item[key]);
      seen.add(item[key]);
      return !isDublicate;
    });
  };
  const uniqueItems = fUBK(basket.dish, "name");
}

let total = document.querySelector(".total");

total.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/pages/basket.html`;
  // for (let item of basket.dish) {
  //   // axios.post("http://localhost:3002/total_basket", item);
  //   // localStorage.setItem("http://localhost:3002/total_basket", item)
  //   localStorage.setItem("basket", JSON.stringify(basket.dish));

  // }
});

let basketRend = function () {
  if (typeof localStorage.getItem("basket") != null) {
    basket.dish = JSON.parse(localStorage.getItem("basket"));
    console.log(basket.dish);
  } else {
    console.log("не раб");
  }
};

window.onload = function () {
  let numb = basket.dish.length;
  numb = basket_counter.innerHTML;
};

let aside = document.querySelector("aside");

window.addEventListener("load", () => {
  console.log("123");
  aside.classList.add("hide");
  setTimeout(() => {
    aside.remove();
  }, 2000);
});
console.log(id);

const removeDuplicates = (array) => {
  const uniqueObjects = new Set();
  const uniqueArray = [];

  array.forEach((item) => {
    const itemString = JSON.stringify(item);
    if (!uniqueObjects.has(itemString)) {
      uniqueObjects.add(itemString);
      uniqueArray.push(item);
    }
  });

  return uniqueArray;
};
//----

// localStorage.setItem("category", "13")
// localStorage.removeItem('Id')
// localStorage.clear()
// sessionStorage()
// bbj = JSON.stringify(bbj)
// bbj = JSON.parse(bbj)

// функция которая постоянно наблюдает за объектом есть там че нет
// проверка на уникальность (сделано)

// let items = [
//     {id: 1, name: "item 1", value: 100},
//     {id: 2, name: "item 2", value: 200},
//     {id: 3, name: "item 1", value: 400},
//     {id: 4, name: "item 4", value: 400},
//     {id: 5, name: "item 5", value: 500},
// ];

// const fUBK = (arr,key) => {
//     const seen = new Set()
//     return arr.filter(item =>{
//         const isDublicate = seen.has(item[key])
//         seen.add(item[key])
//         return !isDublicate
//     })
// }

// const uniqueItems = fUBK(items, "name")
// console.log(uniqueItems);

//patch and get

// btn.onclick = () => {
//     axios.get("http://localhost:3002/dishes")
//     .then(res =>{
//         let data = res.data

//         console.log(data);

//     })

// }

// secBtn.onclick = () =>{
//     axios.get("http://localhost:3002/total_basket")
//     .then(res => {
//         let data = res.data

//         console.log(data);

//         axios.put("http://localhost:3002/dishes", data)
//     })

// }

//при отправлении в корзину мы нажимаем на кнопку. После этого если нажата кнопка "1" создать ключ "айди 1" если создата кнопка "3" айд 3
// Исходя из ключей отрисовывать в корзине
