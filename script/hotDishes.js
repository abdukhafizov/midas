axios.get("http://localhost:3002/hot")
    .then(function (res) {
        let data = res.data
        hotDishes(data)
        // ModalBasket(data)
    })

let hot_arrow = document.querySelector("#hot_arrow")
let hot_arrow_box = document.querySelector(".hot_arrow_box")

let first_hot_click = document.querySelector(".first_hot_click")
let about_popular_dishes = document.querySelector(".about_popular_dishes")
let basket_counter = document.querySelector(".basket_counter")
let count = 0

let categories = [
    {
        name: "hot",
        hot: []
    }
]

first_hot_click.onclick = () => {
    hot_arrow_box.classList.toggle("hidden")
}




let grids_of_hot_dishes_slide = document.querySelector(".grids_of_hot_dishes_slide")
// console.log(categories[0].hot);
function hotDishes(arr){

    for(let item of arr){
        // console.log(item.hot[0].name);
        let dish = document.createElement("div")
        let first_img = document.createElement("img")
        let ab_dish = document.createElement("h2")
        let weight = document.createElement("div")
        let text_of_salmon = document.createElement("p")
        let p_w_bs = document.createElement("span")
        let price = document.createElement("p")
        let sec_img = document.createElement("img")
        let inshoper = document.createElement("div")
        
        dish.classList.add("dish")
        ab_dish.classList.add("ab_dish")
        ab_dish.id = "dish_of_menu"
        weight.classList.add("weight")
        text_of_salmon.classList.add("text_of_salmon")
        p_w_bs.classList.add("p_w_bs")
        price.classList.add("price")
        inshoper.classList.add("inshoper")
        
        first_img.src = item.menuImg
        sec_img.src = "../img/basket.svg"
        
        ab_dish.innerHTML = item.name
        weight.innerHTML = item.weight + "г"
        text_of_salmon.innerHTML = item.title
        price.innerHTML = item.price + " ₽"
        
        grids_of_hot_dishes_slide.append(dish)
        dish.append(first_img, ab_dish, weight, text_of_salmon, p_w_bs,)
        p_w_bs.append(price, sec_img)
        
        sec_img.onclick = () => {
            basket_counter.classList.remove("hidden")
            
            count++
            basket_counter.innerHTML = count
            
        }
    }
}
    // console.log(categories.hot);
    