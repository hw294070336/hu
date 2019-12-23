$(function () {

    $(window).on('resize',function () {
        let htmlWith =$(window).width();
        // console.log(htmlWith);
        if( htmlWith <=974){
            //小于974的时候。给他添加样式
            $("#cooperation .col-md-2>div").css({"border-bottom":"1px solid #d2d2d7","padding-top":"12px","padding-bottom":"12px"})
            //小于974的时候。让ul下面的全部隐藏
            $("#cooperation .col-md-2>div").siblings("ul").css("display","none")
            //绑定点击事件
            $("#cooperation .col-md-2>div").off().on('click',function () {
                //当ul为none的时候
                if($(this).siblings('ul').css('display') =='none'){
                    //点击ul就弹出。他的父元素的兄弟元素就隐藏
                    $(this).siblings('ul').slideDown(300).parent().siblings('div').find("ul").slideUp(300);
                    $("#cooperation .col-md-2 div span").text("×");
                }else{
                    //否则ul就隐藏
                    $(this).siblings('ul').slideUp(300)
                    $("#cooperation .col-md-2 div span").text("+");

                }
            })
        }else{
            // $("#cooperation .col-md-2>div").off();
            //否则就让他全部 显示。并且修改样式为没有
            $("#cooperation .col-md-2>div").siblings("ul").css({"display":"block"})
            $("#cooperation .col-md-2>div").css({"border-bottom":"none","padding":"0"})

        }
    })
     //出发resize里面的事件
     $(window).trigger('resize')
});