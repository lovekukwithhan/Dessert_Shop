window.onload = function () {
    $(".box").each(function () {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

//팝업창 모음

// -----------머핀----------------
//초코머핀
$(".close").on("click", close_chocoMuffin);
function close_chocoMuffin(){
    $("#m_chocoPop").css({"display":"none"});
}

$(".m_choco").on("click", open_chocoMuffin);
function open_chocoMuffin(){
    $("#m_chocoPop").css({"display":"block"});
}


//프레첼머핀
$(".close").on("click", close_pretzMuffin);
function close_pretzMuffin(){
    $("#m_pretzPop").css({"display":"none"});
}

$(".m_pretzel").on("click", open_pretzMuffin);
function open_pretzMuffin(){
    $("#m_pretzPop").css({"display":"block"});
}


//곰돌이머핀
$(".close").on("click", close_bearMuffin);
function close_bearMuffin(){
    $("#m_Pinkbear").css({"display":"none"});
}

$(".m_bear").on("click", open_bearMuffin);
function open_bearMuffin(){
    $("#m_Pinkbear").css({"display":"block"});
}


//겨울왕국머핀
$(".close").on("click", close_frozenMuffin);
function close_frozenMuffin(){
    $("#m_frozenPop").css({"display":"none"});
}

$(".m_frozen").on("click", open_frozenMuffin);
function open_frozenMuffin(){
    $("#m_frozenPop").css({"display":"block"});
}


//꽃머핀
$(".close").on("click", close_flowerMuffin);
function close_flowerMuffin(){
    $("#m_flowerPop").css({"display":"none"});
}

$(".m_flower").on("click", open_flowerMuffin);
function open_flowerMuffin(){
    $("#m_flowerPop").css({"display":"block"});
}


//초코칩머핀
$(".close").on("click", close_chipMuffin);
function close_chipMuffin(){
    $("#m_chipPop").css({"display":"none"});
}

$(".m_chip").on("click", open_chipMuffin);
function open_chipMuffin(){
    $("#m_chipPop").css({"display":"block"});
}


//아몬드머핀
$(".close").on("click", close_amondMuffin);
function close_amondMuffin(){
    $("#m_amondPop").css({"display":"none"});
}

$(".m_amond").on("click", open_amondMuffin);
function open_amondMuffin(){
    $("#m_amondPop").css({"display":"block"});
}
// -----------머핀----------------





// -----------쿠키----------------
//버터쿠키
$(".close").on("click", close_butterCookie);
function close_butterCookie(){
    $("#c_butterPop").css({"display":"none"});
}

$(".c_butter").on("click", open_butterCookie);
function open_butterCookie(){
    $("#c_butterPop").css({"display":"block"});
}


//딸기잼쿠키
$(".close").on("click", close_jamCookie);
function close_jamCookie(){
    $("#c_jamPop").css({"display":"none"});
}

$(".c_jam").on("click", open_jamCookie);
function open_jamCookie(){
    $("#c_jamPop").css({"display":"block"});
}

// 토끼쿠키
$(".close").on("click", close_rabbitCookie);
function close_rabbitCookie(){
    $("#c_rabbitPop").css({"display":"none"});
}

$(".c_rabbit").on("click", open_rabbitCookie);
function open_rabbitCookie(){
    $("#c_rabbitPop").css({"display":"block"});
}

// 초코칩쿠키
$(".close").on("click", close_chipCookie);
function close_chipCookie(){
    $("#c_chipPop").css({"display":"none"});
}

$(".c_chip").on("click", open_chipCookie);
function open_chipCookie(){
    $("#c_chipPop").css({"display":"block"});
}


// 진저쿠키
$(".close").on("click", close_gingerCookie);
function close_gingerCookie(){
    $("#c_gingerPop").css({"display":"none"});
}

$(".c_ginger").on("click", open_gingerCookie);
function open_gingerCookie(){
    $("#c_gingerPop").css({"display":"block"});
}


// 별쿠키
$(".close").on("click", close_starCookie);
function close_starCookie(){
    $("#c_starPop").css({"display":"none"});
}

$(".c_star").on("click", open_starCookie);
function open_starCookie(){
    $("#c_starPop").css({"display":"block"});
}


// 눈꽃쿠키
$(".close").on("click", close_snowCookie);
function close_snowCookie(){
    $("#c_snowPop").css({"display":"none"});
}

$(".c_snow").on("click", open_snowCookie);
function open_snowCookie(){
    $("#c_snowPop").css({"display":"block"});
}
// -----------쿠키----------------



// -----------초콜릿----------------
//토끼초콜릿
$(".close").on("click", close_rabbitChocolate);
function close_rabbitChocolate(){
    $("#ch_rabbitPop").css({"display":"none"});
}

$(".ch_rabbit").on("click", open_rabbitChocolate);
function open_rabbitChocolate(){
    $("#ch_rabbitPop").css({"display":"block"});
}


//바크초콜릿
$(".close").on("click", close_barkChocolate);
function close_barkChocolate(){
    $("#ch_barkPop").css({"display":"none"});
}

$(".ch_bark").on("click", open_barkChocolate);
function open_barkChocolate(){
    $("#ch_barkPop").css({"display":"block"});
}


//아이스크림초콜릿
$(".close").on("click", close_iceChocolate);
function close_iceChocolate(){
    $("#ch_icePop").css({"display":"none"});
}

$(".ch_ice").on("click", open_iceChocolate);
function open_iceChocolate(){
    $("#ch_icePop").css({"display":"block"});
}


//미니벨초콜릿
$(".close").on("click", close_bellChocolate);
function close_bellChocolate(){
    $("#ch_bellPop").css({"display":"none"});
}

$(".ch_bell").on("click", open_bellChocolate);
function open_bellChocolate(){
    $("#ch_bellPop").css({"display":"block"});
}


//세트초콜릿
$(".close").on("click", close_setChocolate);
function close_setChocolate(){
    $("#ch_setPop").css({"display":"none"});
}

$(".ch_set").on("click", open_setChocolate);
function open_setChocolate(){
    $("#ch_setPop").css({"display":"block"});
}


//3구초콜릿
$(".close").on("click", close_3setChocolate);
function close_3setChocolate(){
    $("#ch_3setPop").css({"display":"none"});
}

$(".ch_3set").on("click", open_3setChocolate);
function open_3setChocolate(){
    $("#ch_3setPop").css({"display":"block"});
}
// -----------초콜릿----------------





// -----------케잌----------------
// 딸기케이크
$(".close").on("click", close_strawCake);
function close_strawCake(){
    $("#cake_strawPop").css({"display":"none"});
}

$(".cake_straw").on("click", open_strawCake);
function open_strawCake(){
    $("#cake_strawPop").css({"display":"block"});
}


// 치즈케이크
$(".close").on("click", close_cheeseCake);
function close_cheeseCake(){
    $("#cake_cheesePop").css({"display":"none"});
}

$(".cake_cheese").on("click", open_cheeseCake);
function open_cheeseCake(){
    $("#cake_cheesePop").css({"display":"block"});
}


// 녹차딸기케이크
$(".close").on("click", close_greenteaCake);
function close_greenteaCake(){
    $("#cake_greenteaPop").css({"display":"none"});
}

$(".cake_greentea").on("click", open_greenteaCake);
function open_greenteaCake(){
    $("#cake_greenteaPop").css({"display":"block"});
}


// 초코케이크
$(".close").on("click", close_chocoCake);
function close_chocoCake(){
    $("#cake_chocoPop").css({"display":"none"});
}

$(".cake_choco").on("click", open_chocoCake);
function open_chocoCake(){
    $("#cake_chocoPop").css({"display":"block"});
}


// 블루베리케이크
$(".close").on("click", close_berryCake);
function close_berryCake(){
    $("#cake_berryPop").css({"display":"none"});
}

$(".cake_berry").on("click", open_berryCake);
function open_berryCake(){
    $("#cake_berryPop").css({"display":"block"});
}


// 초코롤케이크
$(".close").on("click", close_chocoRollCake);
function close_chocoRollCake(){
    $("#cake_chocoRollPop").css({"display":"none"});
}

$(".cake_chocoRoll").on("click", open_chocoRollCake);
function open_chocoRollCake(){
    $("#cake_chocoRollPop").css({"display":"block"});
}


// 딸기롤케이크
$(".close").on("click", close_strawRollCake);
function close_strawRollCake(){
    $("#cake_strawRollPop").css({"display":"none"});
}

$(".cake_strawRoll").on("click", open_strawRollCake);
function open_strawRollCake(){
    $("#cake_strawRollPop").css({"display":"block"});
}
// -----------케이크----------------