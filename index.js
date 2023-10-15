// for first card 
document.getElementById("first-card").addEventListener('click',function(){
   

    // get the data from HTML using ID 
    const productName=document.getElementById("first-name").innerText;
    const productPrice=document.getElementById("first-price").innerText;
    const productQuantity=document.getElementById("first-quantity").innerText;
    // console.log(productName,productPrice,productQuantity);
    const priceTotal=parseInt(productPrice)*parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,priceTotal);
    
});

document.getElementById("second-card").addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const pName=e.target.parentNode.parentNode.children[0].innerText;
    const pPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
    const sumTotal=parseInt(pPrice)+parseInt(pQuantity);
    // console.log(sunTotal);/

    displayData(pName,pPrice,pQuantity,sumTotal)
})

function displayData(nameofP,priceofP,quantityofP,resultP){
   
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${nameofP}</td>
    <td>${priceofP}</td>
    <td>${quantityofP}</td>
    <td>${resultP}</td>

    `;
    container.appendChild(tr);
}