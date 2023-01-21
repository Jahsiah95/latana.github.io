const tabs = Array.from(document.querySelectorAll('.tab'));
tabs.forEach(tab => tab.addEventListener('mouseenter', transition));
tabs.forEach(tab => tab.addEventListener('mouseleave', removeTransition))

function transition(e){
    return e.target.classList.add('hover');
}

function removeTransition(e){
    return e.target.classList.remove('hover');
}