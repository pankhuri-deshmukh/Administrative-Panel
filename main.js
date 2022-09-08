const sidebar = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");


menuBtn.addEventListener("click", function(){
    sidebar.style.display = 'block';
});

closeBtn.addEventListener("click", function(){
    sidebar.style.display = 'none';
});

//change theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme-variables");

    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
});

//fill products into table

Products.forEach(order => {
    const tRow = document.createElement('tr'); 
   tRow.innerHTML = "<td>" + order.productName + "</td><td>" + order.productNumber + "</td><td>" + order.quantity + "</td><td id='check-order'>" + order.status + "</td><td class='primary'>Details</td>";
   document.querySelector('table tbody').appendChild(tRow);

   
});

