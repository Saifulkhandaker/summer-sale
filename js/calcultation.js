
let itemCount = 1;

function purchaseItem(itemType) {
    const title = getTitle(`${itemType}-title`);
    const ol = document.createElement('ol');
    ol.innerText = `${itemCount}. ${title}`;
    itemCount++;
    
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(ol);

    const priceField = getInputValue(`${itemType}-price`);
    const price = parseFloat(priceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const itemTotalPrice = price + totalPrice;
    totalField.innerText = itemTotalPrice.toFixed(2);
}

// Event listeners for different items
document.getElementById('cap-card').addEventListener('click', function() {
    purchaseItem('cap');
});

document.getElementById('jersey-card').addEventListener('click', function() {
    purchaseItem('jersey');
});

document.getElementById('cates-card').addEventListener('click', function() {
    purchaseItem('cates');
});
document.getElementById('chair-card').addEventListener('click', function() {
    purchaseItem('chair');
});

document.getElementById('children-card').addEventListener('click', function() {
    purchaseItem('children');
});

document.getElementById('sofa-card').addEventListener('click', function() {
    purchaseItem('sofa');
});


// Reusable function to get input value field as a number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.innerText;
    const value = parseFloat(inputValueText);
    return value;
}

// Reusable function to get title value
function getTitle(titleId){
    const titleField = document.getElementById(titleId);
    const title = titleField.innerText;
    return title;
}





// cuppon-btn 
const cupponBtn = document.getElementById('coupon-btn');
const totalPriceField = document.getElementById('total-price');
const total = totalPriceField.innerText;
const totalPrice = parseFloat(total);

if(totalPrice < 200){
    cupponBtn.disabled = true;
    cupponBtn.style.backgroundColor = '#CCCCCC';
}else {
    cupponBtn.disabled = false;
    
}






// purchase button disabled
const newTotalField = document.getElementById('new-total');
const totalText = newTotalField.innerText;
const newTotalPrice = parseFloat(totalText);
const purchaseBtn = document.getElementById('purchase');

if (newTotalPrice < 200) {
    purchaseBtn.disabled = true;
    purchaseBtn.style.backgroundColor = '#CCCCCC';
} else {
    purchaseBtn.disabled = false;
}


// refresh the whole page using go home button
const goHomeButton = document.getElementById('goHome');
goHomeButton.addEventListener('click', function() {
    location.reload();
});