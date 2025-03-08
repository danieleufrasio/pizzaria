let carrinho= document.querySelector('.carrinho');
document.querySelector("#cart").onclick= ()=>{
    carrinho.classList.toggle('active');

    login.classList.remove('active');
    menuResponsivo.classList.remove('active');
}
let login= document.querySelector('.login-form');
document.querySelector('#login').onclick= ()=>{
    login.classList.toggle('active'); //acionar o menu respnsivo se clicar  no menu

    carrinho.classList.remove('active'); //remover o carrinho se eu clicar no meenu
    menuResponsivo.classList.remove('active'); //remover o login se eu clicar no meenu
}

//menu responsivo
let menuResponsivo= document.querySelector('.menu-site');
document.querySelector('#menu').onclick =()=> {
    menuResponsivo.classList.toggle('active');
    
    carrinho.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll =()=>{

    
    login.classList.remove('active');

    carrinho.classList.remove('active');
    menuResponsivo.classList.remove('active');

}

var swiper= new Swiper(".home-slider",{
    autoplay:{
        delay:2500,
        disableONinteraction: false,
    },
    grapCursor: true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
})
 
var menuSwiper = new Swiper(".menu-slider", {
    grabCursor: true, // Corrigido
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


