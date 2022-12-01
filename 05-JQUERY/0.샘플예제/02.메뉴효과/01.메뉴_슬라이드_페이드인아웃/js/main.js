$(function(){
    /*
        Slideshow
        1. opacity처리 (fadein fadeout으로 처리하면 반응형에서 배너 이미지 크기 조절하기 힘들다.)
    */
    $('.slideshow').each(function(){
        let slides = $(this).find('img'),
            slideConnt = slides.length,
            currentIndex = 0;

            //fadein fadeout 화면 줄였을때 멀쩡하도록 opacity값 준다
            slides.eq(currentIndex).css("opacity",1);
            //3초마다 showNextSlide 함수 반복 처리
            // setInterval(showNextSlide, 4000);

            function showNextSlide(){
                //다음에 표시할 슬라이드 인덱스를 구한 nextIndex
                // 0%4=0, 1%4=1, 2%4=2, 3%4=3, 4%4=0
                let nextIndex = (currentIndex+1)%slideConnt; //나머지값을 구함

                //현재 슬라이드 fadeOut
                slides.eq(currentIndex).css("opacity",0);

                //다음 슬라이드 fadeIn
                slides.eq(nextIndex).css("opacity",1);

                //현재 슬라이드를 업데이트
                currentIndex= nextIndex;
            }


        /*
            Slideshow
            2. pre/next버튼 처리
        */
        let list = $('.slideshow-slides');
        //img의 넓이, 높이값을 구한다.
        let listWidth = list.children().outerWidth();
        let listHeight = list.children().outerHeight();
        //img태그 개수 length
        let length = list.children().length;
        let time;

        //slideshow-slides의 넓이와 높이를 설정
        list.css('width', listWidth*length+'px');
        list.css('height', listHeight+'px');

        //next버튼을 클릭했을 경우
        $('.next').click(function(){
            //animate({}, time, function(){}); 애니메이션이 실행된 다음 function블록의 실행
            list.animate({left:-listWidth+'px'}, 500, function(){
                $(this).append($(this).find('img:first')); //append는 앞에 추가?(복사아님.)
                // $(this).find('img:first').remove();
                $(this).css('left', 0);
            });
        });
        //prev버튼을 클릭했을 경우
        //1->2->3->4 : 4번 슬라이드를 맨 앞에 복사 -> animate를 실행
        $('.prev').click(function(){
            list.prepend(list.find('img:last'));
            // list.find('img:last').remove();
            list.css('left', -listWidth);
            list.stop().animate({left:0}, 500);
        });

        $('.slideshow').mouseenter(function(){ //마우스 올리면 멈춤
            clearInterval(time);
        }).mouseleave(function(){//마우스 떼면 자동 슬라이드 재개
            interval();
        });


        interval();
        //자동실행 => 3초에 한번씩
        //next버튼을 클릭하도록 강제 이벤트 발생
        function interval(){
            time = setInterval(function(){
                $('.next').trigger('click');
            },3000);
        }
    });
    
    //3.tab메뉴
    $('#work').each(function(){ //each: 반복문
        let $tabList = $(this).find('.tabs-nav'), //ul
            $tabAnchors = $tabList.find('a'),  //ul>li>a a태그
            $tabPanels = $(this).find('.tabs-panel');

        //챕이 클릭되었을 때 처리
        //ul>li>a
        //이벤트객체를 파라미터로 받음 => 링크 기능에 대한 기본동작을 취소.
        $tabList.on('click','a',function(e){
            e.preventDefault();
            //ul>li>a 클랙한 a태그에 클래스active존재 => return(아무것도 작동x.)
            if($(this).hasClass('active')){ //active클래스: ▼모양 화살표
                return;
            }

            //모든a태그에 active클래스 삭제.
            //ul>li>a : 클릭한 a태그에 클래스 추가.
            $tabAnchors.removeClass('active');
            $(this).addClass('active');
           
            //모든 패널 숨김처리.
            //클릭된 탭에 대응하는 패널 표시.
            $tabPanels.hide(500);
            $($(this).attr('href')).show(500);  //$('#work01').show(500);
            
        });

        $tabAnchors.eq(0).trigger('click'); /* => a태그를 클릭,a태그에 속성줌 (일본식코딩?) */
    });

});