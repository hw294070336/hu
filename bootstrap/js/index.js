$(function () {
    $(window).on("resize",function () {
        //1.1获取窗口的宽度
        let clientW = $(window).width();
        // 1.2设置图片临界点的值,大于800为true 小于800位forse
        let isShowBigImage = clientW >= 800;

        //1.3获取所有的item
        let $allItems = $("#wei .item");

        //1.4遍历
        $allItems.each(function (index,item) {

            //如果isShowBigImage的结果为true则显示大图.否则则显示小图
            //取出图片路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            // console.log( $(item).data("lg-img"));
            let imgUrl = 'url("' +  src + '")';
            // console.log(imgUrl);
            //设置背景
            $(item).css({
                backgroundImage: imgUrl
            });
            //设置img标签
            //设置小图。当isShowBigImage不为true的时候
            if (!isShowBigImage){
                //获取到小图片的路径
                let $img = "<img src=' "+ src +" '>"
                //添加小图片。并且empty是吧所有的内容清掉。先把所有的内容清掉再添加。这样就会只添加一张图片
                $(item).empty().append($img);
            }else {
                $(item).empty();
            }
        });
    });
    //进入页面就调用resize方法
    $(window).trigger("resize");

    //导航处理
    let daohang = $("#bs-example-navbar-collapse-1 li") //拿到li
            $(daohang[2]).on("click",function () {  //给li中下标为2的热门课程绑定点击事件
                //在html中添加动画.得到html的高度.让他一秒钟到wei3的地方去
            $("html").animate({scrollTop: $("#wei3").offset().top},1000);
        })
            $(daohang[5]).on("click",function () {
                $("html").animate({scrollTop:$("#wei5").offset().top},1000)
            })



    //工具提示.在最下面鼠标放到二维码上去的时候会有提示。必须在js里面写这行代码
    $('[data-toggle="tooltip"]').tooltip()

});
