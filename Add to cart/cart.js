let product =1000;
let value = 0;
let price = 0;
document.getElementById("price").innerHTML = product;

function add(){
    document.getElementById("addprice").innerHTML = price;
    price = price + product;
    document.getElementById("addprice").innerHTML = price;
    value++;
    document.getElementById("quanty").innerHTML = value;
}

function min(){
    if(price != 0 && product != 0){
        price = price - product;
        document.getElementById("addprice").innerHTML = price;
        value--;
        document.getElementById("quanty").innerHTML = value;
    }

    if(price < product){
        value = 0;
        price = 0;
        document.getElementById("addprice").innerHTML = price;
        document.getElementById("quanty").innerHTML = value;
    }
}
