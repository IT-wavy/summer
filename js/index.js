$(function(){
    //对第五个div进行设置

    // $("#nav").on("click","li:eq(1)",function(){
    //     $("#bg").stop().animate({
    //         left:492
    //     });
    //     $(".node").eq(1).slideDown();
    //     $(".node").eq(1).siblings().hide();
    // });
    // $("#nav").on("click","li:eq(0)",function(){
    //     $("#bg").stop().animate({
    //         left:306
    //     });
    //     $(".node").eq(0).slideDown();
    //     $(".node").eq(0).siblings().hide();
    // });
    // $("#nav").on("click","li:eq(2)",function(){
    //     $("#bg").stop().animate({
    //         left:676
    //     });
    //     $(".node").eq(2).slideDown();
    //     $(".node").eq(2).siblings().hide();
    // });
    // $("#nav").on("click","li:eq(3)",function(){
    //     $("#bg").stop().animate({
    //         left:861
    //     });
    //     $(".node").eq(3).slideDown();
    //     $(".node").eq(3).siblings().hide();
    // });
    // $("#nav").on("click","li:eq(4)",function(){
    //     $("#bg").stop().animate({
    //         left:1045
    //     });
    //     $(".node").eq(4).slideDown();
    //     $(".node").eq(4).siblings().hide();
    // });
    //做一下较为优化版
    $("#nav").on("click","li",function(){
        let index = $(this).index();//获得鼠标点击下的li的索引值
        // alert(index);
        // alert(typeof index)
        // let juli = (20 + (index - 1) * 12);
        // let string = "vw";
        // let m = juli + string;
        //简化
        let m = ((index - 1) * 12 + 20) + "vw";//将数字与字符串连接，变成字符串
        // alert(m);//判断m是什么
        $("#bg").stop().animate({//加上stop，是为了防止动画排队
            left:m//这里默认的像素为单位，但是这里是字符串，就可以进行改变
        });
        $(".node").eq(index-1).siblings().hide();//隐藏原来显示的屏幕
        $(".node").eq(index-1).slideDown(1000);//展示点击的文本框
        // if(index == 1){
        //     $("#bg").stop().animate({
        //         left:'20vw'
        //     });
        // }
        // if(index == 2){
        //     $("#bg").stop().animate({
        //         left:'32vw'
        //     });
        // }
        // if(index == 3){
        //     $("#bg").stop().animate({
        //         left:'44vw'
        //     });
        // }
        // if(index == 4){
        //     $("#bg").stop().animate({
        //         left:'56vw'
        //     });
        // }
        // if(index == 5){
        //     $("#bg").stop().animate({
        //         left:'68vw'
        //     });
        // }
    });
    // $("div#zhengmian").hide();
    // $("div.mian").on("mouseover",function(){
    //     // alert(1111);
    //     $("div#fanmian").hide();
    // });
    // $("div.mian").on("mouseout",function(){
    //     // alert(1111);
    //     $("div#fanmian").show();
    // });

    //对第一个div进行设置
    $("a#btn").on("click",function(){
        // alert(111);
        if($("input#code").val() != ""){//文本框不为空时
            let li = $("<li></li>");//在变量中存储一个标签
            li.html($("input#code").val() + "<a href='javascript:;'>删除</a>");//为上面的列表标签添加标签
            $("ul#codeUl").prepend(li);//添加上述的组合li列表
            $("input#code").val("");//清空原本的input中的值
            li.slideDown();//添加出来，让他有一个动画效果
        };
    });
    $("a#btn1").on("click",function(){
        // alert(1111);
        // $(this).children("li").remove();
        // if($("ul#codeUl").children() != ""){
        //     alert(1111);
        // }//原本想实现，为空的情况的，还是算了吧
        $("div#tip").slideDown();//提示框显示出来
    });
    $("a#back").on("click",function(){
        // alert(111);
        $("div#tip").slideUp();//提示框收回
    });
    $("a#enter").on("click",function(){
        $("ul#codeUl").children("li").slideUp(function(){//先上拉
            $(this).remove();//再移除
        });
        $("div#tip").slideUp();//然后再将提示框收回
    });
    $("ul#codeUl").on("click","a",function(){
        // alert(1111);
        // $(this).parent("li").slideUp();
        // $(this).parent("li").remove();
        //用上述方法就不能实现动态删除
        $(this).parent("li").slideUp(function(){
            $(this).remove();//用回调函数就可以实现，在动画结束后，实现删除
        });
    });
    //键盘敲击事件
    // let code = document.getElementById("code");
    // code.onkeydown = function(enevt){
    //     if(enevt.keyCode === 13){
    //         //alert("正在验证中");//验证键盘回车事件
    //         document.getElementById("btn").click();//链接到开始那个按钮
    //     }
    // }
    $("input#code").on("keydown",function(event){
        if(event.keyCode === 13){
            // alert(1215);
            $("a#btn").click();
        }
    });
    //实现第三个界面
    
})