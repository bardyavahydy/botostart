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
const containerHeadLines = $.querySelector('.container-head-lines')
const containerFrequentlyAskedQuestions = $.querySelector('.container-frequently-asked-questions')
const teacherPic = $.querySelector('.container-about-teacher__img')
const teacherName = $.querySelector('.container-about-teacher__name')
const teacherCareer = $.querySelector('.container-about-teacher__career')
const teacherdesc = $.querySelector('.container-about-teacher__descriptin')
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
        },
        aboutTeacher:{
            src:'../images/erfan.png',
            name:'عرفان یوسفی',
            career:'برنامه نویس بک اند',
            description:'سلام من عرفانم و از سال ۸۹‌ برنامه نویسی رو شروع کردم و با زبان های متخلفی کار کردم ولی از سال ۹۷ به صورت تخصصی روی جاوااسکریپت و Node.Js مشغول به کار شدم و در پروژه های مختلفی شرکت داشتم. من همچنین علاقه زیادی به تدریس داشتم و دوست دارم تجربه‌ای که توی این چند سال به دست آوردم رو در قالب دوره های کامل و پروژه محور منتشر کنم تا مشکلاتی که زمانی برای من مانع بودند را از سر راه شما بردارم'
        },
        frequentlyAskedQuestions:{
            question:[
                { title:'پیشنیاز دارد؟' ,
                  answer:'بله، برای شروع این دوره باید جاوااسکریپت را در سطح متوسط بلد باشید..' ,
                  id:'prerequisite'
                },

                { title:'اگر در حین دیدن دوره به مشکلی خوردم چکار کنم؟ پشتیبانی دارد؟' ,
                  answer:'صددرصد، دوره پشتیبانی دایمی دارد. یعنی چه در حین آموزش یا مصاحبه های استخدامی و حتی بعد از استخدام و پروژه گرفتن نیز میتوانید تمام سوال هایتان را بپرسید.' ,
                  id:'support'
                },

                { title:'دوره پروژه محور است؟' ,
                  answer:'به نظر من یک آموزش زمانی منجر به یادگیری و تسلط میشود که با پروژه همراه باشد به همین دلیل هم چندین پروژه مهم و کاربردی داخل دوره کار شده تا کاربرد مفاهیمی که یاد میگیرید را ببینید و درک بهتری حاصل بشود. در این دوره با Node.js و React.js و Vue.js پروژه زده خواهد شد..' ,
                  id:'project-oriented' 
                },

                { title:'دوره آپدیت است؟' ,
                  answer:'بله، دوره کاملا آپدیت است و همچنین مباحثی که مورد نیاز دانشجو ها باشد و یا استفاده ازشون در پروژه ها رو به افزایش باشد نیز به دوره اضافه خواهد شد' ,
                  id:'update' 
                }
            ]
        },
        HeadLines:{
            season:[
                { 
                  id:'season-one',
                  unit:'فصل اول: ' ,
                  title:'آموزش مقدماتی تا پیشرفته ی سینتکس تایپ اسکریپت' ,
                  part:[
                    {
                        name:'تایپ اسکریپت چیست و چرا باید استفاده شود؟',
                        time:'۱۰ دقیقه',
                    },
                    {
                        name:'نصب تایپ اسکریپت',
                        time:'۱۴ دقیقه',
                    },
                    {
                        name:'اجرای اولین برنامه با تایپ اسکریپت',
                        time:'۷ دقیقه',
                    },
                    {
                        name:' متعیر ها و let و const',
                        time:'۹ دقیقه',
                    },
                    {
                        name:' انواع داده ای string, number, boolean',
                        time:'۸ دقیقه',
                    },
                    {
                        name:'inference تایپ ها',
                        time:'۳ دقیقه',
                    },
                  ]
                },

                { 
                  id:'season-two',
                  unit:'فصل دوم: ' ,
                  title:'تایپ اسکریپت در Node JS' ,
                  part:[]
                },
            ]
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
        },
        aboutTeacher:{
            src:'../images/milad.png',
            name:'میلاد عظمی',
            career:'برنامه نویس فرانت اند',
            description:'سلام بچه ها👋 من میلادم و از سال ۹۵ مشغول برنامه نویسی فرانت اند و ریکت هستم و همچنین در سال ۹۸ وارد حوزه آموزش نیز شدم و چندین دوره در سایت های بزرگ ایرانی منتشر کردم و در نهایت تصمیم به تدریس در پلتفرم اختصاصی خودم ینی بوتواستارت گرفتم. تمام تلاشم اینه تا دوره هایی رو بهتون ارایه بدم که علاوه بر مباحث مهم حاوی پروژه و تجربه باشه تا مسیر ورود شما به بازار کار رو راحتتر کنم'
        },
        frequentlyAskedQuestions:{
            question:[
                { title:'مباحث از صفر گفته شده؟' ,
                  answer:'بله، در این دوره تمام مباحث و مفاهیم جاوااسکریپت از صفر گفته شده و نیاز به هیچ دانش قبلی راجع به جاوااسکریپت نیست.' ,
                  id:'from-zero'
                },

                { title:'پیشنیاز دارد؟' ,
                  answer:'قبل از شروع این دوره حتما HTML&CSS را در سطح متوسط یاد بگیرید.' ,
                  id:'support'
                },

                { title:'اگر در حین دیدن دوره به مشکلی خوردم چکار کنم؟ پشتیبانی دارد؟' ,
                  answer:'صددرصد، دوره پشتیبانی دایمی دارد. یعنی چه در حین آموزش یا مصاحبه های استخدامی و حتی بعد از استخدام و پروژه گرفتن نیز میتوانید تمام سوال هایتان را بپرسید.' ,
                  id:'prerequisite'
                },

                { title:'دوره پروژه محور است؟' ,
                  answer:'به نظر من یک آموزش زمانی منجر به یادگیری و تسلط میشود که با پروژه همراه باشد به همین دلیل هم چندین پروژه مهم و کاربردی داخل دوره کار شده تا کاربرد مفاهیمی که یاد میگیرید را ببینید و درک بهتری حاصل بشود.',
                  id:'project-oriented' 
                },

                { title:'دوره آپدیت است؟' ,
                  answer:'بله، دوره کاملا آپدیت است و همچنین مباحثی که مورد نیاز دانشجو ها باشد و یا استفاده ازشون در پروژه ها رو به افزایش باشد نیز به دوره اضافه خواهد شد',
                  id:'update' 
                },

                { title:'منظور از وبینار های هفتگی چیه؟' ,
                  answer:'هر هفته برای دانشجو ها وبینار برگزار خواهد شد تا هم به مشکلات جمعی رسیدگی شود و هم انگیزه ای باشد برای ادامه کار.' ,
                  id:'webinar'
                }
            ]
        },
        HeadLines:{
            season:[
                {
                  id:'js',
                  unit:'' ,
                  title:'دوره جامع و پروژه محور جاوااسکریپت' ,
                  part:[
                    {
                        name:'مقدمه',
                        time:'۱۰ دقیقه',
                        src:'../video/amir-khosroshahi.mov'
                    },
                    {
                        name:'جاوااسکریپت چیست؟',
                        time:'۱۰ دقیقه',
                        src:'../video/samira-farokhnezhad.mov'
                    },
                    {
                        name:'اکما چیست؟',
                        time:'۷ دقیقه',
                    },
                    {
                        name:' نحوه اجرا کدهای جاوا اسکریپت',
                        time:'۱۷ دقیقه',
                    },
                    {
                        name:'کامنت',
                        time:'۴ دقیقه',
                    },
                    {
                        name:'متغییر چیست و نحوه تعریف آن',
                        time:'۱۴ دقیقه',
                    },
                  ]
                }
            ]
        }
    }
}

let productsInfoKeys = Object.keys(productsInfo)
let moreDetailsFragment = $.createDocumentFragment()
let containerHeadLinesFragment = $.createDocumentFragment()
let frequentlyAskedQuestionFragment = $.createDocumentFragment()
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
            let summary = productsInfo[productsInfoKey]
            setTitlePage(summary.titlePage)
            setBasicInfo(summary.basicInfo)
            showSeasons(summary.HeadLines.season)
            setMoreDetails(summary.moreDetails.details)
            aboutTeacherHandler(summary.aboutTeacher)
            setFrequentlyAskedQuestion(summary.frequentlyAskedQuestions.question)
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
        explanationAboutTheCourseTitle.classList.add('explanation-about-the-course__title' , 'title')
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

function showSeasons(seasons){
    seasons.forEach( (season) =>{
        let seasonElm = $.createElement('div')
        seasonElm.id = season.id
        if(seasons.length > 1) seasonElm.className = 'season'
        else{
            seasonElm.className = 'season season--active'
            seasonElm.style.height = 'fit-content'
        }
        
        let seasonWrapper = $.createElement('div')
        seasonWrapper.className = 'season__wrapper align-items-center'
        seasonWrapper.innerHTML = '<p class="season__title"><span class="season__title-span">'+ season.unit +'</span>'+ season.title +'</p><svg class="season__down-direction" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'
        seasonWrapper.addEventListener('click' ,() => addActiveToParent(season.id , 'season--active'))
        
        let seasonParts = $.createElement('div')
        seasonParts.className = 'season__parts'
        
        creatPartDetails(seasonParts , season.part)
        
        seasonElm.append(seasonWrapper , seasonParts)
        containerHeadLinesFragment.append(seasonElm)
    } )
    containerHeadLines.append(containerHeadLinesFragment)
}

function creatPartDetails(seasonParts , parts){
    parts.forEach( (part,index) =>{
        let partElm = $.createElement('div')
        partElm.className = 'part'
        
        let partWrapperTop = $.createElement('div')
        partWrapperTop.className = 'part__wrapper-top align-items-center'
        
        let partNumberAndTitle = $.createElement('div')
        partNumberAndTitle.className = 'part__number-and-title align-items-center'
        
        let partNumber = $.createElement('span')
        partNumber.className = 'part__number center'
        partNumber.innerText = persian.format(index + 1)
        
        let partTitle = $.createElement('p')
        partTitle.className = 'part__title'
        partTitle.innerText = part.name

        let partTimeAndSvg = $.createElement('div')
        partTimeAndSvg.className = 'part__time-and-svg align-items-center'
        partTimeAndSvg.innerHTML = '<span class="part__time">'+ part.time +'</span><svg class="part__svg" width="15" viewBox="0 0 35.517 35.517"><path d="M17.305,0h.905a17.716,17.716,0,0,1,6.854,1.577A17.8,17.8,0,0,1,35.517,17.245v.963A17.815,17.815,0,0,1,21.5,35.118a18.726,18.726,0,0,1-3.289.4h-.9A17.8,17.8,0,0,1,0,18.213v-.965A18.139,18.139,0,0,1,.862,12.29,17.827,17.827,0,0,1,17.305,0m-.427,2.395A15.387,15.387,0,1,0,24.09,3.733,15.366,15.366,0,0,0,16.878,2.395Z" fill="#7e57c2"></path><path d="M238.929,103.557a1.182,1.182,0,0,1,2.363,0c.006,2.979,0,5.959,0,8.938q2.736,2.193,5.475,4.383a1.182,1.182,0,0,1-1.456,1.861c-1.9-1.514-3.8-3.038-5.7-4.554a1.355,1.355,0,0,1-.691-1.12Q238.926,108.309,238.929,103.557Z" transform="translate(-222.352 -95.301)" fill="#7e57c2"></path></svg>'
        
        partNumberAndTitle.append(partNumber , partTitle)
        partWrapperTop.append(partNumberAndTitle , partTimeAndSvg)

        if(part.src){
            let partWrapperBottom = $.createElement('div')
            partWrapperBottom.className = 'part__wrapper-bottom align-items-center'

            let partWatchTheVideo = $.createElement('div')
            partWatchTheVideo.className = 'part__watch-the-video align-items-center'
            partWatchTheVideo.innerHTML = '<svg class="part__watch-the-video-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SlowMotionVideoRoundedIcon"><path d="M10 8.5v7c0 .41.47.65.8.4l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4zm1-5.27c0-.64-.59-1.13-1.21-.99-1.12.26-2.18.7-3.12 1.3-.53.34-.61 1.1-.16 1.55.32.32.83.4 1.21.16.77-.49 1.62-.85 2.54-1.05.44-.1.74-.51.74-.97zM5.1 6.51c-.46-.45-1.21-.38-1.55.16-.6.94-1.04 2-1.3 3.12-.14.62.34 1.21.98 1.21.45 0 .87-.3.96-.74.2-.91.57-1.77 1.05-2.53.26-.39.18-.9-.14-1.22zM3.23 13c-.64 0-1.13.59-.99 1.21.26 1.12.7 2.17 1.3 3.12.34.54 1.1.61 1.55.16.32-.32.4-.83.15-1.21-.49-.76-.85-1.61-1.05-2.53-.09-.45-.5-.75-.96-.75zm3.44 7.45c.95.6 2 1.04 3.12 1.3.62.14 1.21-.35 1.21-.98 0-.45-.3-.87-.74-.96-.91-.2-1.77-.57-2.53-1.05-.39-.24-.89-.17-1.21.16-.46.44-.39 1.19.15 1.53zM22 12c0 4.73-3.3 8.71-7.73 9.74-.62.15-1.22-.34-1.22-.98 0-.46.31-.86.75-.97 3.55-.82 6.2-4 6.2-7.79s-2.65-6.97-6.2-7.79c-.44-.1-.75-.51-.75-.97 0-.64.6-1.13 1.22-.98C18.7 3.29 22 7.27 22 12z"></path></svg><p class="part__watch-the-video-text">تماشای ویدیو</p>'
            partWatchTheVideo.addEventListener('click' , () => creatVideoPlayerForSampleVideo(part.src))

            let partDl = $.createElement('div')
            partDl.className = 'part__dl align-items-center'
            partDl.innerHTML = '<svg class="part__dl-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloudDownloadRoundedIcon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z"></path></svg><p class="part__dl-text">دانلود ویدیو</p>'

            partWrapperBottom.append(partWatchTheVideo , partDl)
            partElm.append(partWrapperTop , partWrapperBottom)
        }else partElm.append(partWrapperTop)
        
        seasonParts.append(partElm)
    } )
}

function creatVideoPlayerForSampleVideo(src){
    body.style.overflowY = 'hidden'
    let containerVideoPlayer = $.createElement('div')
    containerVideoPlayer.className = 'container-video-player container-video-player--active center'
    
    let videoPlayer = $.createElement('video')
    videoPlayer.className = 'video-player'
    videoPlayer.src = src
    videoPlayer.controls = true
    containerVideoPlayer.addEventListener('click' , (event) =>{
        if(event.target === containerVideoPlayer) fadeTeachingSampleVideo(containerVideoPlayer , videoPlayer)
    })

    videoPlayer.play()
    containerVideoPlayer.append(videoPlayer)
    containerHeadLines.append(containerVideoPlayer)
}

function fadeTeachingSampleVideo(containerVideoPlayer , videoPlayer){
    body.style.overflowY = 'auto'
    removeActiveClass(containerVideoPlayer , 'container-video-player--active')
    videoPlayer.pause()
    setTimeout(() => containerVideoPlayer.remove() , 255);
}

function setFrequentlyAskedQuestion(questions){
    questions.forEach( question =>{
        let frequentlyAskedQuestion = $.createElement('div')
        frequentlyAskedQuestion.classList.add('frequently-asked-question')
        frequentlyAskedQuestion.id = question.id

        let frequentlyAskedQuestionWrapper = $.createElement('div')
        frequentlyAskedQuestionWrapper.classList.add('frequently-asked-question__wrapper' , 'align-items-center')
        frequentlyAskedQuestionWrapper.addEventListener('click' , () => addActiveToParent(question.id , 'frequently-asked-question--active'))

        frequentlyAskedQuestionWrapper.insertAdjacentHTML('beforeend' , '<svg class="frequently-asked-question__down-direction" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>')
        
        let frequentlyAskedQuestionTitle = $.createElement('p')
        frequentlyAskedQuestionTitle.classList.add('frequently-asked-question__title')
        frequentlyAskedQuestionTitle.innerText = question.title

        let frequentlyAskedQuestionDescription = $.createElement('p')
        frequentlyAskedQuestionDescription.classList.add('frequently-asked-question__description')
        frequentlyAskedQuestionDescription.innerText = question.answer

        frequentlyAskedQuestionWrapper.append(frequentlyAskedQuestionTitle)
        frequentlyAskedQuestion.append(frequentlyAskedQuestionWrapper , frequentlyAskedQuestionDescription)
        frequentlyAskedQuestionFragment.append(frequentlyAskedQuestion)
    })
    containerFrequentlyAskedQuestions.append(frequentlyAskedQuestionFragment)
}

function addActiveToParent(id , classname){
    let elmParent = $.getElementById(`${id}`)
    elmParent.classList.toggle(classname)
    if(elmParent.classList.contains(classname)){
        if(window.innerWidth > 420) elmParent.style.height = `${(elmParent.scrollHeight + 16) * .1}rem`
        else elmParent.style.height = `${elmParent.scrollHeight * .1}rem`
    }else{
        if(window.innerWidth > 420) elmParent.style.height = '5.8rem'
        else elmParent.style.height = '7.3rem'
    }
}

function aboutTeacherHandler(aboutTeacher){
    teacherPic.src = aboutTeacher.src
    teacherName.innerText = aboutTeacher.name
    teacherCareer.innerText = aboutTeacher.career
    teacherdesc.innerText = aboutTeacher.description
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
readMoreBtn.addEventListener('click' , event =>{
    readMoreBtnHandler()
    creatCircleForReadMoreBtn(event)
})
footerLogo.addEventListener('click' , goUpFromFooter)