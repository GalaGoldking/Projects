document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
 let searchInput = document.querySelector('#search-input');
 let filter = searchInput.value.toLowerCase();
 let listItems = document.querySelectorAll('.movie-box');

 listItems.forEach((item) => {
   let text = item.textContent;
   if(text.toLowerCase().includes(filter.toLowerCase())){
     item.style.display = '';
   }
   else{
     item.style.display = 'none';
   }
 })
};