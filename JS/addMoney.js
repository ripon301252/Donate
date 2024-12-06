
document.getElementById('btn-donate-now-1').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-1');
    const balance = getTextFieldValueById('account-balance-1');
    const cashOut = getTextFieldValueById('cash-out');


    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-1').innerText = newBalance;


    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;


    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <h4 class="text-2xl text-center font-bold px-5 pt-5 ">Add Money</h4>
        <p class="text-center px-5 pb-5">Add Money ${addMoney} Tk. New Balance ${newBalance} Tk.</p>
        
        <h4 class="text-2xl text-center font-bold px-5 ">Cash Out</h4>
        <p class="text-center px-5 pb-5">Cash Out ${newBalance} Tk. New Balance ${mainCashOut} Tk.</p>

        <h4 class="text-2xl text-center font-bold px-5 ">Date & Time</h4>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);
    
})




document.getElementById('btn-donate-now-2').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-2');
    const balance = getTextFieldValueById('account-balance-2');
    const cashOut = getTextFieldValueById('cash-out');


    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-2').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

 
    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <h4 class="text-2xl text-center font-bold px-5 pt-5 ">Add Money</h4>
        <p class="text-center px-5 pb-5">Add Money ${addMoney} Tk. New Balance ${newBalance} Tk.</p>
        
        <h4 class="text-2xl text-center font-bold px-5 ">Cash Out</h4>
        <p class="text-center px-5 pb-5">Cash Out ${newBalance} Tk. New Balance ${mainCashOut} Tk.</p>

        <h4 class="text-2xl text-center font-bold px-5 ">Date & Time</h4>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);
})






document.getElementById('btn-donate-now-3').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-3');
    const balance = getTextFieldValueById('account-balance-3');
    const cashOut = getTextFieldValueById('cash-out');

    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-3').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;


     
    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <h4 class="text-2xl text-center font-bold px-5 pt-5 ">Add Money</h4>
        <p class="text-center px-5 pb-5">Add Money ${addMoney} Tk. New Balance ${newBalance} Tk.</p>
        
        <h4 class="text-2xl text-center font-bold px-5 ">Cash Out</h4>
        <p class="text-center px-5 pb-5">Cash Out ${newBalance} Tk. New Balance ${mainCashOut} Tk.</p>

        <h4 class="text-2xl text-center font-bold px-5 ">Date & Time</h4>
        <P class="text-center pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);
})
