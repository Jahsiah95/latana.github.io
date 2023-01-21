const tickets = Array.from(document.querySelectorAll('.ticketButton'));
tickets.forEach((ticketButton)=>{
    ticketButton.addEventListener('click',ticketLink)
})

function ticketLink(){
    window.open('https://buytickets.designmynight.com?item-ids=6325d37bd46a3b4d6a5bed8b&checkoutMode=blank');
}