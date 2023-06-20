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
const containerMoreDetailsAboutTheCourse = $.querySelector('.container-more-details-about-the-course')
const readMoreBtn = $.querySelector('.total-container-more-details-about-the-course__btn')
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
        moreDetails:{
            details:[
                { title:'زبان برنامه نویسی TypeScript چیست؟' , 
                  desc:'با استفاده از TypeScript می توان کدها را به روش ساده تری نوشت و با کامپایل کردن آن ها خروجی استاندارد کد جاوا اسکریپت را به دست آورد. تایپ اسکریپت توسعه ی پروژه های جاوا اسکریپت را تا حد زیادی آسان می کند. مزایای TypeScript زمانی برای شما مشخص می شود که در پروژه ای بزرگ نیاز به استفاده از جاوا اسکریپت داشته باشید. TypeScript یک زبان برنامه نویسی است که توسط شرکت بزرگ Microsoft توسعه یافته و اکنون در بسیاری از پروژه‌ها با ابعاد و مقیاس بالا مورد استفاده قرار می گیرد و هم چنین با هر مرورگر و سیستم عاملی سازگار است. این زبان در اصل یک ابر مجموعه یا همان superset از زبان جاوا اسکریپت است؛ یعنی تمامی قابلیت‌ها و ابزارهای جاوا اسکریپت در آن دیده شده و علاوه بر آن قابلیت‌های بیشتری نیز دارد. ما از تایپ اسکریپت می توانیم در فریم ورک های Angular ، Vue.js ، React.js ، Express.js و Node.js بجای جاوا اسکریپت استفاده کنیم . هدف آن آسان شدن کد نویسی با استفاده از ویژگی های زبان های شی گرا با کم ترین میزان خطا برای برنامه های Back End و Front End می باشد. سینتکس تایپ اسکریپت شباهت زیادی به جاوا اسکریپت دارد و حتی می توانید با تغییر پسوند کدهای جاوا اسکریپت به TS از آن ها به عنوان کدهای تایپ اسکریپت استفاده نمایید.هدر این زبان برای ماژول های پایه Node.js در دسترس بوده و با استفاده از آن می توانید برنامه های نود جی اس را در تایپ اسکریپت توسعه دهید. TypeScript با کتابخانه های پرطرفدار جاوا اسکریپت نظیر ReactJS و jQuery کاملا سازگار بوده و خروجی آن با انواع مرورگرها سازگاری دارد. تایپ اسکریپت برای توسعه برنامه های AngularJS 2 مناسب بوده و در واقع برای نوشتن کدهای جاوا اسکریپت در انگولار باید از کدهای زبان TypeScript استفاده شود.' 
                },

                { title:'ویژگی های TypeScript' , 
                  desc:'زبان برنامه نویسی TypeScript نمونه ی حرفه ای از جاوا اسکریپت بوده و به صورت JS ساده کامپایل می شود. با استفاده از آن به راحتی می توانید کدهای خود را خطایابی کرده و آن ها را رفع کنید. شناسایی خطاها قبل از اجرای کد باعث شده تا فرآیند خطایابی در زمان کوتاه تری صورت پذیرد؛ همین امر یکی از دلایل محبوبیت TypeScript است. در واقع این زبان مدیریت کدها را آسان تر می کند و به شما اجازه می دهد کدهای تمیزتری بنویسید. زبان برنامه نویسی تایپ اسکریپت در هر محیطی که جاوا اسکریپت ران می شود قابلیت اجرا دارد و نیازی به VM اختصاصی برای اجرا ندارد. یکی دیگر از ویژگی های این زبان آن است که از Static Typing پشتیبانی می کند؛ یعنی کامپایلر بین انواع داده ها تمایز قایل شده و باعث می شود تا برنامه ای خواناتر داشته باشیم.' 
                },

                { title:'بازار کار تایپ اسکریپت' , 
                  desc:'زبان برنامه نویسی تایپ اسکریپت یکی از بهترین انتخاب‌ها برای برنامه نویسی در مقیاس بزرگ‌تر است. زیرا این زبان از بسیاری از خطاهایی که در حین اجرای برنامه رخ می‌دهد جلوگیری می‌کند. همچنین نگهداری و توسعه کدها را خیلی راحت‌تر کرده است. زمانی که در یک شرکت چندین نفر روی یک پروژه فعالیت می‌کنند سرعت و هماهنگی نقش بسیار مهمی دارد که تایپ اسکریپت همه این‌ موارد را فراهم می‌ کند و همچنین افراد متخصص در تایپ اسکریپت میتوانند در شرکت‌های بزرگ مشغول به کار شوند. مزیت دیگری که برای متخصصان این حوزه وجود دارد این است که می‌توانند به بصورت دورکاری با شرکت‌های بسیار خوب و معتبر داخلی یا خارجی نیز همکاری داشته باشند و اکثر شرکت های داخلی و خارجی یکی از مهارت های اصلی و پایه ی آنها برای استخدام تسلط به تایپ اسکریپت میباشد' 
                },

                { title:'پیش نیاز دوره ی تایپ اسکریپت' , 
                  desc:'پیشنیاز این دوره تسلط متوسط بر زبان جاوا اسکریپت می باشد که مشکلی در روند آموزشی شما عزیزان پیش نیاید' 
                },

                { title:'پشتیبانی دوره' , 
                  desc:'یکی از موضوعات بسیار مهم در بوتواستارت پشتیبانی دوره‌ها می‌باشد که برعهده مدرس دوره (عرفان یوسفی) است. مدرس به عنوان یک منتور و همراه از ابتدای مسیر قدم به قدم، تا زمانی که دانشجو تمامی مطالب را بصورت کامل یاد بگیرد، همراه اوست تا در تمامی روزهای هفته، حتی روزهای تعطیل به سوالات دانشجویان پاسخ دهد. این ارتباط مستقیم از طریق اکانت های واتس‌اپ - تلگرام و اینستاگرام انجام می‌گیرد.' 
                },
            ],
        }
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
        moreDetails:{
            details:[
                { title:'چرا برنامه نویسی؟' , 
                  desc:'توی شرایط اقتصادی فعلی که همه ما درگیر آن هستیم داشتن شغل مناسب با درآمد کافی بسیار مهم است، شغلی که هم شان اجتماعی داشته باشد و هم روش های مختلفی را برای درآمد در اختیار شما بگذارد. بر کسی پوشیده نیست که برنامه نویسی یکی پرتقاضا ترین مهارت ها هم در داخل کشور و هم در خارج از کشور است چرا که در تمام صنعت ها مورد استفاده قرار میگیرد و مهارتی است که روز به روز بیشتر مورد توجه قرار میگیرد و تقاضا برای آن بیشتر میشود. اما برای کار در این حرفه پردرآمد نیاز به مهارت های بالا و به روز دارید تا بتوانید در فضای رقابتی امروز از بقیه پیشی بگیرید و به عنوان یک برنامه نویس سینیور در شرکت ها و استارتاپ های برزرگ مشغول به کار شوید.' 
                },

                { title:'در این دوره چه آموزش داده می شود؟' , 
                  desc:'بدون شک جاوااسکریپت یکی از پرطرفدار ترین و کاربردی ترین زبان های دنیاست که در زمینه های مختلفی از جمله طراحی وب (فرانت اند و بک اند)، اپلیکیشن های موبایل، بازی و… کاربرد دارد. با این اوصاف میتوان به قدرت و محبوبیت و بازار کار جاوااسکریپت پی برد. هدف این پروژه آموزش پروژه محور جاوااسکریپت است، به صورتی که 7 پروژه مفید و کاربردی و چندین تمرین در طول این دوره ۲۵ ساعته حل و تشریح خواهد شد. تمام تلاشم را کرده ام که دوره ای کامل و جامع منتشر کنیم تا نیاز به دوره ی دیگری نداشته باشید و زمانتان که با ارزش ترین داراییتان است بیهوده تلف نشود و در کمترین زمان ممکن به درک خوبی از جاوااسکریپت برسید.' 
                },

                { title:'یادگیری یک زبان برنامه نویسی سخت است؟' , 
                  desc:'قطعا هر کاری سختی های خودش را دارد اما چیزی که در یادگیری یک زبان برنامه نویسی مهم است درک مفاهیم و تمرین میباشد. در این دوره سعی کردم تا با ساده ترین زبان ممکن مفاهیم را توضیح دهم و در مرحله بعد داخل پروژه ها آن هارا به کار میبریم تا دید بهتری پیدا کنید. هدف این دوره آسان کردن یادگیری جاوااسکریپت است.' 
                },

                { title:'مزیت های این دوره؟' , 
                  desc:[
                   'این دوره پشتیبانی دائمی دارد و همیشه پاسخگوی سوالات دانشجویان خواهیم بود.' ,
                   'با آپدیت های جدید برنامه ها این دوره نیز آپدیت میشود و به صورت رایگان در اختیار دانشجویان دوره قرار خواهد گرفت.' ,
                   'پذیرای انتقادات و پیشنهادات شما هستیم و همیشه سعی در ارتقای دوره ها خواهیم داشت.' ,
                   'در صورت نیاز و تقاضای دانشجویان قسمت های جدید شامل تمرین و پروژه به دوره اضافه خواهد شد.' ,
                   'برای کسانی که اول راه برنامه نویسی هستند مشاوره رایگان در نظر گرفته شده است(پس در حین ثبت نام شماره تماس درست را وارد کنید تا از آن طریق در ارتباط باشیم).' ,
                   'و …' 
                ] 
                },

                { title:'با وجود ریکت، ویو و انگولار؛ یادگیری جاوااسکریپت ضروری است؟' , 
                  desc:'اشتباه ترین کار ممکن این است که قبل از یادگیری جاوااسکریپت سراغ تکنولوژی هایی مانند ریکت بروید. این ها فریم ورک ها و لایببری های جاوااسکریپت هستند و نیازه تا قبل از شروع هر کدام حتما جاوااسکریپت را به خوبی یاد بگیرید' 
                },
            ],
        }
    }
}

let productsInfoKeys = Object.keys(productsInfo)
let moreDetailsFragment = $.createDocumentFragment()
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
            setMoreDetails(productsInfo[productsInfoKey].moreDetails.details)
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

function setMoreDetails(details){
    details.forEach( detail =>{
        let explanationAboutTheCourse = $.createElement('div')
        explanationAboutTheCourse.classList.add('explanation-about-the-course')

        let explanationAboutTheCourseWrapper = $.createElement('div')
        explanationAboutTheCourseWrapper.classList.add('explanation-about-the-course__wrapper' , 'align-items-center')
        explanationAboutTheCourseWrapper.insertAdjacentHTML('afterbegin' , '<svg class="explanation-about-the-course__svg" width="20" viewBox="0 0 57 76"><defs><filter id="a" x="20" y="0" width="34" height="34" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="3" result="b"></feGaussianBlur><feFlood flood-opacity="0.161"></feFlood><feComposite operator="in" in2="b"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="c" x="24" y="30" width="27" height="27" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="3" result="d"></feGaussianBlur><feFlood floodpacity="0.161"></feFlood><feComposite operator="in" in2="d"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="e" x="0" y="48" width="28" height="28" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="3" result="f"></feGaussianBlur><feFlood flood-opacity="0.161"></feFlood><feComposite operator="in" in2="f"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><filter id="g" x="33" y="50" width="24" height="24" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="3" result="h"></feGaussianBlur><feFlood flood-opacity="0.161"></feFlood><feComposite operator="in" in2="h"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs><g transform="translate(-1717 -1141)"><g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#a)"><rect width="16" height="16" rx="5" transform="translate(29 6)" fill="#343434" opacity="0.84"></rect></g><g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#c)"><rect width="9" height="9" rx="3" transform="translate(33 36)" fill="#343434" opacity="0.7"></rect></g><g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#e)"><rect width="10" height="10" rx="3" transform="translate(9 54)" fill="#343434" opacity="0.69"></rect></g><g transform="matrix(1, 0, 0, 1, 1717, 1141)" filter="url(#g)"><rect width="6" height="6" rx="2" transform="translate(42 56)" fill="#343434" opacity="0.39"></rect></g></g></svg>')

        let explanationAboutTheCourseTitle = $.createElement('h2')
        explanationAboutTheCourseTitle.classList.add('explanation-about-the-course__title')
        explanationAboutTheCourseTitle.innerText = detail.title

        if(Array.isArray(detail.desc)) creatUlForExplanationAboutTheCourse(detail.desc , explanationAboutTheCourse , explanationAboutTheCourseWrapper)
        else{
            let explanationAboutTheCourseDescription = $.createElement('p')
            explanationAboutTheCourseDescription.classList.add('explanation-about-the-course__description')
            explanationAboutTheCourseDescription.innerText = detail.desc
            explanationAboutTheCourse.append(explanationAboutTheCourseWrapper , explanationAboutTheCourseDescription)
        }

        explanationAboutTheCourseWrapper.append(explanationAboutTheCourseTitle)
        moreDetailsFragment.append(explanationAboutTheCourse)
    } )
    containerMoreDetailsAboutTheCourse.append(moreDetailsFragment)
}

function creatUlForExplanationAboutTheCourse(descriptions , explanationAboutTheCourse , explanationAboutTheCourseWrapper){
    let explanationAboutTheCourseLists = $.createElement('ul')
    explanationAboutTheCourseLists.classList.add('explanation-about-the-course-lists')
    descriptions.forEach(description =>{
        let explanationAboutTheCourseListsItem = $.createElement('li')
        explanationAboutTheCourseListsItem.classList.add('explanation-about-the-course-lists__item')
    
        let explanationAboutTheCourseListsItemText = $.createElement('span')
        explanationAboutTheCourseListsItemText.classList.add('explanation-about-the-course-lists__item-text')
        explanationAboutTheCourseListsItemText.innerText = description
        explanationAboutTheCourseListsItem.append(explanationAboutTheCourseListsItemText)
        explanationAboutTheCourseLists.append(explanationAboutTheCourseListsItem)
    })
    explanationAboutTheCourse.append(explanationAboutTheCourseWrapper , explanationAboutTheCourseLists)
}

function readMoreBtnHandler(){
    if(readMoreBtn.innerText === 'ادامه مطلب'){
        readMoreBtnChangeSetting('بستن' , '2rem' , `${containerMoreDetailsAboutTheCourse.offsetWidth * .1}rem` , 'none')
    }else{
        readMoreBtnChangeSetting('ادامه مطلب' , '0' , '72.5rem' , 'rgba(255, 255, 255, .8)')
    }
}

function readMoreBtnChangeSetting(text , marTop , height , background ){
    setTimeout(() => {
        readMoreBtn.innerText = text
        readMoreBtn.style.marginTop = marTop
        containerMoreDetailsAboutTheCourse.style.height = height
        containerMoreDetailsAboutTheCourse.firstElementChild.style.background = background
    }, 150);
}

function creatCircleForReadMoreBtn(event){
    let circle = $.createElement('div')
    let readMoreBtnPosition = readMoreBtn.getBoundingClientRect() 
    circle.classList.add('circle-read-more-btn')
    circle.style.left = (event.clientX - readMoreBtnPosition.left - 20) + 'px'
    circle.style.top = ((event.clientY - readMoreBtnPosition.top - 20)) + 'px'
    circle.style.animation = 'circleBtn .1s linear'
    readMoreBtn.appendChild(circle)
    circle.onanimationend = () => circle.remove()
}

function goUpFromFooter(){
    window.scrollTo(0 , 0)
}

////events////

menuHamburger.addEventListener('click' , headerHandler)
menuCrossIcon.addEventListener('click' , removeActiveClassFromHeader)
totalContainerMenu.addEventListener('click' , event => (event.target === totalContainerMenu) ? removeActiveClassFromHeader() : null
)
readMoreBtn.addEventListener('click' , event =>{
    readMoreBtnHandler()
    creatCircleForReadMoreBtn(event)
})
window.addEventListener('load' , loadingHandler)
footerLogo.addEventListener('click' , goUpFromFooter)