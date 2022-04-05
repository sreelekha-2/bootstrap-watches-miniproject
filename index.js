let cartContainer=document.getElementById("cart")

let cartCount=document.getElementById("cartCount");
function addToCart(product){
    let prevCount=cartCount.textContent;
    console.log(prevCount)
    let currentCount=parseInt(prevCount)+1;
    cartCount.textContent=currentCount;

    let productCard=document.createElement("div");
    productCard.classList.add("watch-card","my-4");

    let imageEle=document.createElement("img");
    imageEle.classList.add("watch-img")
    imageEle.src=product.children[0].src;

    let descEle=document.createElement("p");
    descEle.textContent=product.children[1].textContent;

    let priceEle=document.createElement("h5");
    priceEle.textContent=product.children[2].textContent;

    let colorEle=document.createElement("p");
    colorEle.textContent=product.children[3].textContent;

    let buyNowBtn=document.createElement("button");
    buyNowBtn.classList.add("btn", "btn-danger","d-block", "w-25","mx-auto");
    buyNowBtn.textContent="Buy Now";

    let removeBtn=document.createElement("button");
    removeBtn.classList.add("btn","btn-warning","d-block","w-25","mx-auto","mt-3")
    removeBtn.textContent="Remove From Cart";

    removeBtn.onclick=function(){

        cartCount.textContent=parseInt(cartCount.textContent)-1;
        cartContainer.removeChild(productCard)
    }


    productCard.append(imageEle,descEle,priceEle,colorEle,buyNowBtn,removeBtn);
    cartContainer.append(productCard)
}