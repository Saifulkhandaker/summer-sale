
// refresh the whole page using go home button
const goHomeButton = document.getElementById('goHome');
goHomeButton.addEventListener('click', function() {
    location.reload();
});

// purchase button disabled
const purchaseBtn = document.getElementById('purchase')
purchaseBtn.disabled = true;
purchaseBtn.style.backgroundColor = '#CCCCCC';

// cuppon  button disabled
const cupponBtn = document.getElementById('coupon-btn');
cupponBtn.disabled = true;
cupponBtn.style.backgroundColor = '#CCCCCC';



// function for totalprice and product
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
    
    //purchasebutton enabled 
    if(itemTotalPrice > 0){
        purchaseBtn.disabled = false;
        purchaseBtn.style.backgroundColor ='';
    }
    // coupon button enabled
    if(itemTotalPrice > 200){
        cupponBtn.disabled = false;
cupponBtn.style.backgroundColor = '';
    }
    return itemTotalPrice;

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




// cuppon btn applyed in condition
document.getElementById('coupon-btn').addEventListener('click', function(){
    const discountField = document.getElementById('discount-price')
        const discountText = discountField.innerText;
        const discount = parseFloat(discountText);
        const totalPriceField = document.getElementById('total-price')
        const totalPriceText = totalPriceField.innerText;
        const totalPrice = parseFloat(totalPriceText);
        if(totalPrice > 200){
        cupponBtn.disabled = false;
        cupponBtn.style.backgroundColor = '';
        const couponField = document.getElementById('coupon-code');
        const couponCode = couponField.value;
        if(couponCode == 'SELL200'){
        const discountTotal =( (totalPrice * 20) / 100);
        discountField.innerText = discountTotal.toFixed(2);
        const newTotalValue = document.getElementById('new-total');
        const newTotalText = newTotalValue.innerText;
        const newTotal = parseFloat(newTotalText);
        const total = totalPrice - discountTotal;
        newTotalValue.innerText = total;
        }
    } 
})
       

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