const $ = document
const body = $.body
const title = $.getElementById('title')
const header = $.querySelector('.header')
const menuHamburger = header.querySelector('.menu-hamburger')
const menuCrossIcon = header.querySelector('.btn-menu-cross__icon')
const totalContainerMenu = header.querySelector('.total-container-menu') 
const basicInfoCover = $.querySelector('.basic-info__cover')
const basicInfoTitle = $.querySelector('.basic-info__title')
const basicInfoDescription = $.querySelector('.basic-info__description')
const basicInfoVideo = $.querySelector('.basic-info__video')
const basicInfoTime = $.querySelector('.basic-info__time')
const basicInfoSessions = $.querySelector('.basic-info__sessions')
const basicInfoStudents = $.querySelector('.basic-info__students')
const basicInfoCaptionNone = $.querySelector('.basic-info__caption--none')
const loading = $.querySelector('.loading')
const basicInfoPrice = $.querySelector('.basic-info__price')
const footerLogo = $.querySelector('.footer-logo')
const persian = new Intl.NumberFormat('fa')

let productsInfo = {
    TypeScript:{ 
        titlePage:'دوره مقدماتی تا پیشرفته تایپ اسکریپت | بوتواستارت' , 
        basicInfo:{
            svg:'<svg class="basic-info__svg" width="80" height="80" viewBox="0 0 112 112" fill="none"><g clip-path="url(#clip0_1423_357)"><path d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z" fill="#3178C6" fill-opacity="0.18"></path><g clip-path="url(#clip1_1423_357)"><path d="M45 34C42.0618 34 39.2995 35.1442 37.2218 37.2218C35.1442 39.2995 34 42.0618 34 45V67C34 69.9382 35.1442 72.7005 37.2218 74.7782C39.2995 76.8558 42.0618 78 45 78H67C69.9382 78 72.7005 76.8558 74.7782 74.7782C76.8558 72.7005 78 69.9382 78 67V45C78 42.0618 76.8558 39.2995 74.7782 37.2218C72.7005 35.1442 69.9382 34 67 34H45ZM45 30H67C75.2843 30 82 36.7157 82 45V67C82 75.2843 75.2843 82 67 82H45C36.7157 82 30 75.2843 30 67V45C30 36.7157 36.7157 30 45 30Z" fill="#3178C6"></path><path d="M54.3789 50.7266V53.7852H49.2109V68H45.5781V53.7852H40.3867V50.7266H54.3789ZM62.7695 65.5039C63.6211 65.5039 64.3125 65.4102 64.8438 65.2227C65.8516 64.8633 66.3555 64.1953 66.3555 63.2188C66.3555 62.6484 66.1055 62.207 65.6055 61.8945C65.1055 61.5898 64.3203 61.3203 63.25 61.0859L61.4219 60.6758C59.625 60.2695 58.3828 59.8281 57.6953 59.3516C56.5312 58.5547 55.9492 57.3086 55.9492 55.6133C55.9492 54.0664 56.5117 52.7812 57.6367 51.7578C58.7617 50.7344 60.4141 50.2227 62.5938 50.2227C64.4141 50.2227 65.9648 50.707 67.2461 51.6758C68.5352 52.6367 69.2109 54.0352 69.2734 55.8711H65.8047C65.7422 54.832 65.2891 54.0938 64.4453 53.6562C63.8828 53.3672 63.1836 53.2227 62.3477 53.2227C61.418 53.2227 60.6758 53.4102 60.1211 53.7852C59.5664 54.1602 59.2891 54.6836 59.2891 55.3555C59.2891 55.9727 59.5625 56.4336 60.1094 56.7383C60.4609 56.9414 61.2109 57.1797 62.3594 57.4531L65.3359 58.168C66.6406 58.4805 67.625 58.8984 68.2891 59.4219C69.3203 60.2344 69.8359 61.4102 69.8359 62.9492C69.8359 64.5273 69.2305 65.8398 68.0195 66.8867C66.8164 67.9258 65.1133 68.4453 62.9102 68.4453C60.6602 68.4453 58.8906 67.9336 57.6016 66.9102C56.3125 65.8789 55.668 64.4648 55.668 62.668H59.1133C59.2227 63.457 59.4375 64.0469 59.7578 64.4375C60.3438 65.1484 61.3477 65.5039 62.7695 65.5039Z" fill="#3178C6"></path></g></g><defs><clipPath id="clip0_1423_357"><rect width="112" height="112" fill="white"></rect></clipPath><clipPath id="clip1_1423_357"><rect width="52" height="52" fill="white" transform="translate(30 30)"></rect></clipPath></defs></svg>',
            title:'دوره مقدماتی تا پیشرفته تایپ اسکریپت',
            description:'TypeScript یک زبان برنامه نویسی است که توسط شرکت بزرگ Microsoft توسعه یافته و اکنون در بسیاری از پروژه‌ها با ابعاد و مقیاس بالا مورد استفاده قرار می گیرد و هم چنین با هر مرورگر و سیستم عاملی سازگار است',
            video:'../video/samira-farokhnezhad.mov',
            time:'۲۵',
            numberOfSessions:'۳۹',
            numberOfStudents:'۴۱۶',
            price:1989000
        },
    },
    JavaScript:{ 
        titlePage:'آموزش مقدماتی تا پیشرفته جاوااسکریپت | دوره پروژه محور Javascript | بوتواستارت' ,
        basicInfo:{
            svg:'<svg class="basic-info__svg" width="80" viewBox="0 0 112 112" fill="none"><path d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z" fill="#FFF9C4"></path><path d="M45 34C42.0618 34 39.2995 35.1442 37.2218 37.2218C35.1442 39.2995 34 42.0618 34 45V67C34 69.9382 35.1442 72.7005 37.2218 74.7782C39.2995 76.8558 42.0618 78 45 78H67C69.9382 78 72.7005 76.8558 74.7782 74.7782C76.8558 72.7005 78 69.9382 78 67V45C78 42.0618 76.8558 39.2995 74.7782 37.2218C72.7005 35.1442 69.9382 34 67 34H45ZM45 30H67C75.2843 30 82 36.7157 82 45V67C82 75.2843 75.2843 82 67 82H45C36.7157 82 30 75.2843 30 67V45C30 36.7157 36.7157 30 45 30Z" fill="#FBC02D"></path><path d="M52.6372 62.8086V50.7266H56.2466V62.75C56.2466 64.2188 55.9927 65.3828 55.4849 66.2422C54.6255 67.6953 53.0747 68.4219 50.8325 68.4219C48.5903 68.4219 47.0864 67.8359 46.3208 66.6641C45.5552 65.4844 45.1724 63.8789 45.1724 61.8477V61.4492H48.5825V61.8477C48.6138 63.1836 48.7583 64.125 49.0161 64.6719C49.2817 65.2109 49.8442 65.4805 50.7036 65.4805C51.5552 65.4805 52.1177 65.1836 52.3911 64.5898C52.5552 64.2383 52.6372 63.6445 52.6372 62.8086ZM66.1021 65.5039C66.9536 65.5039 67.645 65.4102 68.1763 65.2227C69.1841 64.8633 69.688 64.1953 69.688 63.2188C69.688 62.6484 69.438 62.207 68.938 61.8945C68.438 61.5898 67.6528 61.3203 66.5825 61.0859L64.7544 60.6758C62.9575 60.2695 61.7153 59.8281 61.0278 59.3516C59.8638 58.5547 59.2817 57.3086 59.2817 55.6133C59.2817 54.0664 59.8442 52.7812 60.9692 51.7578C62.0942 50.7344 63.7466 50.2227 65.9263 50.2227C67.7466 50.2227 69.2974 50.707 70.5786 51.6758C71.8677 52.6367 72.5435 54.0352 72.606 55.8711H69.1372C69.0747 54.832 68.6216 54.0938 67.7778 53.6562C67.2153 53.3672 66.5161 53.2227 65.6802 53.2227C64.7505 53.2227 64.0083 53.4102 63.4536 53.7852C62.8989 54.1602 62.6216 54.6836 62.6216 55.3555C62.6216 55.9727 62.895 56.4336 63.4419 56.7383C63.7935 56.9414 64.5435 57.1797 65.6919 57.4531L68.6685 58.168C69.9731 58.4805 70.9575 58.8984 71.6216 59.4219C72.6528 60.2344 73.1685 61.4102 73.1685 62.9492C73.1685 64.5273 72.563 65.8398 71.3521 66.8867C70.1489 67.9258 68.4458 68.4453 66.2427 68.4453C63.9927 68.4453 62.2231 67.9336 60.9341 66.9102C59.645 65.8789 59.0005 64.4648 59.0005 62.668H62.4458C62.5552 63.457 62.77 64.0469 63.0903 64.4375C63.6763 65.1484 64.6802 65.5039 66.1021 65.5039Z" fill="#FBC02D"></path></svg>',
            title:'دوره مقدماتی تا پیشرفته جاوااسکریپت',
            description:'بهتر است از این زبان به عنوان آچار فرانسه یاد کنیم. زبانی که به ما این امکان را میدهد تا برنامه های تحت وب(فرانت اند و بک اند)، موبایل(android و ios)،دسکتاپ، بازی و ... راتوسعه بدهیم و همین امر باعث شده تا محبوبیت زیاده داشته باشد و البته این محبوبیت در نهایت منجر به بازار کار فوق العاده آن میشود.',
            video:'../video/amir-khosroshahi.mov',
            time:'۲۵',
            numberOfSessions:'۸۸',
            numberOfStudents:'۳۷۰۰',
            price:1729000
        },
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

function headerHandler(){
    addActiveClass(header , 'header-active')
    body.style.overflowY = 'hidden'
}

function removeActiveClassFromHeader(){
    removeActiveClass(header , 'header-active')
    body.style.overflowY = 'auto'
}

function setInfoPage(){
    productsInfoKeys.forEach( productsInfoKey =>{
        if(coursePharam === productsInfoKey){
            setTitlePage(productsInfo[productsInfoKey].titlePage)
            setBasicInfo(productsInfo[productsInfoKey].basicInfo)
        }
    } )
}
setInfoPage()

function setTitlePage(titlePage){
    title.innerText = titlePage 
}

function setBasicInfo(basicInfo){
    basicInfoCover.innerHTML = basicInfo.svg    
    basicInfoTitle.innerText = basicInfo.title
    basicInfoDescription.innerText = basicInfo.description
    basicInfoVideo.src = basicInfo.video
    basicInfoTime.innerText = basicInfo.time
    basicInfoSessions.innerText = basicInfo.numberOfSessions
    basicInfoStudents.innerText = basicInfo.numberOfStudents
    basicInfoPrice.innerText = persian.format(basicInfo.price)  
}


function loadingHandler(){
    basicInfoCaptionNone.style.display = 'block'
    loading.style.display = 'none'
}

function goUpFromFooter(){
    window.scrollTo(0 , 0)
}

////events////

menuHamburger.addEventListener('click' , headerHandler)
menuCrossIcon.addEventListener('click' , removeActiveClassFromHeader)
totalContainerMenu.addEventListener('click' , event => (event.target === totalContainerMenu) ? removeActiveClassFromHeader() : null
)
window.addEventListener('load' , loadingHandler)
footerLogo.addEventListener('click' , goUpFromFooter)