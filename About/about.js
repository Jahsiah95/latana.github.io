//Dropdown menu
const menuTab = document.querySelector('.menuTab');
menuTab.addEventListener('click',dropdown)

function dropdown(){
    const dropItems = document.querySelectorAll('.dropdownOption');
    dropItems.forEach(option => option.classList.toggle('optionStyle'));
}

window.onclick = function(event){
    if (!event.target.matches('.menuTab')){
        let options = document.querySelectorAll('.dropdownOption');
        for (let i = 0; i < options.length; i++){
            if (options[i].classList.contains('optionStyle')){
                options[i].classList.remove('optionStyle');
            }
        }
    }
}