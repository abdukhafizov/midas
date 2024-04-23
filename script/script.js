// массив с едой 
// категории 
// разделение категорий на горячие и холодные
// динамическое отображение категорий
// категории в ссылках 
//  при клике например на горячие блюда вышли назыания именно этих блюд а старая штучка удалилась !

let hot_arrow = document.querySelector("#hot_arrow")
let hot_arrow_box = document.querySelector(".hot_arrow_box")
// let hotdishes = document.querySelector(".hotdishes")
// let blackBox = document.querySelector(".blackBox")
let first_hot_click = document.querySelector(".first_hot_click")
let about_popular_dishes = document.querySelector(".about_popular_dishes")

let dishes = [
    {
        id: Math.random(),
        menuImg: "../img/khachapuri.svg",
        bigImg: "https://cdn.tasteatlas.com/images/dishes/3d92f77889fa49fe9e3ca4c761109e86.jpg?m=facebook",
        name: "Khachapuri in Adjarian",
        title: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        weight: 430,
        price: 470,
        basket: false,
        status: true,
        category: "khinkali",
        Varieties: {

            first: {
                name: "C сыром",
                cost: 125,
                weight: 80,
            },
            second: {
                name: "Традиционные",
                cost: 115,
                weight: 80,
            },
            third: {
                name: "Из баранины с тархуном",
                cost: 125,
                weight: 80,
            },
        }
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/traditional.svg",
        bigImg: "https://static.tildacdn.com/tild6566-3438-4664-b134-373166353832/___10.png",
        name: "Хинкали традиционные (6шт)",
        title: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        weight: 350,
        price: 495,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Fried\ khinkali.svg",
        bigImg: "https://media-cdn.tripadvisor.com/media/photo-s/1b/ed/cc/e6/caption.jpg",
        name: "Хинкали жаренные (6шт)",
        title: 'Пряные жаренные хинкали с начинкой из ароматной баранины со специями.',
        weight: 350,
        price: 520,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Low-calorie\ lunch\ with\ yogurt.svg",
        bigImg: "https://recfood.ru/wp-content/uploads/2019/12/cezar-salat-e1508495161510.jpg",
        name: "Ланч низкокалорийный",
        title: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        weight: 450,
        price: 1148,
        basket: false,
        status: false,
        category: "salad"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Khachapuri\ in\ Megrelian.svg",
        bigImg: "https://hip2go.ru/penza/api2/images/IikoProducts633/199e8a670d-1_1000x.jpg",
        name: "Хачапури по-мегрельски",
        title: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        weight: 430,
        price: 490,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Hamburger\ patty\ with\ potatoes\ in\ a\ rustic\ way.svg",
        bigImg: "https://ferum55.ru/wp-content/uploads/2021/05/bifshteks-solsberi-s-fermerskim-kartofelem-.jpg",
        name: "Котлета с картофелем по-деревенски",
        title: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        weight: 350,
        price: 520,
        basket: false,
        status: true,
        category: "hot",
        Varieties: {

            first: {
                name: "C сыром",
                cost: 125,
                weight: 80,
            },
            second: {
                name: "Традиционные",
                cost: 115,
                weight: 80,
            },
            third: {
                name: "Из баранины с тархуном",
                cost: 125,
                weight: 80,
            },
        }
    },
    // -------------
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Mask\ Group.svg",
        bigImg: "https://cdn.tasteatlas.com/images/dishes/3d92f77889fa49fe9e3ca4c761109e86.jpg?m=facebook",
        name: "Khachapuri in Adjarian",
        title: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        weight: 430,
        price: 470,
        basket: false,
        status: true,
        category: "khinkali",
        Varieties: {

            first: {
                name: "C сыром",
                cost: 125,
                weight: 80,
            },
            second: {
                name: "Традиционные",
                cost: 115,
                weight: 80,
            },
            third: {
                name: "Из баранины с тархуном",
                cost: 125,
                weight: 80,
            },
        }
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Mask\ Group-1.svg",
        bigImg: "https://static.tildacdn.com/tild6566-3438-4664-b134-373166353832/___10.png",
        name: "Хинкали традиционные (6шт)",
        title: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        weight: 350,
        price: 495,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Mask\ Group-2.svg",
        bigImg: "https://media-cdn.tripadvisor.com/media/photo-s/1b/ed/cc/e6/caption.jpg",
        name: "Хинкали жаренные (6шт)",
        title: 'Пряные жаренные хинкали с начинкой из ароматной баранины со специями.',
        weight: 350,
        price: 520,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Mask\ Group-3.svg",
        bigImg: "https://recfood.ru/wp-content/uploads/2019/12/cezar-salat-e1508495161510.jpg",
        name: "Ланч низкокалорийный",
        title: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        weight: 450,
        price: 1148,
        basket: false,
        status: false,
        category: "salad"
    },
    {
        id: Math.random(),
        menuImg: "../img/massiveDishes/Mask\ Group-4.svg)",
        bigImg: "https://hip2go.ru/penza/api2/images/IikoProducts633/199e8a670d-1_1000x.jpg",
        name: "Хачапури по-мегрельски",
        title: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        weight: 430,
        price: 490,
        basket: false,
        status: false,
        category: "khinkali"
    },
    {
        id: Math.random(),
        menuImg: "(../img/massiveDishes/Mask\ Group-5.svg)",
        bigImg: "https://ferum55.ru/wp-content/uploads/2021/05/bifshteks-solsberi-s-fermerskim-kartofelem-.jpg",
        name: "Котлета с картофелем по-деревенски",
        title: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        weight: 350,
        price: 520,
        basket: false,
        status: true,
        category: "hot",
        Varieties: {

            first: {
                name: "C сыром",
                cost: 125,
                weight: 80,
            },
            second: {
                name: "Традиционные",
                cost: 115,
                weight: 80,
            },
            third: {
                name: "Из баранины с тархуном",
                cost: 125,
                weight: 80,
            },
        }
    },

]

let categories = [
    {
        name: "hot",
        hot: []
    }
]

for (let item of dishes) {
    for (let item2 of categories) {
        item.category = item.category.toLowerCase().trim()

        item2.hot.push(item)
        // if (item.category == "hot") {
        //     item2.hot.hotDishes.push(item);
        // } 
        // else if (item.category == "khinkali") {
        //     item2.hot.khinkals.push(item);
        // } 
    }
}
console.log(categories);

hot_arrow.onclick = () => {
    hot_arrow_box.classList.toggle("hidden")
}

first_hot_click.onclick = () => {
    hot_arrow_box.classList.toggle("hidden")
}



for (let item of categories) {
    for (let dish of item.hot) {
        let a = document.createElement("a");
        a.classList.add("a_of_black");
        a.innerHTML = dish.name;
        hot_arrow_box.append(a);
    }
}

// function reload(dishes) {
    for (let item of dishes) {
        let dish = document.createElement("div")
        let first_img = document.createElement("img")
        let ab_dish = document.createElement("h2")
        let weight = document.createElement("div")
        let text_of_salmon = document.createElement("p")
        let p_w_bs = document.createElement("span")
        let price = document.createElement("p")
        let sec_img = document.createElement("img")

        dish.classList.add("dish")
        ab_dish.classList.add("ab_dish")
        ab_dish.id = "dish_of_menu"
        weight.classList.add("weight")
        text_of_salmon.classList.add("text_of_salmon")
        p_w_bs.classList.add("p_w_bs")
        price.classList.add("price")

        first_img.src = item.menuImg
        sec_img.src = "./img/basket.svg"

        ab_dish.innerHTML = item.name
        weight.innerHTML = item.weight
        text_of_salmon.innerHTML = item.title
        price.innerHTML = item.price

        about_popular_dishes.append(dish)
        dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs)
        p_w_bs.append(price, sec_img)
    }
// }
// reload()