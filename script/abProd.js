let nameOfProduct = document.querySelector("#nameOfProduct");
let url = window.location.href;
let box_of_products_in_basket = document.querySelector(
  ".box_of_products_in_basket"
);
let all_count_n = document.querySelector(".all-count-number");

let url_id = url.slice(url.lastIndexOf("=") + 1);
axios.get(`http://localhost:3002/dishes/${url_id}`).then(function (res) {
  let data = res.data;
  console.log(data, typeof data);
  abProd(data);
});

axios.get(`http://localhost:3002/hot/${url_id}`).then(function (res) {
  let data = res.data;
  console.log(data, typeof data);
  abProd(data);
});

axios.get(`http://localhost:3002/khinkali/${url_id}`).then(function (res) {
  let data = res.data;
  console.log(data, typeof data);
  abProd(data);
});

axios.get(`http://localhost:3002/deserts/${url_id}`).then(function (res) {
  let data = res.data;
  abProd(data);
  // ModalBasket(data)
});

axios.get("http://localhost:3002/dishes").then(function (res) {
  let data = res.data;
  moreDishes(data);
  // ModalBasket(data)
});
axios.get("http://localhost:3002/hot").then(function (res) {
  let data = res.data;
  hotArrow(data)
  // ModalBasket(data)
});

let basket = {
  allPrice: 0,
  count: 1,
  dish: [],
};


let basket_counter = document.querySelector(".basket_counter");
let about_product_slide = document.querySelector(".about_product_slide");
//--------СОЗДАНИЕ ИНФОРМАЦИИ ОБ БЛЮДЕ
function abProd(obj) {
  console.log(obj);
  obj.count = 1
  let grids_of_aboutProduct_slide = document.createElement("div");
  let nameOfProduct = document.createElement("h4");
  let tabs = document.createElement("a");
  let tab_active = document.createElement("span");
  let gridsOfAboutProductSlide = document.createElement("div");
  let leftAboutProduct = document.createElement("div");
  let productImg = document.createElement("img");
  let blockOfPoints = document.createElement("span");
  let rightAboutProduct = document.createElement("div");
  let modalBlocks = document.createElement("div");
  let top_title_AbPr = document.createElement("p");
  let modalBlock = document.createElement("div");
  let titleWithWeight = document.createElement("span");
  let abDish = document.createElement("p");
  let weight = document.createElement("div");
  let count = document.createElement("div");
  let top_count_style = document.createElement("div");
  let center = document.createElement("div");
  let minus = document.createElement("span");
  let modal_numb = document.createElement("span");
  let plus = document.createElement("span");
  let bottom_count_style = document.createElement("div");
  let priceWithBasket = document.createElement("span");
  let price = document.createElement("p");
  let basketImg = document.createElement("img");
  let descriptionTitle = document.createElement("p");
  let descriptionOfProduct = document.createElement("p");
  let main = document.createElement("a");

  grids_of_aboutProduct_slide.classList.add("grids_of_aboutProduct_slide");
  tabs.classList.add("tabs");
  gridsOfAboutProductSlide.classList.add("grids_of_aboutProduct_slide");
  leftAboutProduct.classList.add("left_aboutProduct");
  blockOfPoints.classList.add("block_of_points");
  rightAboutProduct.classList.add("right_aboutProduct");
  modalBlocks.classList.add("modal_blocks");
  top_title_AbPr.classList.add("top_title_AbPr");
  modalBlock.classList.add("modal_block");
  titleWithWeight.classList.add("titleWithWeight");
  abDish.classList.add("ab_dish");
  weight.classList.add("weight");
  count.classList.add("count");
  top_count_style.classList.add("top_count_style");
  center.classList.add("center");
  bottom_count_style.classList.add("bottom_count_style");
  priceWithBasket.classList.add("p_w_bs");
  price.classList.add("price");
  descriptionTitle.classList.add("top_title_AbPr");

  tab_active.id = "tab_active";
  modalBlocks.id = "AbMdBlocks";
  top_title_AbPr.id = "speciesAbPr";
  modalBlock.id = "AbMdBlock";
  minus.id = "minus";
  modal_numb.id = "modal_numb";
  plus.id = "plus";
  nameOfProduct.id = "nameOfProduct";
  descriptionOfProduct.id = "descriptionOfProduct";


  productImg.src = obj.bigImg;
  basketImg.src = "../img/basket.svg";
  nameOfProduct.innerHTML = obj.name;
  weight.innerHTML = obj.weight + "г";
  minus.innerHTML = "-";
  modal_numb.innerHTML = obj.count + "шт";
  plus.innerHTML = "+";
  price.innerHTML = obj.price + "₽";
  descriptionOfProduct.innerHTML = obj.title;
  main.innerHTML = "Главная /";
  tab_active.innerHTML = "О продукте";
  descriptionTitle.innerHTML = "ОПИСАНИЕ:";
  abDish.innerHTML = obj.name;
  top_title_AbPr.innerHTML = "РАЗНОВИДНОСТЬ:";
  main.style.cursor = "pointer";

  about_product_slide.append(nameOfProduct, tabs, gridsOfAboutProductSlide);
  gridsOfAboutProductSlide.append(leftAboutProduct, rightAboutProduct);
  tabs.append(main, tab_active);
  leftAboutProduct.append(productImg, blockOfPoints);
  rightAboutProduct.append(modalBlocks, descriptionTitle, descriptionOfProduct);
  // modalBlocks.append(top_title_AbPr, modalBlock)
  modalBlock.append(titleWithWeight, count, priceWithBasket);
  titleWithWeight.append(abDish, weight);
  count.append(top_count_style, center, bottom_count_style);
  center.append(minus, modal_numb, plus);
  priceWithBasket.append(price, basketImg);

  main.addEventListener("click", () => {
    window.location.href = `../index.html`;
  });

  plus.onclick = () => {
    if (obj.count >= 19) {
      obj.count = 1;
      modal_numb.innerHTML = obj.count + "шт";
    }

    obj.count += 1;
    modal_numb.innerHTML = obj.count + "шт";

    price.innerHTML = obj.price * obj.count + "₽";
  };
  minus.onclick = () => {
    if (obj.count <= 1) {
      obj.count = 19;
      modal_numb.innerHTML = obj.count + "шт";
      price.innerHTML = obj.price * obj.count + "₽";
    } else {
      obj.count -= 1;
      modal_numb.innerHTML = obj.count + "шт";
      price.innerHTML = obj.price * obj.count + "₽";
    }
  };

  basketImg.onclick = () => {
    let num = +basket_counter.innerHTML;

    basketImg.classList.toggle("star_active");
    if (basketImg.classList.contains("star_active")) {
      basket.dish.push(obj);
      ModalBasket(basket.dish, box_of_products_in_basket);
      basket_counter.innerHTML = num + 1;
      all_count_n.innerHTML = num + 1;
      localStorage.setItem("basket", JSON.stringify(basket.dish));
    } else {
      basket_counter.innerHTML = num - 1;
      all_count_n.innerHTML = num - 1;
      basket.dish.splice(basket.dish.indexOf(obj), 1);
      ModalBasket(basket.dish, box_of_products_in_basket);
      console.log(basket.dish);
    }
  };

  let modal_blocks = document.querySelector(".modal_blocks");
  //-----ВАРИАЦИИ БЛЮДА(25.07 они тут были)

  modalBlocks.append(top_title_AbPr, modalBlock);
}

//КОРЗИНА

let parent_basket_modal = document.querySelector(".parent_basket_modal");
let basketLink = document.querySelector("#basketLink");
let exit = document.querySelector("#close_basket");

basketLink.onclick = () => {
  parent_basket_modal.classList.add("open");

  for (let item of basket.dish) {
    ModalBasket(basket.dish, box_of_products_in_basket);
  }
};

close_basket.onclick = () => {
  parent_basket_modal.classList.remove("open");
};

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

let siper = new Swiper(".swiper", {
  watchSlidesProgress: true,
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

function moreDishes(arr) {
  let swiper_wrapper = document.querySelector(".swiper-wrapper");

  for (let item of arr) {
    let swiperSlide = document.createElement("div");
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
    swiperSlide.classList.add("swiper-slide");

    first_img.src = item.menuImg;
    sec_img.src = "../img/basket.svg";

    ab_dish.innerHTML = item.name;
    weight.innerHTML = item.weight + "г";
    text_of_salmon.innerHTML = item.title;
    price.innerHTML = item.price + "₽";
    species.innerHTML = "3 ВИДА";
    species.style.display = "none";
    sec_img.classList.add("nonee");

    swiper_wrapper.append(swiperSlide);
    swiperSlide.append(dish);
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
    };
  }
}

basket_counter.classList.remove("hidden");

let total = document.querySelector(".total");

total.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/pages/basket.html`;
  for (let item of basket.dish) {
    axios.post("http://localhost:3002/total_basket", item);
  }
});

let num = basket.dish.length;
basket_counter.innerHTML = num;

let first_hot_click = document.querySelector(".first_hot_click");

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

first_hot_click.onclick = () => {
  hot_arrow_box.classList.toggle("hidden");
};



// в отдельном файле создатбь 3 демо слайдера -
// сделать сладйер внутри слайдера +
// посмотреть все API документацию(можно ролики в ютуб) +
// на этой странице через js закреийтить слайды из базы данных
