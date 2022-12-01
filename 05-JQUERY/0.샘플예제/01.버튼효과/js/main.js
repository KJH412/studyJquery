$(function(){
    let duration = 300;
    //1행 
    //무리로묶을때? n을 많이 씀.
    $('#buttons1 button:nth-child(-n+4)') //n=1 -> 3, n=2 ->2, n=3 ->1,
        .on('mouseenter',function(){
            $(this).stop(true).animate({
                backgroundColor:'#ae5e96',
                color:"#fff"
            },duration);            
        })
        .on('mouseleave',function(){
            $(this).stop(true).animate({
                backgroundColor:'#fff',
                color:'#ebc000'
            }, duration);
        })
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseenter',function(){
            $(this).stop(true).animate({
                borderWidth:'12px',
                color:"#ae5e9b"
            },duration);            
        })
        .on('mouseleave',function(){
            $(this).stop(true).animate({
                borderWidth:'0px',
                color:'#ebc000'
            }, duration);
        })

    $('#button1 button:nth-child(n+9)')
    .on('mouseenter',function(){
        $(this).find('>span').stop().animate({width:'100%'},duration);
    })
    .on('mouseleave',function(){
        $(this).find('>span').stop().animate({width:'0%'},duration);
    })
});