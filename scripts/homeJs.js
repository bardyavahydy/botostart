const $ = document
const header = $.querySelector('.header')
const menuHamburger = header.querySelector('.menu-hamburger')
const menuCrossIcon = header.querySelector('.btn-menu-cross__icon')
const totalContainerMenu = header.querySelector('.total-container-menu') 

////add classes////

function addActiveClass(element , classname){
    element.classList.add(classname)
}

function removeActiveClass(element , classname){
    element.classList.remove(classname)
}

////functions////

function headerHandler(){
    addActiveClass(header , 'header-active')
}

function removeActiveClassFromHeader(){
    removeActiveClass(header , 'header-active')
}

////events////

menuHamburger.addEventListener('click' , headerHandler)
menuCrossIcon.addEventListener('click' , removeActiveClassFromHeader)
totalContainerMenu.addEventListener('click' , event => (event.target === totalContainerMenu) ? removeActiveClassFromHeader() : null
)
