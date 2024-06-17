

axios.get("http://localhost:3002/dishes")
    .then(function (res) {
        let data = res.data
        console.log(data);
        reload(data)
        modalRel(data)
        // ModalBasket(data)
    })
let hot_arrow = document.querySelector("#hot_arrow")
let hot_arrow_box = document.querySelector(".hot_arrow_box")
// let hotdishes = document.querySelector(".hotdishes")
// let blackBox = document.querySelector(".blackBox")
let first_hot_click = document.querySelector(".first_hot_click")
let about_popular_dishes = document.querySelector(".about_popular_dishes")
let basket_counter = document.querySelector(".basket_counter")
let exit = document.querySelector(".exit")
let parent_modal = document.querySelector(".parent_modal")
let count = 0
let count_of_modal = 0
let pwImg = document.querySelector("#pwImg")
let emptyShopper = document.querySelector("#emptyShopper")
let totalBlock = document.querySelector(".totalBlock")
let all_count_n = document.querySelector(".all-count-number")

let countlenght = 0



// let click = document.querySelector("#click")

// let post_func = (data)=>{
//     let clock = document.querySelector("#clock")

//     clock.addEventListener("click", () => {


//             axios.post("http://localhost:3002/khinkali", data)
//     })
// }




// click.addEventListener("click", () => {
//     axios.post('http://localhost:3002/hot', {
//         id: Math.random(),
//         menuImg: "../img/massiveDishes/HamburgerPattyWithPotatoesInARusticWay.svg",
//         bigImg: "https://ferum55.ru/wp-content/uploads/2021/05/bifshteks-solsberi-s-fermerskim-kartofelem-.jpg",
//         name: "Котлета с картофелем",
//         title: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
//         weight: 350,
//         price: 520,
//         basket: false,
//         status: true,
//         category: "hot",
//         Varieties: [
//             {
//                 name: "C сыром",
//                 cost: 125,
//                 weight: 80,
//                 count: 0,
//             },
//             {
//                 name: "Традиционные",
//                 cost: 115,
//                 weight: 80,
//                 count: 0,
//             },
//             {
//                 name: "Из баранины с тархуном",
//                 cost: 125,
//                 weight: 80,
//                 count: 0,
//             },
//         ]
//     })
// })

let categories = [
    {
        name: "hot",
        hot: []
    },
    {
        name: "khinkals",
        khinkals: []
    }
]

let basket = {
    allPrice: 0,
    count: 1,
    dish: [

    ],
}

if(typeof localStorage.getItem('basket') === 'string'){
    basket.dish = JSON.parse(localStorage.getItem('basket'))
}
console.log(basket);
exit.onclick = () => {
    parent_modal.classList.add("hide")
}


//Распределил и запушил элементы из массива в другой ме=ассив по категориям

// for (let item of dishes) {
//     for (let item2 of categories) {
//         if (item.category === "hot") {
//             if (!item2.hot) {
//                 item2.hot = [];
//             }
//             item2.hot.push(item);
//         } else if (item.category === "khinkali") {
//             if (!item2.khinkals) {
//                 item2.khinkals = [];
//             }
//             item2.khinkals.push(item);
//         }
//     }
// }
// console.log(categories);

hot_arrow.onclick = () => {
    hot_arrow_box.classList.toggle("hidden")
}

//назыание блюд в загаловке
// for (let item of categories) {
//     for (let dish of item.hot) {
//         let a = document.createElement("a");
//         a.classList.add("a_of_black");
//         a.innerHTML = dish.name;
//         hot_arrow_box.append(a);
//     }
// }

first_hot_click.onclick = () => {
    hot_arrow_box.classList.toggle("hidden")
}



//Создание элементов (блюд)

function reload(arr) {
    for (let item of arr) {
        let dish = document.createElement("div")
        let first_img = document.createElement("img")
        let ab_dish = document.createElement("a")
        let weight = document.createElement("div")
        let text_of_salmon = document.createElement("p")
        let p_w_bs = document.createElement("span")
        let price = document.createElement("p")
        let sec_img = document.createElement("img")
        let inshoper = document.createElement("div")
        let species = document.createElement("div")

        dish.classList.add("dish")
        ab_dish.classList.add("ab_dish")
        ab_dish.id = "dish_of_menu"
        weight.classList.add("weight")
        text_of_salmon.classList.add("text_of_salmon")
        p_w_bs.classList.add("p_w_bs")
        price.classList.add("price")
        inshoper.classList.add("inshoper")
        species.classList.add("species")

        first_img.src = item.menuImg
        sec_img.src = "../img/basket.svg"
        ab_dish.href = "../pages/about_product.html"

        ab_dish.innerHTML = item.name
        weight.innerHTML = item.weight + "г"
        text_of_salmon.innerHTML = item.title
        price.innerHTML = item.price + "₽"
        species.innerHTML = "3 ВИДА"
        species.style.display = "none"
        sec_img.classList.add("nonee")

        about_popular_dishes.append(dish)
        dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs,)
        p_w_bs.append(price, sec_img, species)



        sec_img.onclick = () => {
            basket_counter.classList.remove("hidden")
            // emptyShopper.style.display = "none"
            let num = +basket_counter.innerHTML
            totalBlock.style.display = "flex"
            // count++
            //можно при добавлении в корзину сразу же увелчиивать итоговую цену 
            sec_img.classList.toggle("star_active")
            if (sec_img.classList.contains('star_active')) {
                basket_counter.innerHTML = num + 1
                all_count_n.innerHTML = num + 1
                basket.dish.push(item);
                ModalBasket(basket.dish, box_of_products_in_basket)
                emptyShopper.classList.add("hidden")
                localStorage.setItem("basket", JSON.stringify(basket.dish))

            } else {
                basket_counter.innerHTML = num - 1
                all_count_n.innerHTML = num - 1
                basket.dish.splice(basket.dish.indexOf(item), 1)
                ModalBasket(basket.dish, box_of_products_in_basket)
                emptyShopper.classList.remove("hidden")

            }
            console.log(basket.dish);
            console.log(basket.dish.length);

            // (тп = 0 )внутри цикла тотал прайс равно тотал прайс + айтем прайс 

            // let allPriceNumb = document.querySelector(".all-price-number")
            // let total = 0


            // for(let i of basket.dish){
            //     total += i.price
            //     allPriceNumb.innerHTML = total + "₽"
            // }

        }

        if (item.Varieties) {
            species.style.display = "block"
            sec_img.style.display = "none"
            price.id = "scpecies"
            // price.style.marginTop = "26"
        } else {
            console.log("no");
        }

        species.onclick = () => {
            parent_modal.classList.remove('hide')
        }
        // console.log(item);


    }
}



//создание элементов в вариациях еды 
function modalRel(arr) {
    let modal_blocks = document.querySelector(".modal_blocks")

    for (let item of arr[0].Varieties) {

        let modal_block = document.createElement("div")
        let titleWithWeight = document.createElement("span")
        let ab_dish = document.createElement("p")
        let weight = document.createElement("div")
        let count = document.createElement("div")
        let top_count_style = document.createElement("div")
        let center = document.createElement("div")
        let minus = document.createElement("span")
        let modal_numb = document.createElement("span")
        let plus = document.createElement("span")
        let bottom_count_style = document.createElement("div")
        let p_w_bs = document.createElement("span")
        let price = document.createElement("p")
        let basketImg = document.createElement("img")

        modal_block.classList.add("modal_block")
        titleWithWeight.classList.add("titleWithWeight")
        ab_dish.classList.add("ab_dish")
        weight.classList.add("weight")
        count.classList.add("count")
        top_count_style.classList.add("top_count_style")
        center.classList.add("center")
        minus.id = "minus"
        modal_numb.id = "modal_numb"
        plus.id = "plus"
        bottom_count_style.classList.add("bottom_count_style")
        p_w_bs.classList.add("p_w_bs")
        price.classList.add("price")

        basketImg.src = "../img/basket.svg"
        ab_dish.innerHTML = item.name;
        weight.innerHTML = item.weight + "г"
        price.innerHTML = item.price + "₽"
        minus.innerHTML = "-"
        modal_numb.innerHTML = item.count + "шт"
        plus.innerHTML = "+"



        modal_blocks.append(modal_block)
        modal_block.append(titleWithWeight, count, p_w_bs)
        titleWithWeight.append(ab_dish, weight)
        // count.append(top_count_style, center, bottom_count_style)
        center.append(minus, modal_numb, plus)
        p_w_bs.append(price, basketImg)

        console.log(item.count);
        minus.onclick = () => {

            if (item.count <= 0) {
                item.count = 0
            } else {
                item.count -= 1
                modal_numb.innerHTML = item.count + "шт"

            }
        }

        plus.onclick = () => {
            item.count += 1
            modal_numb.innerHTML = item.count + "шт"
        }



        basketImg.onclick = () => {
            basket_counter.classList.remove("hidden")
            let num = +basket_counter.innerHTML


            basketImg.classList.toggle("star_active")
            if (basketImg.classList.contains('star_active')) {
                basket.dish.push(item);
                ModalBasket(basket.dish, box_of_products_in_basket)
                basket_counter.innerHTML = num + 1
                all_count_n.innerHTML = num + 1
                localStorage.setItem("basket", JSON.stringify(basket.dish))

            } else {
                basket_counter.innerHTML = num - 1
                all_count_n.innerHTML = num - 1
                basket.dish.splice(basket.dish.indexOf(item), 1)
                ModalBasket(basket.dish, box_of_products_in_basket)
                console.log(basket.dish);
                
            }

            // let allPriceNumb = document.querySelector(".all-price-number")
            // let total = 0


            // for(let i of basket.dish){

            //     total += i.price
            //     allPriceNumb.innerHTML = total + "₽"
            // }

        }

        // countlenght = basket.dish.length
        // all_count_n.innerHTML = countlenght
        console.log();




    }
}

// function extraItems(arr){
//     for(let item of )
// }


console.log(basket.dish.length);

let parent_basket_modal = document.querySelector(".parent_basket_modal")
let basketLink = document.querySelector("#basketLink")


basketLink.onclick = () => {
    parent_basket_modal.classList.add("open")

    for(let item of basket.dish){
        ModalBasket(basket.dish, box_of_products_in_basket)
    }
}


basket_counter.classList.remove("hidden")
let num = basket.dish.length
num = basket_counter.innerHTML

close_basket.onclick = () => {
    parent_basket_modal.classList.remove("open")
}

// parent_basket_modal.onclick = () => {
//     parent_basket_modal.classList.remove("open")
// }

// console.log(uniqueArray);


//перевести все в гет и пост а так же сделать корзину(м)


// создание/перенесение элементов в корзину

let box_of_products_in_basket = document.querySelector(".box_of_products_in_basket")




function ModalBasket(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let product = document.createElement("div")
        let imgOfProduct = document.createElement("img")
        let left_of_product = document.createElement("div")
        let spanOfNPandWght = document.createElement("span")
        let nameOfProduct = document.createElement("p")
        let weight = document.createElement("div")
        //
        let right_of_product = document.createElement("div")
        let count = document.createElement("div")
        let top_count_style = document.createElement("div")
        let center = document.createElement("div")
        let minus = document.createElement("span")
        let modal_numb = document.createElement("span")
        let plus = document.createElement("span")
        let bottom_count_style = document.createElement("div")
        let price = document.createElement("div")
        let total_price = 0

        count.id = "countOfBasket"
        center.id = "centerBasket"
        minus.id = "minus"
        modal_numb.id = "modal_numb"
        plus.id = "plus"
        price.id = "priceOfBasket"

        product.classList.add("product")
        imgOfProduct.classList.add("imgOfProduct")
        left_of_product.classList.add("left_of_product")
        spanOfNPandWght.classList.add("spanOfNPandWght")
        nameOfProduct.classList.add("nameOfProduct")
        weight.classList.add("weight")
        right_of_product.classList.add("right_of_product")
        count.classList.add("count")
        top_count_style.classList.add("top_count_style")
        center.classList.add("center")
        bottom_count_style.classList.add("bottom_count_style")
        price.classList.add("price")


        imgOfProduct.src = item.menuImg

        nameOfProduct.innerHTML = item.name
        weight.innerHTML = item.weight + "г"
        minus.innerHTML = "-"
        modal_numb.innerHTML = "0 шт"
        plus.innerHTML = "+"
        price.innerHTML = item.price + "₽"

        place.append(product)
        product.append(left_of_product, right_of_product)
        left_of_product.append(imgOfProduct, spanOfNPandWght)
        spanOfNPandWght.append(nameOfProduct, weight)
        right_of_product.append(count, price)
        count.append(top_count_style, center, bottom_count_style)
        center.append(minus, modal_numb, plus)
        

        plus.onclick = () => {
            item.count += 1
            modal_numb.innerHTML = item.count + "шт"
            total_price = 0
            let t = 0
            let allPriceNumb = document.querySelector(".all-price-number")

            for (let i of basket.dish) {
                t = (i.count * i.price)
                total_price = t + total_price
            }
            allPriceNumb.textContent = total_price + "₽"
        }


        minus.onclick = () => {

            if (item.count <= 0) {
                item.count = 0
            } else {
                item.count -= 1
                modal_numb.innerHTML = item.count + "шт"

                let total_price = 0;
                let allPriceNumb = document.querySelector(".all-price-number");

                for (let i of basket.dish) {
                    let t = i.count * i.price;
                    total_price -= t;
                    // console.log(i.price, i.count, i.count * i.price);
                }

                allPriceNumb.textContent = Math.abs(total_price) + "₽";
            }

        }

        item.count = 1
        modal_numb.innerHTML = item.count + 0 + "шт"

    }
    const fUBK = (arr,key) => {
            const seen = new Set()
            return arr.filter(item =>{
                const isDublicate = seen.has(item[key])
                seen.add(item[key])
                return !isDublicate
            })
    }
    const uniqueItems = fUBK(basket.dish, "name")
    console.log(uniqueItems);

        
}

let total = document.querySelector(".total")

total.addEventListener( "click", () => {
    window.location.href = `${window.location.origin}/pages/basket.html`

    axios.post("http://localhost:3002/total_basket",
JSON.stringify(basket.dish)
    )
})

let basketRend = function(){
    if(typeof localStorage.getItem("basket") != null){
        basket.dish = JSON.parse(localStorage.getItem("basket"))
        console.log(basket.dish);
    }else{
        console.log("не раб");
    }
}

window.onload = function(){
    let numb = basket.dish.length
    numb = basket_counter.innerHTML

}


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


