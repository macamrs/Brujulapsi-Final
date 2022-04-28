// TOGGLE MENU
const nav = document.getElementById("nav__lista");
const toggle = document.querySelector(".mobile-toggle");

toggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible");

    if(visible === "false") {
        nav.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true);
    } else if(visible === "true") {
        nav.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
    }
})

// CAROUSEL SECTION 3

const productContainers = [...document.querySelectorAll(".carousel-track")];
const nxtBtn = [...document.querySelectorAll(".button-next")];
const prevBtn = [...document.querySelectorAll(".button-prev")];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect().width/2;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerDimensions;
    })

    prevBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerDimensions;
    })
});

// SECUENCIA DEL SEGUNDO MODAL

let cerrar2 =  document.querySelectorAll(".close2")[0];
let abrir2 =  document.querySelectorAll(".sobrenos")[0];
let modal2 =  document.querySelectorAll(".modal2")[0]; 
let modalC2 =  document.querySelectorAll(".modal2__container")[0];

abrir2.addEventListener("click", function(n) {
    n.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal2-close");
}); 

cerrar2.addEventListener("click", function() {
    modal2.classList.toggle("modal2-close");

    setTimeout(function(){
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    },550)
})

window.addEventListener("click", function(event){
    if(event.target == modalC2) {
            modal2.classList.toggle("modal2-close");

            setTimeout(function(){
                modalC2.style.opacity = "0";
                modalC2.style.visibility = "hidden";
            },550)
    }
})

// REVIEWS MODAL 2
    let sliderModal = document.querySelector(".slider-container");
    let sliderInd = document.querySelectorAll(".slides__body");
    let contador = 1;
    let tamano = sliderInd[0].clientWidth;
    let intervalo = 3800;

    window.addEventListener("resize", function() {
        tamano = sliderInd[0].clientWidth;
    })
    
    setInterval(function tiempo() {
        slide();
    }, intervalo);

    function slide() {
        sliderModal.style.transform = 'translate('+ (- tamano * contador) + 'px';

        sliderModal.style.transition = 'transform 1s';
        contador++;

        if(contador === sliderInd.length) {
            contador = 0;

            setTimeout(function() {
                sliderModal.style.transform = 'translate(0px)';
                sliderModal.style.transition = 'transform 0s';
            }, intervalo);

        }
    }


// SECUENCIA DEL PRIMER MODAL

let cerrar =  document.querySelectorAll(".close")[0];
let abrir =  document.querySelectorAll(".masinfo")[0]; // Abrir modal
let modal =  document.querySelectorAll(".modal1")[0]; 
let modalC =  document.querySelectorAll(".modal__container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
}); 

cerrar.addEventListener("click", function() {
    modal.classList.toggle("modal-close");

    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },550)
})

window.addEventListener("click", function(e){
    if(e.target == modalC) {
            modal.classList.toggle("modal-close");

            setTimeout(function(){
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            },550)
    }
})

//SMOOTH SCROLL

const scroll = new SmoothScroll('.navbar a[href*="#"]');