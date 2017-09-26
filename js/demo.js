


/*
window.onload = function(){
    alert(document.getElementById("box").innerHTML);
    alert(document.getElementsByName("sex")[0].value);
    alert(document.getElementsByTagName("p")[0].innerHTML);
};

window.onload = function(){
    alert($("box").innerHTML);
};

//普通方法
//alert(Base.getId("box").innerHTML);
   // Base.getId("box").css("color","red").css("backgroundColor","black").html("pox").click(function(){alert(a);});
    //var base = new Base();
    //alert(base.getId("box").innerHTML);
    var base = new Base();
    base.getId("box").style.color = "red";
    base.getId("box").style.backgroundColor = "black";
    base.getId("box").innerHTML = "pox";
    base.getId("box").onclick = function(){
        alert(this.innerHTML);
    }

//连缀
    //alert(base.getId("box").elements.length);
    $().getId("box").css("color","red").css("backgroundColor","black");
    //alert(base.getTagName("p").elements.length);
    $().getTagName("p").css("color","blue").html("标题").click(function(){
        alert("a");
    }).css("backgroundColor","pink");
*/

window.onload = function() {
    //$().getId("box").css("color","red");
    //$().getId("pox").css("color","green");
    //$().getId("box").addClass("a").addClass("b").addClass("b");
    //$().getId("box").addClass("a");
    //$().addRule(0,"body","background-color:green",0);
    $().removeRule(0);
};
