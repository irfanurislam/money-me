
// 
console.log('connected');

document.getElementById('btn-calculate').addEventListener('click',function(){

/* const incomefeild = document.getElementById('income').value;
const incomeNumber = parseInt(incomefeild); */

const incomeNumber = getfeildele('income');
if( incomeNumber == '' || isNaN(incomeNumber) || 
    incomeNumber <= 0){
    
        return alert ('type value correctly');
    

}

// expense

/* const foodfeild = document.getElementById('ex-food').value;
const rentfeild = document.getElementById('ex-rent').value;
const clothesfeld = document.getElementById('ex-clothes').value;
 */
const foodfeild = getfeildele('ex-food');
const rentfeild = getfeildele('ex-rent');
const clothesfeld = getfeildele('ex-clothes');

if(foodfeild == '' || foodfeild <= 0 || isNaN(foodfeild)  ||
  rentfeild == '' || rentfeild <= 0 ||  isNaN(rentfeild) ||
    clothesfeld == '' || clothesfeld <= 0 || isNaN(clothesfeld) ){
    return alert('pleas fill up the input')
}



const totalExpense = foodfeild + rentfeild + clothesfeld;

if(totalExpense > incomeNumber){
    return alert('eto taka fund nai');
}

// call by expense korboje
const expense = document.getElementById('total-expense');
const expensenumstring = expense.innerText;
const expensebill = parseInt(expensenumstring);


// set korbo

expense.innerText = totalExpense;

// balance have-


const balancenow = gettextele('total-balance');

// set now balance account
const nowtotalbalance = incomeNumber - totalExpense
settext('total-balance', nowtotalbalance);

// balancetext.innerText =incomeNumber - totalExpense ;


})








// save parts
document.getElementById('btn-save').addEventListener('click',function(){


const incomeNumber = getfeildele('income');

const savediscount = document.getElementById('save-input').value;
const savestring = parseFloat(savediscount);

if(savestring == '' || isNaN(savestring) || savestring <= 0 ||savestring > 99 ){
    return alert('please input properly');
}


const totalsavingAmount = incomeNumber * savestring;







// nowhave value ta  savingamount ea replace korbo

const amountsav= gettextele('amount-save');

// set income perceantage ta 

const balance = gettextele('total-balance');


// balance er theke saving besh hoya jebna
if(totalsavingAmount > balance){
    return alert('balance er theke beshi not allowed');
}

settext('amount-save', totalsavingAmount);
// now remaining balalnce ;
// calculate


const totalremaining = balance - totalsavingAmount;



const remainingBlance = gettextele('remain-save');
//remainingBlance.innerText = totalremaining;

settext('remain-save', totalremaining);



})





/* ============================================== */
/* ============================================== */
/* ============================================== */

// common function

function getfeildele(id){
    const feild = document.getElementById(id).value;
     const Number = parseInt(feild);
     return Number;
}

function gettextele(id){
 const text = document.getElementById(id);
 const textstring = text.innerText;
 const textnumber = parseInt(textstring);
 return textnumber;
}


// setelements
function settext(id,value){
    const textv = document.getElementById(id);
    textv.innerText = value;

}