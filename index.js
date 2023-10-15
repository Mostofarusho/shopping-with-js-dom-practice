let serial=0;
// for first card 
document.getElementById("first-card").addEventListener('click',function(){
   
    serial=serial+1;
    // get the data from HTML using ID 
    const productName=document.getElementById("first-name").innerText;
    const productPrice=document.getElementById("first-price").innerText;
    const productQuantity=document.getElementById("first-quantity").innerText;
    // console.log(productName,productPrice,productQuantity);
    const priceTotal=parseInt(productPrice)*parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,priceTotal);
    
});

document.getElementById("second-card").addEventListener('click',function(e){
    serial=serial+1;

    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const pName=e.target.parentNode.parentNode.children[0].innerText;
    const pPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
    const sumTotal=parseInt(pPrice)+parseInt(pQuantity);
    // console.log(sunTotal);/

    displayData(pName,pPrice,pQuantity,sumTotal)
})
// for third card 
document.getElementById("third-card").addEventListener('click',function(){
   
    serial=serial+1;
    // get the data from HTML using ID 
    const productName=document.getElementById("third-name").innerText;
    const productPrice=document.getElementById("third-price").innerText;
    const productQuantity=document.getElementById("third-quantity").innerText;
    // console.log(productName,productPrice,productQuantity);
    const priceTotal=parseInt(productPrice)-parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,priceTotal);
    
});
// last card 
document.getElementById("last-card").addEventListener('click',function(){
   
    serial=serial+1;
    // get the data from HTML using ID 
    const productName=document.getElementById("last-name").innerText;
    const productPrice=document.getElementById("last-price").value;
    const productQuantity=document.getElementById("last-quantity").value;
    // console.log(productName,productPrice,productQuantity);
    const priceTotal=parseInt(productPrice)/parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,priceTotal);
    
});
function displayData(nameofP,priceofP,quantityofP,resultP){
   
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${nameofP}</td>
    <td>${priceofP}</td>
    <td>${quantityofP}</td>
    <td>${resultP}</td>

    `;
    container.appendChild(tr);
}