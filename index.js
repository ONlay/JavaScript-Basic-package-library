

window.onload = function(){
//个人中心下拉菜单
  $().getClass("member").hover(function(){

      $().getClass("member_ul").show();

    },function(){

      $().getClass("member_ul").hide();
  });


//登陆框弹出
    var login = $().getId("login");
    var screen = $().getId("screen");
    login.center(350,250).resize(function() {
        login.center(350, 250);
    });

    $().getClass("login").click(function(){
        login.css("display","block");
        screen.lock();
    });



    $().getClass("close").click(function(){
        login.css("display","none");
        screen.unlock();
    });
    /*var top = (document.documentElement.clientHeight-250)/2;
    var left = (document.documentElement.clientWidth-350)/2;*/
    /*alert(top);
    alert(left);*/
    /*$().getId("login").css("top",top + "px").css("left",left + "px");

    window.onresize = function(){
        var top = (document.documentElement.clientHeight-250)/2;
        var left = (document.documentElement.clientWidth-350)/2;
        $().getId("login").css("top",top + "px").css("left",left + "px");
    };*/


};