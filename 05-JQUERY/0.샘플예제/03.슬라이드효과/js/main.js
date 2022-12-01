$(function(){
    //처음 화면 세팅
    $('.leftimg1').stop().delay(500).animate({left:0, opacity:'1'},1000);
    $('.rightimg1').stop().delay(500).animate({left:0, opacity:'1'},1000);
    $('.RNum1').css({background:'#897365', color:'#f9f9f9'}); //이런식으로 쓰지말고 class로 처리하기.

    //버튼을 클릭했을 경우
    $('.room4>li').click(function(){
        let i = $(this).index();

        //왼쪽사진
        $('.section_1_leftbottom>img').stop().animate({left:'-100%', opacity:0},1000);
        $('.section_1_leftbottom>img').eq(i).stop().animate({left:0, opacity:'1'},1000);
        // $('.section_1_leftbottom>img').
       
        //오른쪽사진
        $('.topimage>img').stop().animate({right:'-100%', opacity:0},1000);
        $('.topimage>img').eq(i).stop().animate({right:0, opacity:'1'},1000);

        //버튼
        $('.room4>li').css({background:'none', color:'#897365'});
        $('.room4>li').eq(i).css({background:'#897365', color:'#f9f9f9'});

    });
});