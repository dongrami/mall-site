var pages = new SpaAni(".section", ".ani", 300);

$(".section:last-of-type").mousemove(function(evt){
    var delta = 20 ;
   var cX = evt.clientX;
   var cY = evt.clientY;
   var iX = $(this).find(".kid").width()/2;
   var iY = $(this).find(".kid").height()/2;
   var mX = (iX - cX)/delta;
   var mY = (iY - cY)/delta;
   console.log(mX, mY);
   $(this).find(".kid").css("transform", "translate("+mX+"px,"+mY+"px)");
});