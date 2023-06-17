const $ = document
const title = $.getElementById('title')
const header = $.querySelector('.header')
const menuHamburger = header.querySelector('.menu-hamburger')
const menuCrossIcon = header.querySelector('.btn-menu-cross__icon')
const totalContainerMenu = header.querySelector('.total-container-menu') 

const footerLogo = $.querySelector('.footer-logo')

let productsInfo = {
    TypeScript:{ 
        titlePage:'دوره مقدماتی تا پیشرفته تایپ اسکریپت | بوتواستارت' , 
    },
    JavaScript:{ 
        titlePage:'آموزش مقدماتی تا پیشرفته جاوااسکریپت | دوره پروژه محور Javascript | بوتواستارت' ,
    }
}
let productsInfoKeys = Object.keys(productsInfo)

let locatiocSreachPharams = new URLSearchParams(location.search)
let coursePharam = locatiocSreachPharams.get('course')

////add classes////

function addActiveClass(element , classname){
    element.classList.add(classname)
}

function removeActiveClass(element , classname){
    element.classList.remove(classname)
}

////functions////

function setInfoPage(){
    productsInfoKeys.forEach( productsInfoKey =>{
        if(coursePharam === productsInfoKey){
            setTitlePage(productsInfo[productsInfoKey].titlePage)
        }
    } )
}
setInfoPage()

function setTitlePage(titlePage){
    title.innerText = titlePage 
}

function headerHandler(){
    addActiveClass(header , 'header-active')
}

function removeActiveClassFromHeader(){
    removeActiveClass(header , 'header-active')
}

function goUpFromFooter(){
    window.scrollTo(0 , 0)
}

////events////

menuHamburger.addEventListener('click' , headerHandler)
menuCrossIcon.addEventListener('click' , removeActiveClassFromHeader)
totalContainerMenu.addEventListener('click' , event => (event.target === totalContainerMenu) ? removeActiveClassFromHeader() : null
)
footerLogo.addEventListener('click' , goUpFromFooter)