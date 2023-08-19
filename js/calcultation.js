

// cap
function capPurchase(){
    const capTitle = getTitle("cap-title");
    const li = document.createElement('li');
    li.innerText = capTitle;
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);

    const capPriceField = getInputValue('cap-price');
    const capPrice = parseFloat(capPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const capTotalPrice = capPrice + totalPrice;
    totalField.innerText = capTotalPrice.toFixed(2);

}

// jersey
function jerseyPurchase(){
    const jerseyTitle = getTitle('jersey-title');
    const li = document.createElement('li');
    li.innerText = jerseyTitle
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);
    

    const jerseyPriceField = getInputValue('jersey-price');
    const jerseyPrice = parseFloat(jerseyPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const jerseyTotalPrice = jerseyPrice + totalPrice
    totalField.innerText = jerseyTotalPrice.toFixed(2);
}

// cates
function catesPurchase(){
    const catesTitle = getTitle('cates-title');
    const li = document.createElement('li');
    li.innerText = catesTitle
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);

    const catesPriceField = getInputValue('cates-price');
    const catesPrice = parseFloat(catesPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const catesTotalPrice = catesPrice + totalPrice
    totalField.innerText = catesTotalPrice.toFixed(2);
    
}

// chair
function chairPurchase(){
    const chairTitle = getTitle('chair-title');
    const li = document.createElement('li');
    li.innerText = chairTitle
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);

    const chairPriceField = getInputValue('chair-price');
    const chairPrice = parseFloat(chairPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const chairTotalPrice = chairPrice + totalPrice
    totalField.innerText = chairTotalPrice.toFixed(2);

}
// children play
function childrenPurchase(){
    const childrenTitle = getTitle('children-title');
    const li = document.createElement('li');
    li.innerText = childrenTitle
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);

    const childrenPriceField = getInputValue('children-price');
    const childrenPrice = parseFloat(childrenPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const childrenTotalPrice = childrenPrice + totalPrice
    totalField.innerText = childrenTotalPrice.toFixed(2);

}

// sofa
function sofaPurchase(){
    const sofaTitle = getTitle('sofa-title');
    const li = document.createElement('li');
    li.innerText = sofaTitle
    const selectedItems = document.getElementById('selected-items');
    selectedItems.appendChild(li);

    const sofaPriceField = getInputValue('sofa-price');
    const sofaPrice = parseFloat(sofaPriceField);

    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const totalPrice = parseFloat(totalText);
    
    const sofaTotalPrice = sofaPrice + totalPrice
    totalField.innerText = sofaTotalPrice.toFixed(2);

}





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


// refresh the whole page
const goHomeButton = document.getElementById('goHome');
goHomeButton.addEventListener('click', function() {
    location.reload(); // 
});