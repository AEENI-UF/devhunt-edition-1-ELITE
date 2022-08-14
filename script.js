const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})

// acceuil animation
setInterval(changeText, 6000);

function changeText(){
    if(document.querySelector('.cursor1').classList.contains('block')){
        document.querySelector('.cursor2').classList.add('block')
        document.querySelector('.cursor1').classList.remove('block');
    } else if(document.querySelector('.cursor2').classList.contains('block')){
        document.querySelector('.cursor3').classList.add('block')
        document.querySelector('.cursor2').classList.remove('block');
    }else if(document.querySelector('.cursor3').classList.contains('block')){
        document.querySelector('.cursor1').classList.add('block')
        document.querySelector('.cursor3').classList.remove('block');
    }
}