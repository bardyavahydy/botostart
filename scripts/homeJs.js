const $ = document
const body = $.body
const header = $.querySelector('.header')
const menuHamburger = header.querySelector('.menu-hamburger')
const menuCrossIcon = header.querySelector('.btn-menu-cross__icon')
const totalContainerMenu = header.querySelector('.total-container-menu') 
const courses = $.querySelector('.courses')
const coursesRow = courses.querySelector('.row')
const nextExplanation = $.querySelector('.next-explanation')
const nextExplanationTitle = $.querySelector('.next-explanation__title')
const nextExplanationText = $.querySelector('.next-explanation__text')
const currentExplanation = $.querySelector('.current-explanation')
const currentExplanationTitle = $.querySelector('.current-explanation__title')
const currentExplanationText = $.querySelector('.current-explanation__text')
const nextBtnAboutMe = $.querySelector('.next-btn')
const prevBtnAboutMe = $.querySelector('.prev-btn')
const studentUsername = $.querySelector('.student-informations__username')
const studentCareer = $.querySelector('.student-informations__career')
const studentComment = $.querySelector('.student-informations__comment')
const nextVideoBtn = $.getElementById('next-video-btn')
const prevVideoBtn = $.getElementById('prev-video-btn')
const nextVideo = $.querySelector('.next-video')
const nextVideoParent = $.querySelector('.next-video-parent')
const currentVideo = $.querySelector('.current-video')
const currentVideoParent = $.querySelector('.current-video-parent')
const instaCaption = $.querySelector('.instagram__caption')
const footerLogo = $.querySelector('.footer-logo')
const coursesFragment = $.createDocumentFragment()
const persian = new Intl.NumberFormat('fa')

let aboutMeIndex = 0
let studentIndex = 0

let coursesInfo = [
    {   id:1 , 
        title:'دوره جامع و پروژه محور Next JS' , 
        duration:'۴۰' , 
        numberOfStudents:'۶۰۱' , 
        price:2579000 ,
        name:'NextJs' ,
        svg:'<svg class="courses__img" width="80" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="57" cy="57" r="56" fill="black"></circle><path d="M54.9645 0.0001534C54.1285 0.0001534 53.492 0.0049036 53.264 0.0334048C52.6881 0.0909863 52.1117 0.143241 51.5349 0.190161C35.351 1.64372 20.1836 10.3793 10.5787 23.8081C5.26688 31.1782 1.81375 39.7222 0.513021 48.7134C0.0570023 51.8438 0 52.7701 0 57.012C0 61.254 0.0570023 62.185 0.513021 65.3154C3.61015 86.7198 18.8488 104.704 39.5074 111.369C43.2078 112.556 47.1077 113.373 51.5444 113.862C53.2687 114.052 60.736 114.052 62.4651 113.862C70.1177 113.017 76.6064 111.122 83.0002 107.858C83.9835 107.355 84.1735 107.222 84.0405 107.108C83.9455 107.046 79.7653 101.441 74.7539 94.6621L65.6382 82.3496L54.2188 65.4484C50.4196 59.7935 46.5845 54.1628 42.7138 48.5567C42.671 48.5472 42.6283 56.0572 42.6045 65.2299C42.5713 81.2855 42.557 81.9268 42.3575 82.3068C42.1639 82.7521 41.8165 83.1129 41.379 83.3234C41.0227 83.4991 40.7139 83.5324 39.0276 83.5324H37.0943L36.5813 83.2094C36.2641 83.0106 36.0065 82.73 35.8355 82.3971L35.598 81.8936L35.6265 59.5534L35.6597 37.2037L36.0017 36.7667C36.2353 36.4935 36.5151 36.2636 36.8283 36.0874C37.2843 35.8641 37.4648 35.8451 39.3934 35.8451C41.664 35.8451 42.044 35.9306 42.633 36.5767C47.2556 43.4561 51.8397 50.3614 56.3848 57.2923C63.8777 68.6483 71.3751 80.0012 78.877 91.3512L87.9024 105.027L88.3584 104.728C92.7037 101.84 96.6433 98.3849 100.072 94.4531C107.254 86.2331 111.911 76.1161 113.487 65.3154C113.943 62.1802 114 61.2587 114 57.012C114 52.7701 113.943 51.8438 113.487 48.7134C110.39 27.309 95.156 9.32479 74.4973 2.66026C70.6348 1.43226 66.6574 0.599866 62.6266 0.175911C60.076 0.0551907 57.5228 -0.00341248 54.9693 0.0001534H54.9645ZM74.2931 34.2823C75.9414 34.2823 76.2312 34.3061 76.6017 34.5056C76.8671 34.6395 77.1032 34.8248 77.2964 35.0507C77.4897 35.2765 77.6362 35.5385 77.7275 35.8214C77.813 36.1064 77.8367 42.3054 77.813 56.2662L77.7845 76.3026L74.2503 70.8874L70.7067 65.4721V50.908C70.7067 41.4931 70.7542 36.1967 70.8159 35.9449C70.8956 35.6478 71.0347 35.3699 71.225 35.1282C71.4152 34.8865 71.6526 34.686 71.9227 34.5388C72.3788 34.3013 72.5403 34.2823 74.2978 34.2823H74.2931Z" fill="#D6D7E1"></path></svg>'  
    },
    {   id:2 , 
        title:'دوره مقدماتی تا پیشرفته تایپ اسکریپت' , 
        duration:'۲۵' , 
        numberOfStudents:'۴۱۶' , 
        price:1989000 ,
        name:'TypeScript',
        svg:'<svg width="80" height="80" viewBox="0 0 112 112" fill="none"><g clip-path="url(#clip0_1423_357)"><path d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z" fill="#3178C6" fill-opacity="0.18"></path><g clip-path="url(#clip1_1423_357)"><path d="M45 34C42.0618 34 39.2995 35.1442 37.2218 37.2218C35.1442 39.2995 34 42.0618 34 45V67C34 69.9382 35.1442 72.7005 37.2218 74.7782C39.2995 76.8558 42.0618 78 45 78H67C69.9382 78 72.7005 76.8558 74.7782 74.7782C76.8558 72.7005 78 69.9382 78 67V45C78 42.0618 76.8558 39.2995 74.7782 37.2218C72.7005 35.1442 69.9382 34 67 34H45ZM45 30H67C75.2843 30 82 36.7157 82 45V67C82 75.2843 75.2843 82 67 82H45C36.7157 82 30 75.2843 30 67V45C30 36.7157 36.7157 30 45 30Z" fill="#3178C6"></path><path d="M54.3789 50.7266V53.7852H49.2109V68H45.5781V53.7852H40.3867V50.7266H54.3789ZM62.7695 65.5039C63.6211 65.5039 64.3125 65.4102 64.8438 65.2227C65.8516 64.8633 66.3555 64.1953 66.3555 63.2188C66.3555 62.6484 66.1055 62.207 65.6055 61.8945C65.1055 61.5898 64.3203 61.3203 63.25 61.0859L61.4219 60.6758C59.625 60.2695 58.3828 59.8281 57.6953 59.3516C56.5312 58.5547 55.9492 57.3086 55.9492 55.6133C55.9492 54.0664 56.5117 52.7812 57.6367 51.7578C58.7617 50.7344 60.4141 50.2227 62.5938 50.2227C64.4141 50.2227 65.9648 50.707 67.2461 51.6758C68.5352 52.6367 69.2109 54.0352 69.2734 55.8711H65.8047C65.7422 54.832 65.2891 54.0938 64.4453 53.6562C63.8828 53.3672 63.1836 53.2227 62.3477 53.2227C61.418 53.2227 60.6758 53.4102 60.1211 53.7852C59.5664 54.1602 59.2891 54.6836 59.2891 55.3555C59.2891 55.9727 59.5625 56.4336 60.1094 56.7383C60.4609 56.9414 61.2109 57.1797 62.3594 57.4531L65.3359 58.168C66.6406 58.4805 67.625 58.8984 68.2891 59.4219C69.3203 60.2344 69.8359 61.4102 69.8359 62.9492C69.8359 64.5273 69.2305 65.8398 68.0195 66.8867C66.8164 67.9258 65.1133 68.4453 62.9102 68.4453C60.6602 68.4453 58.8906 67.9336 57.6016 66.9102C56.3125 65.8789 55.668 64.4648 55.668 62.668H59.1133C59.2227 63.457 59.4375 64.0469 59.7578 64.4375C60.3438 65.1484 61.3477 65.5039 62.7695 65.5039Z" fill="#3178C6"></path></g></g><defs><clipPath id="clip0_1423_357"><rect width="112" height="112" fill="white"></rect></clipPath><clipPath id="clip1_1423_357"><rect width="52" height="52" fill="white" transform="translate(30 30)"></rect></clipPath></defs></svg>'  
    },
    {   id:3 , 
        title:'دوره جامع Node JS و Express JS' , 
        duration:'۵۰' , 
        numberOfStudents:'۱۰۱۸' , 
        price:3199000 ,
        name:'nodeJs',
        svg:'<svg width="80" viewBox="0 0 112 112" fill="none"><path d="M56 0C67.0758 0 77.9028 3.28434 87.1119 9.4377C96.3211 15.5911 103.499 24.3371 107.737 34.5697C111.976 44.8024 113.085 56.0621 110.924 66.9251C108.763 77.788 103.43 87.7662 95.598 95.598C87.7662 103.43 77.788 108.763 66.9251 110.924C56.0621 113.085 44.8024 111.976 34.5697 107.737C24.3371 103.499 15.5911 96.3211 9.4377 87.1119C3.28434 77.9028 0 67.0758 0 56C0 41.1479 5.89998 26.9041 16.402 16.402C26.9041 5.89998 41.1479 0 56 0V0Z" fill="#E8F5E9"></path><path d="M45.811 33C43.7054 33 41.729 34.1244 40.6532 35.9345L30.8466 52.4345C29.7228 54.3254 29.7228 56.6746 30.8466 58.5655L40.6532 75.0655C41.729 76.8756 43.7053 78 45.811 78H65.932C68.0377 78 70.014 76.8756 71.0898 75.0655L80.8964 58.5655C82.0202 56.6746 82.0202 54.3254 80.8964 52.4345L71.0898 35.9345C70.014 34.1244 68.0377 33 65.932 33H45.811ZM45.811 29H65.932C69.4595 29 72.7261 30.8585 74.5284 33.8909L84.3349 50.3909C86.2065 53.5399 86.2065 57.4601 84.3349 60.6091L74.5284 77.1091C72.7261 80.1415 69.4595 82 65.932 82H45.811C42.2835 82 39.0169 80.1415 37.2147 77.1091L27.4081 60.6091C25.5365 57.4601 25.5365 53.5399 27.4081 50.3909L37.2147 33.8909C39.0169 30.8585 42.2835 29 45.811 29Z" fill="#43A047"></path><path d="M51.0088 62.8086V50.7266H54.6182V62.75C54.6182 64.2188 54.3643 65.3828 53.8564 66.2422C52.9971 67.6953 51.4463 68.4219 49.2041 68.4219C46.9619 68.4219 45.458 67.8359 44.6924 66.6641C43.9268 65.4844 43.5439 63.8789 43.5439 61.8477V61.4492H46.9541V61.8477C46.9854 63.1836 47.1299 64.125 47.3877 64.6719C47.6533 65.2109 48.2158 65.4805 49.0752 65.4805C49.9268 65.4805 50.4893 65.1836 50.7627 64.5898C50.9268 64.2383 51.0088 63.6445 51.0088 62.8086ZM64.4736 65.5039C65.3252 65.5039 66.0166 65.4102 66.5479 65.2227C67.5557 64.8633 68.0596 64.1953 68.0596 63.2188C68.0596 62.6484 67.8096 62.207 67.3096 61.8945C66.8096 61.5898 66.0244 61.3203 64.9541 61.0859L63.126 60.6758C61.3291 60.2695 60.0869 59.8281 59.3994 59.3516C58.2354 58.5547 57.6533 57.3086 57.6533 55.6133C57.6533 54.0664 58.2158 52.7812 59.3408 51.7578C60.4658 50.7344 62.1182 50.2227 64.2979 50.2227C66.1182 50.2227 67.6689 50.707 68.9502 51.6758C70.2393 52.6367 70.915 54.0352 70.9775 55.8711H67.5088C67.4463 54.832 66.9932 54.0938 66.1494 53.6562C65.5869 53.3672 64.8877 53.2227 64.0518 53.2227C63.1221 53.2227 62.3799 53.4102 61.8252 53.7852C61.2705 54.1602 60.9932 54.6836 60.9932 55.3555C60.9932 55.9727 61.2666 56.4336 61.8135 56.7383C62.165 56.9414 62.915 57.1797 64.0635 57.4531L67.04 58.168C68.3447 58.4805 69.3291 58.8984 69.9932 59.4219C71.0244 60.2344 71.54 61.4102 71.54 62.9492C71.54 64.5273 70.9346 65.8398 69.7236 66.8867C68.5205 67.9258 66.8174 68.4453 64.6143 68.4453C62.3643 68.4453 60.5947 67.9336 59.3057 66.9102C58.0166 65.8789 57.3721 64.4648 57.3721 62.668H60.8174C60.9268 63.457 61.1416 64.0469 61.4619 64.4375C62.0479 65.1484 63.0518 65.5039 64.4736 65.5039Z" fill="#43A047"></path></svg>'  
    },
    {   id:4 , 
        title:'دوره جامع متخصص ریکت و ریداکس + ریکت ورژن ۱۸' , 
        duration:'۳۰۴۰' , 
        numberOfStudents:'۴۰' , 
        price:2989000 ,
        name:'reactJs',
        svg:'<svg width="80" viewBox="0 0 112 112"><g transform="translate(-380 -1326)"><path d="M56,0A56,56,0,1,1,0,56,56,56,0,0,1,56,0Z" transform="translate(380 1326)" fill="#e1f5fe"></path><g transform="translate(381.365 1353.547)"><path d="M54.349,0h.467a9.051,9.051,0,0,1,5.949,2.756A21.965,21.965,0,0,1,65.1,9.3a20.345,20.345,0,0,1,8.895.433,8.526,8.526,0,0,1,4.468,3.213,8.178,8.178,0,0,1,1.328,5.275A15.832,15.832,0,0,1,78.073,24a32.212,32.212,0,0,1-2.753,4.45,33.7,33.7,0,0,1,1.971,3.023,21.2,21.2,0,0,1,1.263,2.5,12.589,12.589,0,0,1,1.1,6.919,7.591,7.591,0,0,1-2.946,4.857,11.267,11.267,0,0,1-5.5,2.007,24.041,24.041,0,0,1-6.117-.162,21.779,21.779,0,0,1-4.385,6.6,9.038,9.038,0,0,1-5.892,2.707h-.365a8.2,8.2,0,0,1-4.156-1.321,14.943,14.943,0,0,1-4.534-4.926c-.617-.98-1.108-2.034-1.632-3.065a18.618,18.618,0,0,1-9.6-.7,7.973,7.973,0,0,1-4.569-4.555,10.417,10.417,0,0,1,.22-6.992,25.253,25.253,0,0,1,3.733-6.889,25.3,25.3,0,0,1-3.732-6.882,10.708,10.708,0,0,1-.38-6.519,7.6,7.6,0,0,1,3.045-4.141A11.292,11.292,0,0,1,38.2,9.129a24.773,24.773,0,0,1,5.967.171,21.717,21.717,0,0,1,4.328-6.546A9.121,9.121,0,0,1,54.349,0M51.222,3.813a15.822,15.822,0,0,0-4.479,6.005,46.22,46.22,0,0,1,7.88,2.685,46.765,46.765,0,0,1,7.9-2.692,17.145,17.145,0,0,0-3.858-5.5,6.414,6.414,0,0,0-3.8-1.747,5.676,5.676,0,0,0-3.637,1.249M36.831,11.94a6.567,6.567,0,0,0-3.976,2.512,6.344,6.344,0,0,0-.71,4.538,19.1,19.1,0,0,0,3.415,7.379,51.663,51.663,0,0,1,5.484-5.378,48.833,48.833,0,0,1,2.141-9.253,18.03,18.03,0,0,0-6.354.2m29.252-.193A49.184,49.184,0,0,1,68.213,21a51.054,51.054,0,0,1,5.475,5.378,19.5,19.5,0,0,0,3.391-7.257,6.56,6.56,0,0,0-.594-4.528A5.73,5.73,0,0,0,73.537,12.3a16.1,16.1,0,0,0-7.454-.556m-22.1,6.96c.644-.438,1.283-.881,1.925-1.321A57.116,57.116,0,0,1,51.549,14a41.847,41.847,0,0,0-5.816-1.788,42.383,42.383,0,0,0-1.75,6.5M57.7,14A61.458,61.458,0,0,1,65.265,18.7a42.337,42.337,0,0,0-1.748-6.494A39.343,39.343,0,0,0,57.7,14M51.675,16.83q-1.442.834-2.872,1.686-1.369.905-2.727,1.825-1.33.994-2.649,2c-.1,1.445-.276,2.885-.281,4.335a58.945,58.945,0,0,0,.283,7.886c1.223.925,2.421,1.885,3.71,2.717,1.357.969,2.821,1.772,4.248,2.63,1.071.569,2.155,1.113,3.233,1.668a56.309,56.309,0,0,0,9.264-5.549c.629-.509,1.324-.948,1.914-1.5a57.116,57.116,0,0,0,.072-11.415c-.063-.321.069-.768-.282-.952-1.041-.769-2.039-1.6-3.13-2.3-1.515-1.081-3.134-2-4.738-2.943-1.03-.538-2.066-1.063-3.1-1.6-.985.5-1.969,1-2.948,1.506M37.16,28.453c.764.837,1.479,1.719,2.3,2.5.408.4.811.808,1.223,1.207a64.748,64.748,0,0,1,0-7.417,49.732,49.732,0,0,0-3.521,3.707m31.416-3.71a63.091,63.091,0,0,1,0,7.421A50.734,50.734,0,0,0,72.1,28.453a50.48,50.48,0,0,0-3.523-3.71M35.547,30.513a25.722,25.722,0,0,0-2.426,4.206,10.168,10.168,0,0,0-.918,6.275,5.3,5.3,0,0,0,3.266,3.515,15.634,15.634,0,0,0,7.7.645,47.693,47.693,0,0,1-1.964-8.085,11.167,11.167,0,0,0-.2-1.187c-.2-.219-.442-.4-.662-.594a50.133,50.133,0,0,1-4.8-4.776M68.568,35.6c-.151.144-.375.267-.37.506a45.848,45.848,0,0,1-1.173,5.909c-.249,1.065-.634,2.091-.932,3.141a18.175,18.175,0,0,0,6.2-.163,6.6,6.6,0,0,0,4.12-2.54,6.374,6.374,0,0,0,.7-4.551,19.528,19.528,0,0,0-3.393-7.373A50.982,50.982,0,0,1,68.568,35.6M43.982,38.2a42.332,42.332,0,0,0,1.749,6.5,39.5,39.5,0,0,0,5.816-1.786,64.818,64.818,0,0,1-7.565-4.71M62.437,40.15c-1.532.991-3.122,1.886-4.724,2.759A41.853,41.853,0,0,0,63.531,44.7a42.461,42.461,0,0,0,1.749-6.5c-.95.647-1.895,1.3-2.843,1.952M46.744,47.093a15.852,15.852,0,0,0,4.49,6.008,5.718,5.718,0,0,0,3.505,1.244,6.617,6.617,0,0,0,4.268-2.071,17.884,17.884,0,0,0,3.515-5.188A45.879,45.879,0,0,1,54.642,44.4,46.922,46.922,0,0,1,46.744,47.093Z" fill="#1e88e5"></path><path d="M215.189,210.785a5.786,5.786,0,1,1-4.249,3.77,5.813,5.813,0,0,1,4.249-3.77m.384,2.916a2.861,2.861,0,1,0,3.506,1.728A2.866,2.866,0,0,0,215.573,213.7Z" transform="translate(-161.771 -187.986)" fill="#1e88e5"></path></g></g></svg>'  
    },
    {   id:5 , 
        title:'دوره مقدماتی تا پیشرفته جاوااسکریپت' , 
        duration:'۳۵' , 
        numberOfStudents:'۳۶۹۶' , 
        price:1729000 ,
        name:'JavaScript' ,
        svg:'<svg width="80" viewBox="0 0 112 112" fill="none"><path d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z" fill="#FFF9C4"></path><path d="M45 34C42.0618 34 39.2995 35.1442 37.2218 37.2218C35.1442 39.2995 34 42.0618 34 45V67C34 69.9382 35.1442 72.7005 37.2218 74.7782C39.2995 76.8558 42.0618 78 45 78H67C69.9382 78 72.7005 76.8558 74.7782 74.7782C76.8558 72.7005 78 69.9382 78 67V45C78 42.0618 76.8558 39.2995 74.7782 37.2218C72.7005 35.1442 69.9382 34 67 34H45ZM45 30H67C75.2843 30 82 36.7157 82 45V67C82 75.2843 75.2843 82 67 82H45C36.7157 82 30 75.2843 30 67V45C30 36.7157 36.7157 30 45 30Z" fill="#FBC02D"></path><path d="M52.6372 62.8086V50.7266H56.2466V62.75C56.2466 64.2188 55.9927 65.3828 55.4849 66.2422C54.6255 67.6953 53.0747 68.4219 50.8325 68.4219C48.5903 68.4219 47.0864 67.8359 46.3208 66.6641C45.5552 65.4844 45.1724 63.8789 45.1724 61.8477V61.4492H48.5825V61.8477C48.6138 63.1836 48.7583 64.125 49.0161 64.6719C49.2817 65.2109 49.8442 65.4805 50.7036 65.4805C51.5552 65.4805 52.1177 65.1836 52.3911 64.5898C52.5552 64.2383 52.6372 63.6445 52.6372 62.8086ZM66.1021 65.5039C66.9536 65.5039 67.645 65.4102 68.1763 65.2227C69.1841 64.8633 69.688 64.1953 69.688 63.2188C69.688 62.6484 69.438 62.207 68.938 61.8945C68.438 61.5898 67.6528 61.3203 66.5825 61.0859L64.7544 60.6758C62.9575 60.2695 61.7153 59.8281 61.0278 59.3516C59.8638 58.5547 59.2817 57.3086 59.2817 55.6133C59.2817 54.0664 59.8442 52.7812 60.9692 51.7578C62.0942 50.7344 63.7466 50.2227 65.9263 50.2227C67.7466 50.2227 69.2974 50.707 70.5786 51.6758C71.8677 52.6367 72.5435 54.0352 72.606 55.8711H69.1372C69.0747 54.832 68.6216 54.0938 67.7778 53.6562C67.2153 53.3672 66.5161 53.2227 65.6802 53.2227C64.7505 53.2227 64.0083 53.4102 63.4536 53.7852C62.8989 54.1602 62.6216 54.6836 62.6216 55.3555C62.6216 55.9727 62.895 56.4336 63.4419 56.7383C63.7935 56.9414 64.5435 57.1797 65.6919 57.4531L68.6685 58.168C69.9731 58.4805 70.9575 58.8984 71.6216 59.4219C72.6528 60.2344 73.1685 61.4102 73.1685 62.9492C73.1685 64.5273 72.563 65.8398 71.3521 66.8867C70.1489 67.9258 68.4458 68.4453 66.2427 68.4453C63.9927 68.4453 62.2231 67.9336 60.9341 66.9102C59.645 65.8789 59.0005 64.4648 59.0005 62.668H62.4458C62.5552 63.457 62.77 64.0469 63.0903 64.4375C63.6763 65.1484 64.6802 65.5039 66.1021 65.5039Z" fill="#FBC02D"></path></svg>'  
    },
    {   id:6 , 
        title:'دوره جامع HTML و CSS' , 
        duration:'۱۷' , 
        numberOfStudents:'۳۴۵۱' , 
        price:559000 ,
        name:'HTMLCSS' ,
        svg:'<svg width="80" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="60" fill="#FFE6DF"></circle><path d="M40.8496 64.05C41.8829 64.5167 42.6163 64.9667 43.0496 65.4C43.5163 65.8333 43.7496 66.3 43.7496 66.8C43.7496 67.4333 43.3996 68.2 42.6996 69.1C42.0329 70 41.2329 70.8833 40.2996 71.75L20.9996 62.65C19.9663 62.15 19.2163 61.7 18.7496 61.3C18.2829 60.8667 18.0496 60.4 18.0496 59.9C18.0496 59.2667 18.3996 58.4833 19.0996 57.55C19.7996 56.5833 20.5996 55.7 21.4996 54.9L40.8496 64.05ZM43.4996 45.4C44.4663 45.4 45.1496 46 45.5496 47.2C45.9496 48.3667 46.1996 49.8333 46.2996 51.6L27.0996 60.25C25.8329 60.85 24.8996 61.15 24.2996 61.15C23.8663 61.15 23.4996 61.0333 23.1996 60.8C22.9329 60.5667 22.6829 60.2167 22.4496 59.75C21.9163 58.65 21.5996 57.0333 21.4996 54.9L40.6996 46.25C41.9996 45.6833 42.9329 45.4 43.4996 45.4ZM54.5891 81C53.9224 81 53.2057 80.8833 52.4391 80.65C51.6724 80.45 51.0724 80.1833 50.6391 79.85C53.8724 70.5167 57.4724 56.9667 61.4391 39.2C61.7391 37.8333 62.2057 36.8333 62.8391 36.2C63.5057 35.5333 64.3557 35.2 65.3891 35.2C66.0891 35.2 66.8224 35.3167 67.5891 35.55C68.3557 35.75 68.9391 36.0167 69.3391 36.35C66.1391 45.55 62.5391 59.1 58.5391 77C58.2391 78.3667 57.7557 79.3667 57.0891 80C56.4557 80.6667 55.6224 81 54.5891 81ZM80.4609 53.1C79.4276 52.6333 78.6776 52.1833 78.2109 51.75C77.7776 51.3167 77.5609 50.85 77.5609 50.35C77.5609 49.7167 77.8943 48.95 78.5609 48.05C79.2609 47.15 80.0776 46.2667 81.0109 45.4L100.311 54.5C101.344 55 102.094 55.4667 102.561 55.9C103.028 56.3 103.261 56.75 103.261 57.25C103.261 57.8833 102.911 58.6833 102.211 59.65C101.511 60.5833 100.711 61.45 99.8109 62.25L80.4609 53.1ZM77.8109 71.75C76.8443 71.75 76.1609 71.1667 75.7609 70C75.3609 68.8 75.1109 67.3167 75.0109 65.55L94.2109 56.9C95.4776 56.3 96.4109 56 97.0109 56C97.4443 56 97.7943 56.1167 98.0609 56.35C98.3609 56.5833 98.6276 56.9333 98.8609 57.4C99.3943 58.5 99.7109 60.1167 99.8109 62.25L80.6109 70.9C79.3109 71.4667 78.3776 71.75 77.8109 71.75Z" fill="#E44F26"></path></svg>'  
    },
    {   id:7 , 
        title:'آموزش SASS' , 
        duration:'۲/۴۵' , 
        numberOfStudents:'۵۹۹۷' , 
        price:'رایگان' ,
        name:'Sass' ,
        svg:'<svg width="80" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="60" fill="#FFE2F0"></circle><path d="M86.9701 62.0223C84.7025 62.034 82.7316 62.5801 81.0815 63.3875C80.4758 62.1883 79.8703 61.1199 79.7636 60.3363C79.6447 59.4222 79.5024 58.8641 79.6447 57.7718C79.7873 56.6796 80.4284 55.1241 80.4164 55.0055C80.4047 54.8868 80.2739 54.3287 78.968 54.317C77.6621 54.3051 76.5342 54.5663 76.4035 54.9105C76.2729 55.2548 76.0237 56.0384 75.8574 56.8456C75.6318 58.0331 73.2456 62.2713 71.8804 64.4915C71.441 63.625 71.0611 62.865 70.9778 62.2596C70.8592 61.3455 70.7166 60.7874 70.8592 59.6951C71.0018 58.6029 71.6429 57.0477 71.6309 56.9288C71.6189 56.8102 71.4883 56.2521 70.1824 56.2404C68.8763 56.2284 67.7484 56.4896 67.618 56.8338C67.4874 57.1783 67.3448 57.9854 67.0719 58.7691C66.7987 59.5528 63.6288 66.6289 62.7977 68.457C62.4619 69.1969 62.1096 69.9293 61.7411 70.6535C61.7411 70.6535 61.7291 70.6892 61.6935 70.7485C61.5777 70.9756 61.4591 71.2012 61.3376 71.4252V71.437C61.1593 71.7578 60.9694 72.0544 60.8744 72.0544C60.8031 72.0544 60.6725 71.1997 60.8981 70.0361C61.3729 67.5786 62.5009 63.7557 62.4891 63.625C62.4891 63.5537 62.7028 62.889 61.7531 62.5445C60.8268 62.2002 60.4945 62.7701 60.4113 62.7701C60.3283 62.7701 60.2687 62.972 60.2687 62.972C60.2687 62.972 61.3019 58.6742 58.298 58.6742C56.4223 58.6742 53.834 60.7281 52.5517 62.5801C51.0941 63.3733 49.6378 64.1688 48.1827 64.9666C47.4825 65.3584 46.7581 65.7503 46.0814 66.1182C46.0338 66.0708 45.9864 66.0112 45.9388 65.9639C42.3058 62.0816 35.5861 59.3389 35.871 54.1271C35.978 52.2275 36.6308 47.2409 48.7764 41.1861C58.7729 36.2589 66.7276 37.6241 68.1048 40.6516C70.0755 44.9734 63.8427 52.9992 53.5134 54.1625C49.5718 54.6019 47.5059 53.0822 46.9837 52.5124C46.4376 51.9186 46.3543 51.883 46.1524 52.0019C45.8201 52.1801 46.0338 52.7143 46.1524 53.0229C46.4612 53.83 47.7315 55.2548 49.8804 55.9554C51.78 56.5726 56.3984 56.9171 61.9904 54.7562C68.2471 52.3341 73.1387 45.6025 71.7022 39.9632C70.2654 34.2406 60.7675 32.3529 51.78 35.5465C46.4376 37.4464 40.6437 40.438 36.4765 44.3323C31.5256 48.9623 30.7419 52.9872 31.0625 54.6732C32.2143 60.6568 40.4657 64.551 43.7662 67.436C43.5999 67.531 43.4454 67.6143 43.315 67.6855C41.6647 68.5046 35.3722 71.7932 33.8051 75.2719C32.0244 79.2135 34.0903 82.0394 35.4555 82.419C39.694 83.5946 44.0511 81.4813 46.3899 77.9906C48.7288 74.5002 48.4439 69.9648 47.3636 67.8872C47.3516 67.8635 47.3399 67.8396 47.316 67.8159C47.7435 67.5666 48.1827 67.3054 48.6101 67.0562C49.3958 66.5917 50.1915 66.1443 50.9966 65.7144C50.5928 66.8186 50.2959 68.1365 50.1536 70.0361C49.9754 72.2683 50.8894 75.1649 52.0886 76.3046C52.623 76.8036 53.2522 76.8153 53.656 76.8153C55.0568 76.8153 55.6862 75.6518 56.3867 74.2746C57.2414 72.5888 58.0131 70.6298 58.0131 70.6298C58.0131 70.6298 57.0515 75.925 59.6635 75.925C60.6132 75.925 61.5748 74.6901 62.0023 74.061V74.0727C62.0023 74.0727 62.026 74.037 62.0736 73.954C62.1686 73.7997 62.2279 73.7045 62.2279 73.7045V73.6811C62.6078 73.016 63.4628 71.5083 64.733 69.0032C66.3714 65.7739 67.9505 61.7374 67.9505 61.7374C67.9505 61.7374 68.0931 62.7227 68.5797 64.3611C68.8648 65.3228 69.4581 66.3794 69.9332 67.4004C69.5533 67.9348 69.3157 68.2314 69.3157 68.2314L69.3277 68.2434C69.0189 68.647 68.6866 69.0862 68.3184 69.5139C67.0242 71.0571 65.4811 72.8264 65.2672 73.3366C65.0177 73.9421 65.0773 74.3815 65.5524 74.7377C65.8966 74.9989 66.5138 75.0343 67.1432 74.9989C68.3067 74.9157 69.1258 74.6308 69.5294 74.4528C70.1587 74.2272 70.8948 73.8827 71.5833 73.3722C72.8538 72.4343 73.6253 71.0927 73.5542 69.324C73.5186 68.3503 73.198 67.3767 72.8062 66.4624C72.9251 66.2964 73.0318 66.1301 73.1507 65.9639C75.157 63.0313 76.7124 59.8138 76.7124 59.8138C76.7124 59.8138 76.855 60.7991 77.3415 62.4378C77.5791 63.2688 78.0659 64.1712 78.4931 65.0496C76.6055 66.5813 75.4419 68.362 75.0264 69.5256C74.2786 71.6865 74.8601 72.6598 75.9643 72.8854C76.4629 72.9924 77.1753 72.7548 77.6977 72.5292C78.3625 72.3156 79.1462 71.9477 79.8942 71.4013C81.1647 70.4636 82.3874 69.1574 82.3161 67.3887C82.2804 66.5813 82.0668 65.7857 81.7699 65.0139C83.3727 64.3494 85.4386 63.9812 88.0741 64.2898C93.7256 64.9546 94.8416 68.4807 94.6277 69.9651C94.4141 71.4489 93.2269 72.2563 92.8353 72.5056C92.4432 72.7551 92.3128 72.8381 92.3485 73.016C92.3958 73.2773 92.5858 73.2656 92.9183 73.2179C93.3814 73.1349 95.8865 72.0187 95.9932 69.2881C96.1714 65.7976 92.847 61.9866 86.9701 62.0223V62.0223ZM43.3744 76.7204C41.4984 78.7623 38.8866 79.534 37.7587 78.8812C36.5478 78.1805 37.0226 75.1649 39.3258 73.0043C40.7267 71.6865 42.5313 70.4633 43.7306 69.7155C44.0035 69.5493 44.4073 69.312 44.8941 69.0151C44.9771 68.9675 45.0247 68.9438 45.0247 68.9438L45.3096 68.7656C46.1524 71.8525 45.3453 74.5715 43.3744 76.7204V76.7204ZM57.0278 67.436C56.3747 69.0271 55.0095 73.0993 54.1784 72.8737C53.466 72.6838 53.0266 69.5969 54.0359 66.5457C54.5464 65.0139 55.6267 63.1856 56.2561 62.4734C57.277 61.3336 58.405 60.9534 58.6779 61.4168C59.0224 62.0223 57.4313 66.4387 57.0278 67.436V67.436ZM68.2948 72.8261C68.0216 72.9687 67.7606 73.0637 67.6417 72.9924C67.5587 72.9448 67.7606 72.7548 67.7606 72.7548C67.7606 72.7548 69.1734 71.2353 69.7313 70.5466C70.0521 70.143 70.4317 69.6682 70.8355 69.1338V69.2881C70.8355 71.1047 69.0782 72.3276 68.2945 72.8261H68.2948ZM76.9853 70.8435C76.7834 70.7009 76.8191 70.226 77.4958 68.7419C77.7571 68.1601 78.3742 67.1868 79.4311 66.2488C79.5498 66.6287 79.633 66.9968 79.621 67.3411C79.6091 69.6325 77.9709 70.4873 76.9853 70.8435Z" fill="#CD6799"></path></svg>'  
    },
    {   id:8 , 
        title:'دوره آموزش گیت، گیت‌هاب و گیت‌لب' , 
        duration:'۲/۵' , 
        numberOfStudents:'۲۷۱۵' , 
        price:309000 ,
        name:'gitGitHub' ,
        svg:'<svg width="80" viewBox="0 0 112 112"><g transform="translate(-235 -30)"><circle cx="56" cy="56" r="56" transform="translate(235 30)" fill="#ffebee"></circle><g transform="translate(260.251 55.251)"><path d="M30.228,0h1.019A30.486,30.486,0,0,1,44.656,3.386,31.227,31.227,0,0,1,58.8,18.309a30.84,30.84,0,0,1,2.7,12.044v1.015a30.543,30.543,0,0,1-4.012,14.59A30.815,30.815,0,0,1,31.267,61.5h-1.02A30.8,30.8,0,0,1,.812,37.833,31.425,31.425,0,0,1,0,31.384V30.371A30.868,30.868,0,0,1,4.755,14.48,31.227,31.227,0,0,1,16.77,3.423,30.488,30.488,0,0,1,30.228,0M23.571,4.591a27.118,27.118,0,0,0-10.717,5.857A27.625,27.625,0,0,0,6.025,19.7a26.892,26.892,0,0,0,9.1,33.185,27.569,27.569,0,0,0,6.612,3.427V51.449a7.875,7.875,0,0,1-3.507-.01,7.079,7.079,0,0,1-3.853-2.378c-.728-.816-1.166-1.857-1.972-2.608a2.973,2.973,0,0,0-2.193-1.07q-.164-1.791-.32-3.583a6.123,6.123,0,0,1,2.2.269,8.218,8.218,0,0,1,4.066,3.267,5.831,5.831,0,0,0,2.127,2.317,4.478,4.478,0,0,0,3.524-.007,8.366,8.366,0,0,1,.939-3.155,18.756,18.756,0,0,1-6.317-3.023,13.782,13.782,0,0,1-4.538-5.8,15.818,15.818,0,0,1,1.53-14.919c.121-.189.332-.378.241-.626a15.592,15.592,0,0,1-.184-4.881,6.48,6.48,0,0,1,1.079-3.077,2.734,2.734,0,0,1,2.514-1.083c2.653.195,4.961,1.641,7.19,2.96.8-.189,1.6-.4,2.411-.513a25.4,25.4,0,0,1,10.62.509c2.068-1.259,4.2-2.614,6.657-2.918a3.112,3.112,0,0,1,2.364.449,4.583,4.583,0,0,1,1.575,2.914,15.183,15.183,0,0,1-.07,5.727c-.024.3.277.508.41.757a15.727,15.727,0,0,1,2.556,9.065A14.624,14.624,0,0,1,47.9,38.66a15.437,15.437,0,0,1-6.5,4.9,25.821,25.821,0,0,1-2.653.933,8.437,8.437,0,0,1,.978,3.786c.073,2.676.012,5.355.032,8.032A27.383,27.383,0,0,0,54.3,44.205a26.758,26.758,0,0,0,3.13-18.273A27.47,27.47,0,0,0,47.606,9.573,26.79,26.79,0,0,0,23.571,4.591M17.4,20.288c.277,1.17-.694,2.037-1.273,2.92a12.421,12.421,0,0,0-1.077,10.739,10.619,10.619,0,0,0,2.635,3.86,12.683,12.683,0,0,0,4.907,2.874,38.847,38.847,0,0,0,6.249,1.249c-.543.816-1.075,1.638-1.625,2.449a9.067,9.067,0,0,0-1.63,2.713,8.147,8.147,0,0,0-.239,2.034q0,4.113,0,8.228a27.587,27.587,0,0,0,10.805,0q.007-4.117,0-8.235a7.832,7.832,0,0,0-.237-2.029,9.471,9.471,0,0,0-1.668-2.764c-.533-.8-1.058-1.6-1.588-2.4a44.03,44.03,0,0,0,5.782-1.1,14.2,14.2,0,0,0,4.34-2.122,11.287,11.287,0,0,0,3.332-4A12.312,12.312,0,0,0,45.555,23.5a15.512,15.512,0,0,1-1.407-2.2c-.265-.774.133-1.537.244-2.3a11.2,11.2,0,0,0-.133-4.275A12.612,12.612,0,0,0,40,16.584a9.758,9.758,0,0,1-1.933,1.052,3.651,3.651,0,0,1-1.8-.121,21.378,21.378,0,0,0-10.264-.186,14.293,14.293,0,0,1-1.988.382,4.571,4.571,0,0,1-2.307-.992,13.415,13.415,0,0,0-4.474-1.994A11.251,11.251,0,0,0,17.4,20.288Z" fill="#e53935"></path></g></g></svg>'  
    }
]
let aboutMeInfo = [
    { title:'چرا برنامه نویس شدم؟' , text:'سلام، من میلادم. سال ۹۴ رشته نفت قبول شدم و به هوای اینکه قراره آینده شغلی و مالی خوبی داشته باشم رفتم دانشگاه ولی همون ترم اول متوجه شدم که همه چی دقیقا برعکس تصوراتم بوده و اصلا اون چیزی نیست که فکرشو میکردم و همین جرقه‌ای شد که دنبال یک مهارت دیگه باشم و بعد از کلی تحقیق به برنامه نویسی رسیدم.' },
    { title:'چرا برنامه نویسی رو انتخاب کردم؟' , text:'برای من برنامه نویسی خیلی ایده‌آل بود، شرایط کاری یکنواختی نداشت، باید با تکنولوژی های جدید خودمو آپدیت کنم، امکان کار به صورت ریموت (دورکاری) رو داره و برای منی‌ که شهرستان هستم عالی بود. و در نهایت واقعا از خلق کردن یک محصول و دیدن نتیجه نهایی لذت میبرم.' },
    { title:'از برنامه نویسی راضی هستم؟' , text:'هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده مستثنی‌نیست اما در کل از انتخابم واقعا راضیم. برنامه نویسی من رو وارد مسیری کرد که خیلی از محدودیت هارو برداشت و تونستم کار های مفیدی انجام بدم، انجام دادن کار های مفید که به نفع مردم هست همیشه بهترین حس رو به آدم میده.' }
]
let videoStudents = [ "../video/samira-farokhnezhad.mov" , "../video/sorena-ganji.mov" , "../video/amir-khosroshahi.mov" ]
let studentsInfos = [
    {
     username:'سمیرا فرخ نژاد(ساکن استرالیا)' ,
     career:'دانشجوی جاوااسکریپت و ریکت' , 
     comment:'من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.'
    },
    {
     username:'سورنا گنجی' ,
     career:'دانشجوی جاوااسکریپت و ریکت' , 
     comment:'این دوره، اولین انتخاب من نبود ولی وقتی بقیه دوره هارو رصد کردم دیدم مثل این دوره تو دوره های فارسی اصلا نیست. مباحث خیلی کامل و جامع گفته شده و پشتیبانی خیلی خوبی داره.یکی از خوبی ها استاد اینه که مباحث پیچیده رو خیلی ساده توضیح میدن و تو مراحل مصاحبه هم همراهم بودن.'
    },
    {
     username:'امیر خسروشاهی' ,
     career:'دانشجوی جاوااسکریپت و ریکت' , 
     comment:'من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.'
    }
]

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

function addCoursesToDom(){
    coursesInfo.forEach( courseInfo =>{
        let course = $.createElement('div')
        course.className = 'course'

        let coursesCover = $.createElement('div')
        coursesCover.className = 'courses__cover'
        coursesCover.innerHTML = courseInfo.svg

        let courseDescription = $.createElement('div')
        courseDescription.className = 'course__description'

        let courseTitle = $.createElement('h4')
        courseTitle.className = 'course__title'
        courseTitle.innerText = courseInfo.title

        let courseTimeDetails = $.createElement('div')
        courseTimeDetails.className = 'course__time-details align-items-center'
        courseTimeDetails.insertAdjacentHTML( 'afterbegin' , '<svg class="course__time-icon" width="16" viewBox="0 0 35.517 35.517"><path d="M17.305,0h.905a17.716,17.716,0,0,1,6.854,1.577A17.8,17.8,0,0,1,35.517,17.245v.963A17.815,17.815,0,0,1,21.5,35.118a18.726,18.726,0,0,1-3.289.4h-.9A17.8,17.8,0,0,1,0,18.213v-.965A18.139,18.139,0,0,1,.862,12.29,17.827,17.827,0,0,1,17.305,0m-.427,2.395A15.387,15.387,0,1,0,24.09,3.733,15.366,15.366,0,0,0,16.878,2.395Z" fill="#7e57c2"></path><path d="M238.929,103.557a1.182,1.182,0,0,1,2.363,0c.006,2.979,0,5.959,0,8.938q2.736,2.193,5.475,4.383a1.182,1.182,0,0,1-1.456,1.861c-1.9-1.514-3.8-3.038-5.7-4.554a1.355,1.355,0,0,1-.691-1.12Q238.926,108.309,238.929,103.557Z" transform="translate(-222.352 -95.301)" fill="#7e57c2"></path></svg>')

        let courseDuration = $.createElement('span')
        courseDuration.className = 'course__duration'
        courseDuration.innerText = `${courseInfo.duration} ساعت`

        let coursePriceAndStudentsAndLoading = $.createElement('div')
        coursePriceAndStudentsAndLoading.className = 'course__price-and-students-and-loading space-between'

        let loading = $.createElement('div')
        loading.className = 'loading center'
        creatLoadingCircle(loading)

        let courseStudents = $.createElement('div')
        courseStudents.className = 'course__students align-items-center'
        courseStudents.insertAdjacentHTML( 'afterbegin' , '<svg class="course__student-svg" width="20" viewBox="0 0 24.802 21.788"><g transform="translate(0 -31.21)"><path d="M12.082,31.27a.945.945,0,0,1,.743.036q5.732,2.146,11.465,4.285a.764.764,0,0,1,.512.667v.052a.764.764,0,0,1-.515.672q-1.944.73-3.891,1.453-.006,2.439,0,4.878a2.381,2.381,0,0,1-.19,1.062,3.382,3.382,0,0,1-1.341,1.381,10.239,10.239,0,0,1-3.546,1.2,18.542,18.542,0,0,1-5.2.093,11.006,11.006,0,0,1-4.147-1.27,3.348,3.348,0,0,1-1.4-1.459,2.218,2.218,0,0,1-.162-.863c0-1.673,0-3.345,0-5.018-.985-.364-1.968-.735-2.952-1.1q0,5.167,0,10.334a1.805,1.805,0,0,0,.141.545c.426,1.287.861,2.57,1.282,3.859a.728.728,0,0,1-.644.922.761.761,0,0,1-.782-.615.754.754,0,0,1-.773.614A.735.735,0,0,1,0,52.305V36.262A.79.79,0,0,1,.194,35.8a1.339,1.339,0,0,1,.564-.3q5.663-2.112,11.324-4.227M4.77,35.547a4.307,4.307,0,0,0,.461.012h6.882a1.267,1.267,0,0,1,.626.087.724.724,0,0,1-.336,1.365c-2.471,0-4.943,0-7.414,0-.075,0-.15.006-.225.012,2.549.938,5.09,1.9,7.636,2.846q4.767-1.782,9.535-3.563c0-.011,0-.032,0-.043Q17.171,34.48,12.4,32.7c-2.544.948-5.085,1.9-7.631,2.846m1.092,3.432q0,2.141,0,4.281a1.113,1.113,0,0,0,.077.555,2.018,2.018,0,0,0,.7.667,7.063,7.063,0,0,0,1.88.776,14.553,14.553,0,0,0,3.3.464,14.91,14.91,0,0,0,4.921-.6,5.594,5.594,0,0,0,1.718-.849,1.058,1.058,0,0,0,.481-.766q0-2.263,0-4.526L12.723,41.3a.873.873,0,0,1-.643,0Q8.97,40.142,5.862,38.979Z" fill="#5e81d1"></path></g></svg>')

        let courseNumberOfStudents = $.createElement('span')
        courseNumberOfStudents.className = 'course__number-of-students'
        courseNumberOfStudents.innerText = `${courseInfo.numberOfStudents} نفر`

        let coursePrice = $.createElement('div')
        coursePrice.className = 'course__price'
        if(courseInfo.price === 'رایگان') coursePrice.innerText = courseInfo.price
        else coursePrice.innerText = `${persian.format(courseInfo.price)} تومان`

        let courseLinks = $.createElement('div')
        courseLinks.className = 'course__links space-between'

        let courseRegister = $.createElement('a')
        courseRegister.className = 'course__link course__register'
        courseRegister.href = '#'
        courseRegister.innerText = 'ثبت نام'

        let courseViewCourse = $.createElement('a')
        courseViewCourse.className = 'course__link course__view-course center'
        courseViewCourse.href = 'courseIndex.html?course='+ courseInfo.name +''
        courseViewCourse.innerText = 'مشاهده دوره'
        courseViewCourse.insertAdjacentHTML( 'beforeend' , '<svg class="course__arrow-svg" width="15" viewBox="0 0 20.884 27.105"><path d="M9.358,6.463a5,5,0,0,1,8.388,0l4.347,6.7A5,5,0,0,1,17.9,20.884H9.205a5,5,0,0,1-4.194-7.722Z" transform="translate(0 27.105) rotate(-90)" fill="#7e57c2"></path></svg>')

        courseLinks.append(courseRegister , courseViewCourse)
        courseStudents.append(courseNumberOfStudents)
        coursePriceAndStudentsAndLoading.append(loading , courseStudents , coursePrice)
        courseTimeDetails.append(courseDuration)
        courseDescription.append(courseTitle , courseTimeDetails , coursePriceAndStudentsAndLoading)
        course.append(coursesCover , courseDescription , courseLinks)
        coursesFragment.append(course)
    } )
    coursesRow.append(coursesFragment)
}
addCoursesToDom()

function creatLoadingCircle(loading){
    for(let i = 0 ; i < 4 ; i++){
        let loadingCircle = $.createElement('span')
        loadingCircle.className = 'loading-circle'
        loading.append(loadingCircle)
    }
}

function loadingFadeHandler(){
    let courseStudents = courses.querySelectorAll('.course__students')
    changeDisplay(courseStudents)
    let loading = courses.querySelectorAll('.loading')
    changeDisplay(loading)
}

function changeDisplay(elements){
    elements.forEach(element =>{
        if(element.classList.contains('course__students')) element.style.display = 'flex'
        else element.style.display = 'none'
    })
}

function changeInstaCaptionText(){
    if(window.innerWidth < 576){
        instaCaption.innerHTML = 'در <a href="https://www.instagram.com/javascript.front/" class="instagram__link">اینستاگرام</a> همراهمون باشید</p>'
    }else{
        instaCaption.innerHTML = 'برای دیدن آموزش های رایگان ما در اینستاگرام، <a href="https://www.instagram.com/javascript.front/" class="instagram__link">اینجا</a> کلیک کنید</p>'
    }
}
changeInstaCaptionText()

function setAnimation(currentElement , nextElement){
    currentElement.style.animation = 'currentAnimation .4s ease-in-out'
    currentElement.onanimationend = () => currentExplanation.style.animation = ''
    nextElement.style.animation = 'nextAnimation .4s ease-in-out'
    nextElement.onanimationend = () => nextExplanation.style.animation = ''
}

function moveTheElements(currentTitle , currentText , nextTitle , currentIndex , nextIndex ){
    currentTitle.innerText = aboutMeInfo[currentIndex].title
    currentText.innerText = aboutMeInfo[currentIndex].text 
    nextTitle.innerText = aboutMeInfo[nextIndex].title
}

function nextSlide(){
    ++aboutMeIndex
    if(aboutMeIndex > aboutMeInfo.length - 1) aboutMeIndex = 0
    moveTheElements( currentExplanationTitle, currentExplanationText, nextExplanationTitle , aboutMeIndex , aboutMeIndex) 
    nextExplanationText.innerText = aboutMeInfo[aboutMeIndex].text
    setAnimation(currentExplanation , nextExplanation)
}

function prevSlide(){
    aboutMeIndex--
    if(aboutMeIndex < 0) aboutMeIndex = aboutMeInfo.length - 1
    moveTheElements( currentExplanationTitle , currentExplanationText , nextExplanationTitle , aboutMeIndex , aboutMeIndex--)
    aboutMeIndex++
    nextExplanationText.innerText = aboutMeInfo[aboutMeIndex].text
    setAnimation(currentExplanation , nextExplanation)
}

function showStudentInfos(index , event){
    studentUsername.innerText = studentsInfos[index].username
    studentCareer.innerText = studentsInfos[index].career
    studentComment.innerText = studentsInfos[index].comment
    setAnimationForVideo(index , event)
}

function setAnimationForVideo(index , event){
    currentVideo.src = videoStudents[index]
    currentVideoParent.style.animation = 'currentVideo .4s ease-in-out'
    currentVideoParent.onanimationend = () => currentVideoParent.style.animation = ''
    if(event.target === nextVideoBtn || event.target === nextVideoBtn.firstElementChild) nextVideo.src = videoStudents[index + 1]
    else if(event.target === prevVideoBtn || event.target === prevVideoBtn.firstElementChild) nextVideo.src = videoStudents[index - 1]
    nextVideoParent.style.animation = 'nextVideo .4s ease-in-out'
    nextVideoParent.onanimationend = () => nextVideoParent.style.animation = ''
}

function goUpFromFooter(){
    window.scrollTo(0 , 0)
}

////events////

menuHamburger.addEventListener('click' , headerHandler)
menuCrossIcon.addEventListener('click' , removeActiveClassFromHeader)
totalContainerMenu.addEventListener('click' , event => (event.target === totalContainerMenu) ? removeActiveClassFromHeader() : null
)
window.addEventListener('load' , loadingFadeHandler)
nextBtnAboutMe.addEventListener('click' , nextSlide)
prevBtnAboutMe.addEventListener('click' , prevSlide)
nextVideoBtn.addEventListener('click' , event =>{
    studentIndex++
    if(studentIndex > studentsInfos.length - 1) studentIndex = 0
    showStudentInfos(studentIndex , event)
})
prevVideoBtn.addEventListener('click' , event =>{
    studentIndex--
    if(studentIndex < 0) studentIndex = studentsInfos.length - 1
    showStudentInfos(studentIndex , event)
})
window.addEventListener('resize' , changeInstaCaptionText)
footerLogo.addEventListener('click' , goUpFromFooter)