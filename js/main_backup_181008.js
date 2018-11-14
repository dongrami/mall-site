$(".searchs .hand").click(function(){
	$(".search_catelist").stop().slideToggle(100);
});
/*<li><img src="../img/toy1.jpg"alt="toy"></li>
                  <div>드래곤볼 피규어 1번입니다.</div>*/

$(".menu li").hover(function(){
	$(".menu_modal").stop().fadeOut(0);
	$(this).children(".menu_modal").stop().fadeIn(100);
}, function(){
	$(".menu_modal").stop().fadeOut(0);

});
/****카테고리0 ****/
function modalMake0(){
var html = '';
var item = [];
for (i=1; i<11; i++){
	item[i] = [];
	item[i][3] = 'https://naver.com';
	item[i][0] = '<li><img src="../img/toy' +i+ '.jpg" class="img" onclick="goUrl(\''+item[i][3]+'\');"></li>';}
	item[1][1] = "<li>Dragon ball figure 01</li>";
	item[2][1] = "<li>Dragon ball figure 02</li>";
	item[3][1] = "<li>Dragon ball figure 03</li>";
	item[4][1] = "<li>Dragon ball figure 04</li>";
	item[5][1] = "<li>Dragon ball figure 05</li>";
	item[6][1] = "<li>gundam plastic model 01</li>";
	item[7][1] = "<li>gundam plastic model 02</li>";
	item[8][1] = "<li>gundam plastic model 03</li>";
	item[9][1] = "<li>gundam plastic model 04</li>";
	item[10][1] = "<li>gundam plastic model 05</li>";
	item[1][2] = "<li>59.99$</li>";
	item[2][2] = "<li>39.99$</li>";
	item[3][2] = "<li>39.99$</li>";
	item[4][2] = "<li>79.99$</li>";
	item[5][2] = "<li>59.99$</li>";
	item[6][2] = "<li>89.99$</li>";
	item[7][2] = "<li>99.99$</li>";
	item[8][2] = "<li>59.99$</li>";
	item[9][2] = "<li>79.99$</li>";
	item[10][2] = "<li>59.99$</li>";
	

for(var i=1; i<item. length; i++){
	html = '<ul>'+item[i][0]+item[i][1]+item[i][2]+'</ul>'
$("#modal0").append(html);
};
function goUrl(url){
	location.href = url;
};
};
modalMake0();
var cates =[{
	main:{title: "SHOP PAGES", icon:"", link:"#"},
	sub:[{title: "Filters area",icon: "",link: "#"},
		  {title: "Hidden sidebar",icon:"HOT", color:"red", link: "#"},
		  {title: "No page heading",icon:"",link: "#"},
		  {title: "Small categories menu",icon: "",link: "#"},
		  {title: "Masonry grid",icon: "",link: "#"},
		  {title: "Products list view",icon: "",link: "#"},
		  {title: "With background",icon: "",link: "#"},
		  {title: "Category description",icon: "",link: "#"},
		  {title: "Only categories",icon: "",link: "#"},
		  {title: "Header overlap",icon: "",link: "#"},
		  {title: "Default shop",icon: "",link: "#"}]
},{
	main:{title:"PRODUCT HOVERS", icon:"EFFECTS",color:"green", link:"#"},
	sub:[{title:"Summary on hover",icon:"",link:"#"},
		 {title:"Icons on hover",icon:"",link:"#"},
		 {title:"Icons & Add to cart",icon:"",link:"#"},
		 {title:"Full info on image",icon:"",link:"#"},
		 {title:"All info on hover",icon:"",link:"#"},
		 {title:"Button on image",icon:"",link:"#"},
		 {title:"Standard button",icon:"",link:"#"},
		 {title:"Quick shop",icon:"",link:"#"},
		 {title:"Tiled hover",icon:"",link:"#"},
		 {title:"Categories hover #1",icon:"",link:"#"},
		 {title:"Categories hover #2",icon:"",link:"#"}]
},{
	main:{title:"PRODUCT PAGES", icon:"UNLIMITED",color:"hotpink", link:"#"},
	sub:[{title:"Default",icon:"",link:"#"},
		 {title:"Centered",icon:"",link:"#"},
		 {title:"Sticky description",icon:"",link:"#"},
		 {title:"With shadow",icon:"",link:"#"},
		 {title:"With background",icon:"",link:"#"},
		 {title:"Accordion tabs",icon:"NEW",color:"orange",link:"#"},
		 {title:"Accordion in content",icon:"",link:"#"},
		 {title:"Sticky add to cart",icon:"",link:"#"},
		 {title:"With sidebar",icon:"",link:"#"},
		 {title:"Extra content #1",icon:"",link:"#"},
		 {title:"Extra content #2",icon:"",link:"#"}]
},{
	main:{title:"PRODUCT IMAGES", icon:"", link:"#"},
	sub:[{title:"Thumbnails left",icon:"",link:"#"},
		 {title:"Thumbnails bottom",icon:"",link:"#"},
		 {title:"Sticky images",icon:"",link:"#"},
		 {title:"One column",icon:"",link:"#"},
		 {title:"Two columns",icon:"",link:"#"},
		 {title:"Combined grid",icon:"",link:"#"},
		 {title:"Images full-width",icon:"",link:"#"},
		 {title:"Zoom image",icon:"",link:"#"},
		 {title:"Images size - small",icon:"",link:"#"},
		 {title:"Images size - large",icon:"",link:"#"},
		 {title:"Without thumbnails",icon:"",link:"#"}]
},{
	main:{title:"WOOCOMMERCE", icon:"", link:"#"},
	sub:[{title:"Simple product",icon:"",link:"#"},
		 {title:"Variable product",icon:"",link:"#"},
		 {title:"External product",icon:"",link:"#"},
		 {title:"Grouped product",icon:"",link:"#"},
		 {title:"Shopping Cart",icon:"",link:"#"},
		 {title:"Checkout",icon:"",link:"#"},
		 {title:"My account",icon:"",link:"#"},
		 {title:"Wishlist",icon:"",link:"#"},
		 {title:"Track order",icon:"",link:"#"},
		 {title:"Custom 404 page #1",icon:"",link:"#"},
		 {title:"Custom 404 page #2",icon:"",link:"#"}]
},{
	main:{title:"FEATURESBEST", icon:"BEST",color:"hotpink", link:"#"},
	sub:[{title:"360° product viewer",icon:"",link:"#"},
		 {title:"With video",icon:"",link:"#"},
		 {title:"With instagram",icon:"",link:"#"},
		 {title:"With countdown timer",icon:"",link:"#"},
		 {title:"Product presentation",icon:"",link:"#"},
		 {title:"Variations swatches",icon:"",link:"#"},
		 {title:"Infinit scrolling",icon:"NEW",color:"orange",link:"#"},
		 {title:"Load more button",icon:"",link:"#"},
		 {title:"Catalog mode",icon:"",link:"#"},
		 {title:"Cookies law info",icon:"",link:"#"},
		 {title:"Parallax scrolling",icon:"",link:"#"}]
}];

function modalMake1() {
	var wid = 100/cates.length + "%";
	for(var i=0; i<cates.length; i++){
	html= '<ul style="width:'+wid+'">';
	html+= '<li class="title">';
	html+= '<a href="'+cates[i].main.link+'">'+cates[i].main.title+'</a>';
	if(cates[i].main.icon !=""){
	html+= '<div class="tooltip main-point" style="background:'+cates[i].main.color+'">';
	html+= cates[i].main.icon;
	html+= '<div style="background-color:'+cates[i].main.color+'"></div>';
	html+= '</div>';
	}
	html+= '</li>';
	for(var j=0; j<cates[i].sub.length; j++){
	html+= '<li class="cont">';
	html+= '<a href="'+cates[i].sub[j].link+'">'+cates[i].sub[j].title+'</a>';
	if(cates[i].sub[j].icon !=""){
	html+= '<div class="tooltip sub-point" style="background-color:'+cates[i].sub[j].color+'">';
	html+= cates[i].sub[j].icon;
	html+= '<div style="background-color:'+cates[i].sub[j].color+'"></div>';
	html+= '</div>';
	}
	html+= '</li>';
	}
	html+= '</ul>';
	$("#modal1").append(html);
	}
	/*$("#modal1 .tooltip").each(function(){
		var n = $(this).prev().html().length;
		$(this).css({"left" : n*5+"px"});
	});*/
}
modalMake1();
/*
var ex = [{
	main:{title="LOG TYPES", icon="", link="#"},
	sub:[{title="Alternative", icon="", link="#"},
	   	 {title="Small images", icon="", link="#"},
	 	 {title="Blog chess", icon="", link="#"},
	 	 {title="Masonry grid", icon="", link="#"},
	 	 {title="Infinit scrolling", icon="FEATURE", link="#"},
	 	 {title="With background", icon="", link="#"},
	 	 {title="Blog flat", icon="", link="#"},
	 	 {title="Default flat", icon="", link="#"},
	 	 {title="Blog mask", icon="NEW", link="#"}]
},{
	main:{title="SINGLE POSTSEXAMPLES", icon="", link="#"},
	sub:[{title="Post example #1", icon="", link="#"}]
}];
*/
/*


Post example #2
Post example #3
Post example #4
Post example #5
Post example #6
Post example #7
Post example #8
Post example #9
*/