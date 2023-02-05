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


//Open Bar Night
const openBarNight = document.querySelector('#openBarTickets');
openBarNight.addEventListener('click',() => window.open('https://buytickets.designmynight.com?item-ids=6325d37bd46a3b4d6a5bed8b&checkoutMode=blank'));

//Bottomless Buffet
const bottomlessBuffet = document.querySelector('#bottomlessBuffetTickets');
bottomlessBuffet.addEventListener('click',() => window.open('https://buytickets.designmynight.com?item-ids=63868d772c737315e8580125&checkoutMode=blank'));

//Artist Night
const artistNight = document.querySelector('#liveMusicTickets');
// artistNight.addEventListener('click',() => window.open(''));

//Boozy Bingo
const boozyBingo = document.querySelector('#boozyBingoTickets');
// boozyBingo.addEventListener('click',() => window.open(''));

//Jazz Club
const jazzClub = document.querySelector('#jazzClubTickets');
// jazzClub.addEventListener('click',() => window.open(''));

//Serie A
const serieA = document.querySelector('#serieATickets');
serieA.addEventListener('click',() => window.open('https://buytickets.designmynight.com?item-ids=639274d5126e4a22026b6105&checkoutMode=blank'));
