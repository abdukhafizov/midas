// при онклике на товар он должен переноситься в корзину
// это все должно быть в форме 
// условие в корзине "если название айтема совпадает с таким же названием айтема то удалить его"

// axios.get("http://localhost:3002/khinkali")
//     .then(res => {
//         console.log(res);
//     })

//     let f =[] 
//         for(let item of data){
//             if(item.category == 'khinkali'){
//                 f.push(item)
//             }
//         }


//         post_clock(f)
//         console.log(f);
// let post_clock = (arr)=>{
//     let btn = document.querySelector('#clock')
//  btn.addEventListener('click', ()=>{
//         axios.post("http://localhost:3002/khinkali", arr)
//     })
// }


// let btn = document.querySelector(".btn")
// let secBtn = document.querySelector(".secBtn")

// btn.onclick = () =>{
//     axios.delete("http://localhost:3002/total_basket/{item.id}")
// }

axios.get("http://localhost:3002/total_basket")
    .then(function (res) {
        let data = res.data
        TotalBasket(data)
        // ModalBasket(data)
    })

let menuTotalBasket = document.querySelector(".menuTotalBasket")

function TotalBasket(arr) {
    // let obj = arr[0]
    for (let item of arr) {
        // console.log(obj);   
        // console.log(obj[item]);     
        let ParentItem = document.createElement('div')
        let ProdImg = document.createElement('img')
        let description = document.createElement('div')
        let nameOfProduct = document.createElement('p')
        let weight = document.createElement('div')
        let price = document.createElement('p')
        let count = document.createElement('div')
        let top_count_style = document.createElement('div')
        let center = document.createElement('div')
        let minus = document.createElement('span')
        let modal_numb = document.createElement('span')
        let plus = document.createElement('span')
        let bottom_count_style = document.createElement('div')
        let TotalMenuprice = document.createElement('p')
        let deleteItem = document.createElement("div")
        let xdI = document.createElement("div")

        price.id = "priceOfBasket"
        count.id = "countOfTotalBas"
        center.id = "centerBasket"
        minus.id = "minus"
        modal_numb.id = "modal_numb"
        plus.id = "plus"
        TotalMenuprice.id = "priceOfBasket"
        description.id = "deckBask"
        ProdImg.src = item.menuImg

        ParentItem.classList.add("item")
        description.classList.add("description")
        nameOfProduct.classList.add("nameOfProduct")
        weight.classList.add("weight")
        price.classList.add("price")
        count.classList.add("count")
        top_count_style.classList.add("top_count_style")
        center.classList.add("center")
        bottom_count_style.classList.add("bottom_count_style")
        TotalMenuprice.classList.add("TotalMenuprice")
        deleteItem.classList.add("deleteItem")
        xdI.classList.add('xdI')

        nameOfProduct.innerHTML = item.name
        weight.innerHTML = item.weight  + "г"
        minus.innerHTML = "-"
        modal_numb.innerHTML = item.count + "шт"
        plus.innerHTML = "+"
        price.innerHTML = item.price + "₽"
        TotalMenuprice.innerHTML = item.price + "₽"

        menuTotalBasket.append(ParentItem)
        ParentItem.append(ProdImg,description,price,count,TotalMenuprice, deleteItem)
        description.append(nameOfProduct, weight)
        count.append(top_count_style, center,bottom_count_style)
        center.append(minus, modal_numb, plus)
        deleteItem.append(xdI)



        deleteItem.onclick = () =>{
            axios.delete(`http://localhost:3002/total_basket/${item.id}`)
            console.log(obj[item].id);
        }
    }

}