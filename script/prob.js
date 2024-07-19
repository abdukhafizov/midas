let arr = [
    {
        id: 1,
        name: "Alex",
        age: 15,
        isMarried: false
    },
    {
        id: 2,
        name: "Helen",
        age: 45,
        isMarried: true,
        married: [
            {
                name: "Alexey"
            },
            {
                name: "Ron"
            }, 
            {
                name: "John"
            }
        ]
    }
]

function mar() {
    for(let item of arr){
        if(item.isMarried){
            console.log(item.id);
        }
    }
}