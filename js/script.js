$(document).ready(function () {
    $('.popup-link').magnificPopup({
        callbacks: {
            open: function () {
                $('.slider').slick({
                    arrows: true,
                    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/buy-arrow-left.png" alt=""><span>назад</span></button>',
                    nextArrow: '<button class="slick-arrow slick-next"><span>вперед</span><img src="images/buy-arrow-right.png" alt=""></button>',
                    dots: false,
                    infinite: false,
                });
                var current_article = $('.slider').slick('slickCurrentSlide');
                var total_articles = $('.slider').slideCount;
                $('.slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
                    current_article = $('.slider').slick('slickCurrentSlide');
                    total_articles = slick.slideCount;
                    slickArrow();
                });
                slickArrow();
                function slickArrow() {  
                    if(current_article==0){
                       $('.slick-prev').hide();
                    }else{
                       $('.slick-prev').show();
                    }
                    if (current_article==total_articles-2){
                        $('.slick-next').hide();
                    }else{
                        $('.slick-next').show();
                    }
                }
            }
        }
    });

    $("a.ajax-link").live("click", function() {
        $this = $(this);
        var link = $this.attr('href');
        var currentUrl = $(location).attr('href');
        if (link != currentUrl && link != '#') {
            $.ajax({
                url:link,
                processData:true,
                dataType:'html',
                success:function(data){
                    document.title = $(data).filter('title').text();
                }
            })
        }
    })
    
    $("#phone").mask("+7 (999) 999-99-99");


    $(".popup-link").on("click", function () {
        $(".slick-arrow").hide();
        $(".slick-dots").hide();
        $(".slider-item-two").hide();
        $(".slider-item-three").hide();

    });

    $(".sum__num-btn").on("click", function () {
        $(".slider-buy").hide();
        $(".slick-arrow").show();
        $(".slick-dots").show();
        $(".slider-item-two").show();
        $(".slider-item-three").show();
        
    });

    $('.slider').on('click','.slick-next',function(){
        $(this).hide();
    });

    $('.slider').on('click','.slick-prev',function(){
        $('.slick-next').show();
    });

    $('.variant').on('click', function() {
        $(this).toggleClass('active')
    });
});

window.addEventListener('DOMContentLoaded', function() {
    let plusBtn = document.querySelector('.preview__product-plus'),
        minusBtn = document.querySelector(".preview__product-minus"),
        sumPrice = document.querySelector(".preview__product-price-numb"),
        quantityProduct = document.querySelector(".preview__product-quantity"),
        volume = document.querySelector('.volume-clay'),
        curVolume = 200,
        price = 1600,
        quantity = 1;

    plusBtn.addEventListener('click', function() {
        quantityProduct.innerHTML = ++quantity;
        bascketCount.innerHTML = quantity;
        sumPrice.innerHTML = price * quantity;
        if (quantity > 1) {
            minusBtn.classList.remove('preview__product-minus--disable');
        }
    });
    minusBtn.addEventListener('click', function() {
        if (quantity < 2) {
            minusBtn.classList.add('preview__product-minus--disable');
            sumPrice.innerHTML = price;
            quantityProduct.innerHTML = quantity;
        } else {
            quantityProduct.innerHTML = --quantity;
            bascketCount.innerHTML = quantity;
            sumPrice.innerHTML = price * quantity;            
        }
    });


    let buyPlus = document.querySelector('.buy__plus'),
        buyMinus = document.querySelector('.buy__minus'),
        buyQuant = document.querySelector('.plus__minus-num'),
        buySum = document.querySelector('.sum__num-rub'),
        validSum = document.querySelector('.validate-value'),
        delivSum = document.querySelector('.deliv-sum'),
        radioForm = document.querySelector('.slider__three-variants'),
        quantVal = document.querySelector('.quanity__num-piece'),
        fullSum = document.querySelector('.full-sum'),
        bascketCount = document.querySelector('.header__cart--link-count');
    let sumBuy;
    buyPlus.addEventListener('click', function() {
        buyQuant.innerHTML = ++quantity;
        quantVal.innerHTML = quantity + ' pc';
        buySum.innerHTML = price * quantity + ' rub';
        volume.innerHTML = curVolume * quantity + 'ml';
        validSum.textContent = price * quantity + ' rub';
        appData.sum = sumBuy;             
        if (quantity > 1) {
            buyMinus.classList.remove('buy__minus--disable');
        }
    });

    buyMinus.addEventListener('click', function() {
        if (quantity < 2) {
            buyMinus.classList.add('buy__minus--disable');
            buySum.innerHTML = price + ' rub';
            buyQuant.innerHTML = quantity;
            volume.innerHTML = curVolume + 'ml';
        } else {
            buyQuant.innerHTML = --quantity;
            quantVal.innerHTML = quantity + ' pc';
            buySum.innerHTML = price * quantity + ' rub';
            volume.innerHTML = curVolume * quantity + 'ml';
        }
    });

    function checkType(f) {
        let elements = document.getElementsByName('radio');
        for (let i = 0; i < elements.length; i++) {
            elements[0].addEventListener('click', function() {
                delivSum.textContent = 300 + ' rub';
                fullSum.textContent = parseFloat(validSum.textContent) + 300 + ' rub';
            });
            elements[1].addEventListener('click', function() {
                delivSum.textContent = 450 + ' rub';
                fullSum.textContent = parseFloat(validSum.textContent) + 450 + ' rub';
            });
            elements[2].addEventListener('click', function() {
                delivSum.textContent = 650 + ' rub';
                fullSum.textContent = parseFloat(validSum.textContent) + 650 + ' rub';
            })
        }
    }
    checkType(radioForm);

    let burgerBtn = document.querySelector('.header__burger'),
        headerMenu = document.querySelector('.header');

        burgerBtn.addEventListener('click', function() {
            headerMenu.classList.toggle('menu-active');
        })

    let overlay = document.getElementById('overlay'),
        buyBtn1 = document.getElementById('buy-1-btn'),
        bascketBtn = document.querySelector('#basket-btn'),
        close = document.getElementsByClassName('close')[0],
        headerWrap = document.getElementsByClassName('header__wrapper')[0];
        buyBtn1.onclick = function() {
            overlay.style.display = 'block';
            headerWrap.style.display = 'none';
        }
        bascketBtn.onclick = function() {
            overlay.style.display = 'block';
            headerWrap.style.display = 'none';
        }
        close.onclick = function() {
            overlay.style.display = 'none';
            headerWrap.style.display = 'flex';
        }
        window.onclick = function(event) {
            if (event.target == overlay) {
                overlay.style.display = 'none';
            }
        }
    //forms
    $('#first-form form').validate({
        rules: {
            name: {
                required: true,
                minLength: 2
            }
        },
        messages: {
            name: {
                required: "Please, put your name",
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
    $('#second-form form').validate();
    $('#third-form form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            phone: {
                required: "Put your phone"
            },
            email: {
                required: "Put your e-mail",
                email: "Incorrect address"
            }
        }
    });

    let inpAddress = document.querySelector('.address-input'),
        inputAdd = document.querySelectorAll('.slider__two-inputs'),
        inpName = document.querySelector('.name-input'),
        inpTel = document.querySelector('.phone-input'),
        inpMail = document.querySelector('.mail-input');

    for (let i = 0; i < inputAdd.length; i++) {
        inputAdd[i].addEventListener('input', function() {
            inpName.innerHTML = `${inputAdd[0].value}${' '}${inputAdd[1].value}`;
            inpAddress.innerHTML = (`${inputAdd[2].value}${' '}${inputAdd[3].value}${' '}${inputAdd[4].value}${' '}${inputAdd[5].value}${' '}${inputAdd[6].value}${' '}${inputAdd[7].value}`).split(",");
            inpTel.innerHTML = inputAdd[8].value;
            inpMail.innerHTML = inputAdd[9].value;
        })
    }
});


$(document).ready(function(){
    $('.review__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrowLeft.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/arrowRight.png"></img></button>',
        responsive: [{
            breakpoint: 525,
            settings: {
                centerMode: false,
            }
        }]
    });
});