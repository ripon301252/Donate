function showSectionById(id){
    
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


document.getElementById('btn-donate').addEventListener('click', function(){
    showSectionById('donate-container');
})



document.getElementById('btn-history').addEventListener('clock', function(){
    showSectionById('transaction-container')
})



