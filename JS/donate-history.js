
// show the HISTORY
document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('transaction-container').classList.remove('hidden');
    document.getElementById('donate-container').classList.add('hidden');
})


// show the DONATION
document.getElementById('btn-donate').addEventListener('click', function(){
    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
})





























