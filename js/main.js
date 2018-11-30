var config = {
	apiKey: "AIzaSyD8HI3yR7fCwGp6jcDYS00nbCzW2IWVWR8",
	authDomain: "dongrami-shoppingmall.firebaseapp.com",
	databaseURL: "https://dongrami-shoppingmall.firebaseio.com",
	projectId: "dongrami-shoppingmall",
	storageBucket: "dongrami-shoppingmall.appspot.com",
	messagingSenderId: "202670593803"
};
firebase.initializeApp(config);

var db = firebase.database();
var ref;
var key;

/***** HOME ******/

(function initHome() {
	ref = db.ref("root/home");
	ref.on("child_added", homeAdd);
	ref.on("child_removed", homeRev);
	ref.on("child_changed", homeChg);
})();

function homeAdd(data) {
	var id = data.key;
	var img = data.val().img;
	var src = '../img/' + img;
	var title = data.val().title;
	var link = data.val().link;
	var html = '';
	html += '<ul id="' + id + '">';
	html += '<li><img src="' + src + '"class="img" onclick="goUrl(\'' + link + '\');">';
	html += '<span>' + title + '</span>';
	html += '</li>';
	html += '</ul>';
	$("#modal0").append(html);
}

function homeRev(data) {
	var id = data.key;
	$("#" + id).remove();
	$("img", ul).attr("src", "../img/main/" + data.val().img);
	$("span", ul).html(data.val().title);
}

function homeChg(data) {
	var id = data.key;
	var ul = $("#" + id);
	$("img", ul).attr("src", "../img/main" + data.val().img);
	alert("수정되었습니다.");
}


$(".searchs .hand").click(function () {
	$(".search_catelist").stop().slideToggle(100);
});
/*<li><img src="../img/toy1.jpg"alt="toy"></li>
                  <div>드래곤볼 피규어 1번입니다.</div>*/

$(".menu li").hover(function () {
	$(".menu_modal").stop().fadeOut(0);
	$(this).children(".menu_modal").stop().fadeIn(100);
}, function () {
	$(".menu_modal").stop().fadeOut(0);

});

/*
$.ajax({	url: "../json/cate0.json",
type: "get",
dataType: "json",
data: {},
success: function (data){
	var html = '';
	for (var i = 1; i < data.result.length; i++) {
		html = '<ul>';
		html += data.result[i][0];
		html += data.result[i][1];
		html += data.result[i][2];
		html += '</ul>'
		$("#modal0").append(html);
}},
error: function (xhr, status, error){
console.log(xhr, status, error);
}
});
***카테고리0 **
	var item = [{
		img:[{img:"i"},
			{title: "Dragon ball figure 01"},
			{price: "59.99$" }]
		},{
			img:[{img:"i"},
			{title: "Dragon ball figure 02"},
			{price: "29.99$" }]
		},{
			img:[{img:"i"},
			{title: "Dragon ball figure 03"},
			{price: "59.99$" }]
		},{
			img:[{img:"i"},
			{title: "Dragon ball figure 04"},
			{price: "39.99$" }]
		},{
			img:[{img:"i"},
			{title: "Dragon ball figure 05"},
			{price: "69.99$" }]
		},{
			img:[{img:"i"},
			{title: "gundam plastic model 01"},
			{price: "89.99$" }]
		},{
			img:[{img:"i"},
			{title: "gundam plastic model 02"},
			{price: "99.99$" }]
		},{
			img:[{img:"i"},
			{title: "gundam plastic model 03"},
			{price: "59.99$" }]
		},{
			img:[{img:"i"},
			{title: "gundam plastic model 04"},
			{price: "79.99$" }]
		},{
			img:[{img:"i"},
			{title: "gundam plastic model 05"},
			{price: "59.99$" }]
		}];

	console.log(item);
	console.log(JSON.stringify(item));

	for (var i = 1; i < item.length; i++) {
		html = '<ul>' + item[i][0] + item[i][1] + item[i][2] + '</ul>'
		$("#modal0").append(html);
	}
*/
function goUrl(url) {
	location.href = url;
};


/***** SHOP ******/
(function initShop() {
	ref = db.ref("root/shop");
	ref.on("child_added", shopAdd);
	ref.on("child_removed", shopRev);
	ref.on("child_changed", shopChg);
})();

function shopAdd(data) {
	shopMake("C", data);
}

function shopRev(data) {
	var id = data.key;
	$("#" + id).remove();
}

function shopChg(data) {
	shopMake("U", data);
}

function shopMake(chk, data) {
	var id = data.key;
	var v = data.val();
	var cnt = 0;
	var wid = 0;
	var html = '';
	if (chk == "C") html = '<ul id="' + id + '">';
	html += '<li class="title">';
	html += '<a href="' + v.link + '">' + v.title + '</a>';
	if (v.icon) {
		html += '<div class="tooltip" style="background:' + v.color + '">';
		html += v.icon;
		html += '<div style="background:' + v.color + '"></div>';
		html += '</div>';
	}
	html += '</li>';
	if (chk == "C") {
		html += '</ul>';
		$("#modal1").append(html);
	} else {
		$("#" + id).html(html);
	}
	//ul의 개수에 따른 width 변화 
	cnt = $("#modal1 > ul").length;
	wid = 100 / cnt + "%";
	$("#modal1 > ul").css("width", wid);

	//2차 카테고리 생성
	$("#modal1 > ul").each(function (i) {
		var id = $(this).attr("id");
		db.ref("root/shop/" + id + "/sub/").once("value").then(function (snapshot) {
			$("#" + id).find(".cont").remove();
			snapshot.forEach(function (item) {
				var id2 = item.key;
				var v = item.val();
				var html = '<li class="cont" id="' + id2 + '">';
				html += '<a href="' + v.link + '">' + v.title + '</a>';
				if (v.icon) {
					html += '<div class="tooltip" style="background:' + v.color + '">';
					html += v.icon;
					html += '<div style="background:' + v.color + '"></div>';
					html += '</div>';
				}
				html += '</li>';
				$("#" + id).append(html);
			});
		});
	});
}

/***** 카테고리 1 ***
$.ajax({
	url: "../json/cate1.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function (data) {
		var cnt = data.result.length;
		var style = 'style="width:' + (100 / cnt + '%') + ';"';
		var html = '';
		for (var i = 0; i < cnt; i++) {
			html = '<ul ' + style + '>';
			html += '<li class="title"><a href="'+data.result[i].main.link+'">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div  style="background:'+data.result[i].main.color+'"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				html += '<li class="cont"><a href="'+data.result[i].sub[j].link+'">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:'+data.result[i].sub[j].color+'"></div>';
				html += '</div>';
				html += '</li>';
			}
			html += '</ul>';
			$("#modal1").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});*/
$.ajax({
	url: "../json/cate2.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function (data) {
		var style = 'style="width:' + (60 / data.result.length + '%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul ' + style + '>';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:' + data.result[i].main.color + '">';
			html += data.result[i].main.icon;
			html += '<div style="background:' + data.result[i].main.color + '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {

				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:' + data.result[i].sub[j].color + '">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
				html += '</div>';
				html += '<span class="number">' + data.result[i].sub[j].num + '</span>';
				html += '</li>';
			}
			html += '</ul>';
			$("#modal2").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});

$.ajax({
	url: "../json/cate3.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function (data) {
		var txt = '';
		var html = '';
		txt = '<a href="#" class="recent"  style="width:40%;"><span>RECENT POSTS</span></a>'
		$("#modal2").append(txt);
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul style="width:40%;" class="posts">';
			html += '<li class="left" style="width:50%; float:left; padding-top:1.5rem; box-sizing:border-box;">';
			html += '<img src="../img/' + data.result[i].img + '" alt="icon">';
			html += '</li>';
			html += '<li class="right" style="width:50%; float:right; padding-top:0.8rem;">';
			html += '<h5 style="font-size:1em; font-weight:600;">' + data.result[i].title + '</h5>';
			html += '<div><span>';
			html += data.result[i].txt1;
			html += '</span>';
			html += '<a href="#"; style="display:inline; color:#999; margin-left:0.3em;">'
			html += data.result[i].txt2;
			html += '</a></div>'
			html += '</li>';
			html += '</ul></div>';
			$("#modal2").append(html);
		}

	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});

/*
		var  blog = [{
				main : {title: "BLOG TYPES", link: "", color: "", icon: ""},
				sub : [{title: "Alternative",link: "",color: "",icon: "", num:""},
				       {title: "Small images",link: "",color: "",icon: "", num:"" },
					   {title: "Blog chess",link: "",icon: "FEATURE", color: "hotpink", num:"" },
					   {title: "Masonry grid",link: "",color: "",icon: "", num:"" },
					   {title: "Infinit scrolling",link: "",color: "",icon: "", num:"" },
					   {title: "With background",link: "",color: "",icon: "", num:"" },
					   {title: "Blog flat",link: "",color: "",icon: "", num:"" },
					   {title: "Default flat",link: "",color: "",icon: "", num:"" },
					   {title: "Blog mask",link: "",icon: "NEW", color: "hotpink", num:"" }]
		},{
				main: {title: "SINGLE POSTS", link: "", icon: "EXAMPLES", color: "hotpink"},
				sub : [{title: "Post example",link: "",color: "",num: "#1",icon: "" },
				       {title: "Post example",link: "",color: "",num: "#2",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#3",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#4",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#5",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#6",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#7",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#8",icon: "" },
					   {title: "Post example",link: "",color: "",num: "#9",icon: "" }]
					}];
console.log(blog)
console.log(JSON.stringify(blog));*/
/*
var recent = [{ txt0 : "RECENT POSTS"},
				{ img : "icon1.png",
				title : "A companion for extra sleeping",
			    txt1 : "June 10 1994",
			    txt2 : "1 comment"},
				{ img : "icon2.png",
				title : "Outdoor seating collection inspiration",
			    txt1 : "November 06 1993",
				txt2 : "1 comment"},
				{ img : "icon3.png",
				title : "Modular seating and table system",
			    txt1 : "stepmber 09 2018",
				txt2 : "1 comment"}]*/



$.ajax({
	url: "../json/cate4.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function (data) {
		// var style = 'style="width:' + ( 100/data.result.length +'%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul style="width:25%">';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:' + data.result[i].main.color + '">';
			html += data.result[i].main.icon;
			html += '<div style="background:' + data.result[i].main.color + '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:' + data.result[i].sub[j].color + '">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
				html += '</div>';
				html += '<span>' + data.result[i].sub[j].num + '</span>';
				html += '</li>';
			}
			html += '</ul>';
			$("#modal3").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});

$.ajax({
	url: "../json/cate5.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function (data) {
		// var style = 'style="width:' + ( 100/data.result.length +'%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul style="width:25%">';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:' + data.result[i].main.color + '">';
			html += data.result[i].main.icon;
			html += '<div style="background:' + data.result[i].main.color + '"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++) {
				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:' + data.result[i].sub[j].color + '">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:' + data.result[i].sub[j].color + '"></div>';
				html += '</div>';
				html += '</li>';
			}
			html += '</ul>';
			$("#modal4").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});



/*
var emt = [{main : {title:"THEME ELEMENTSFEATURES", link:"", color:"", icon:""},
			sub : [{title:"Titles", link:"", color:"", icon:""},
				{title:"Carousels", link:"", color:"", icon:""},
				{title:"Sliders", link:"", color:"", icon:""},
				{title:"Banners", link:"", color:"", icon:""},
				{title:"Lazy loading", link:"", color:"", icon:"NEW"},
				{title:"Instagram", link:"", color:"", icon:""},
				{title:"Social buttons", link:"", color:"", icon:""},
				{title:"Team member", link:"", color:"", icon:""},
				{title:"Testimonials", link:"", color:"", icon:""},
				{title:"Timeline", link:"", color:"", icon:""}]},
			{main : {title:"THEME ELEMENTS", link:"", color:"", icon:""},
			sub : [{title:"Countdown timer", link:"", color:"", icon:""},
				{title:"360 degree", link:"", color:"", icon:""},
				{title:"Menu price", link:"", color:"", icon:""},	
				{title:"Infobox", link:"", color:"", icon:""},
				{title:"Pricing tables", link:"", color:"", icon:""},
				{title:"Portfolio element", link:"", color:"", icon:""},
				{title:"Images gallery", link:"", color:"", icon:""},
				{title:"Blog element", link:"", color:"", icon:""},
				{title:"Video", link:"", color:"", icon:""},
				{title:"Image Hotspot", link:"", color:"", icon:"NEW"}]},
			{main : {title:"THEME ELEMENTS", link:"", color:"", icon:""},
			sub : [{title:"Products Widgets", link:"", color:"", icon:""},
				{title:"Animated counter", link:"", color:"", icon:""},
				{title:"AJAX products tabs", link:"", color:"", icon:""},
				{title:"Button with popup", link:"", color:"", icon:""},
				{title:"Section dividers", link:"", color:"", icon:""},
				{title:"Gradients", link:"", color:"", icon:""},
				{title:"Buttons", link:"", color:"", icon:""},
				{title:"List element", link:"", color:"", icon:""},
				{title:"Parallax Scrolling", link:"", color:"", icon:"HOT"},	
				{title:"Animations", link:"", color:"", icon:""}]},
			{main : {title:"WOOCOMMERCE", link:"", color:"", icon:""},				
			sub : [{title:"Recent Products", link:"", color:"", icon:""},
				{title:"Featured Products", link:"", color:"", icon:""},
				{title:"Single Product", link:"", color:"", icon:""},
				{title:"Products Category", link:"", color:"", icon:""},
				{title:"Products Categories", link:"", color:"", icon:""},
				{title:"Sale Products", link:"", color:"", icon:""},
				{title:"Top Rated Products", link:"", color:"", icon:""},
				{title:"Product Filters", link:"", color:"", icon:"BEST"},
				{title:"Products Grid", link:"", color:"", icon:""},
				{title:"Brands element", link:"", color:"", icon:""}]}]


			console.log(emt)
			console.log(JSON.stringify(emt));*/





/***왼쪽 카테고리 패널0번***/

var item = [];
item[0] = [];
item[1] = [];
item[2] = [];
item[0][0] = "../img/cap0.jpg";
item[1][0] = "../img/cap2.jpg";
item[2][0] = "../img/cap1.jpg";
item[0][1] = "animal-orange";
item[1][1] = "animal-violet";
item[2][1] = "animal-skyblue";
item[0][2] = "Dog";
item[1][2] = "Sniper";
item[2][2] = "Dog";
item[0][3] = "Cat";
item[1][3] = "Handgun";
item[2][3] = "Rion";
item[0][4] = "Kingkong";
item[1][4] = "Shotgun";
item[2][4] = "Cat";
item[0][5] = "Seal";
item[1][5] = "Rifle";
item[2][5] = "chimpanzee";
var itemBrand = [];
itemBrand[0] = "../img/brand0.png";
itemBrand[1] = "../img/brand1.png";
itemBrand[2] = "../img/brand3.png";

/***** 왼쪽 카테고리 생성 *****/
var sFn = function (data) {
	if (data.result) {
		for (var i = 0, html = '', rs; i < data.result.cates.length; i++) {
			rs = data.result.cates[i];
			html = '<li>';
			html += '<span class="' + rs.icon + '"></span>';
			html += '<a href="' + rs.link + '"><span>' + rs.title + '</span></a>';
			if (rs.ajax != '') {
				html += '<span class="fa fa-angle-right"></span>';
				html += '<div class="cate_panel clear">';
				/*****패널 생성-시작 *****/
				if (i == 0) {
					for (var j = 0; j < item.length; j++) {
						html += '<ul id="panel' + i + '" class="panel0">';
						html += '<li class="panel_img"><img src ="' + item[j][0] + '"></li>';
						html += '<li>' + item[j][1] + '</li>';
						html += '<li>' + item[j][2] + '</li>';
						html += '<li>' + item[j][3] + '</li>';
						html += '<li>' + item[j][4] + '</li>';
						html += '<li>' + item[j][5] + '</li>';
						html += '</ul>';
					}
					html += '<ul class="itembrand_panel clear">';
					for (var j = 0; j < itemBrand.length; j++) {
						html += '<li><img src="' + itemBrand[j] + '" class="img w3-grayscale-max w3-opacity"></li>';
					}
					html += '</ul>';
				}
				/*****패널 생성-종료 *****/
				html += '</div>';

			}
			html += '</li>';
			$(".banners .cate").append(html);
		}
		$(".cate > li").hover(function () {
			$(this).find(".cate_panel").show();
		}, function () {
			$(this).find(".cate_panel").hide();
		});
		$(".fur_brand_panel img").hover(function () {
			$(this).removeClass("w3-grayscale-max w3-opacity");
		}, function () {
			$(this).addClass("w3-grayscale-max w3-opacity");
		});
	}
}

var cateAjax = new Ajax("../json/cate_left1.json");
//cateAjax.addData({chk:0});
cateAjax.send(sFn);
/*
$(".banner > li").each(function(i){
	$(this).children("div").each(function(i){
		$(this).css("animation-delay", i/5+"s").addClass("ban_ani");
	});
});
*/
var banNow = 0;
$(".banners .rt_arrow").click(function () {
	$(".banner").children("li").hide();
	$(".banner").children("li").eq(banNow).show();
	$(".banner").children("li").eq(banNow).children(".ban_img").addClass("img_ani");
	$(".banner").children("li").eq(banNow).children("div").each(function (i) {
		$(this).css("animation-delay", i / 5 + "s").addClass("ban_ani");
	});
	if (banNow == 2) banNow = -1;
	banNow++;
}).trigger("click");

$(".banners").mousemove(function (evt) {
	var delta = 50;
	var cX = evt.clientX;
	var cY = evt.clientY;
	var iX = $(this).find(".ban_img").width() / 2;
	var iY = $(this).find(".ban_img").height() / 2;
	var mX = (iX - cX) / delta;
	var mY = (iY - cY) / delta;
	$(this).find(".ban_img").css("transform", "translate(" + mX + "px, " + mY + "px)");
});

$('#container').imagesLoaded()
	.done(function (instance) {
		$(".loader").hide(0);
		console.log('all images successfully loaded');
	})
	.progress(function (instance, image) {
		var result = image.isLoaded ? 'loaded' : 'broken';
		console.log('image is ' + result + ' for ' + image.img.src);
	});

	/***** Featured *****/
$(".featured_item").hover(function(){
	$(this).find("div").stop().animate({"bottom":0}, 200);
	$(this).find("img").css({"animation-name":"featuredAni"});
}, function(){
	$(this).find("div").stop().animate({"bottom":"-2rem"}, 200);
	$(this).find("img").css({"animation-name":"featuredAniBack"});
});
/***** Featured Products *****/
var prdNum = 0;
$(".prd_nav > li").click(function(){
	prdNum = $(this).index();
	$(".prd_nav > li").css({"color":"#666"});
	$(".prd_nav div").css({"width":0});
	$(this).css({"color":"#222"});
	$(this).children("div").css({"width":"100%"});
});
$(".prd_nav > li").hover(function(){
	if($(this).index() != prdNum) {
		$(this).css({"color":"#222"});
		$(this).children("div").stop().animate({"width":"100%"}, 100);
	}
},function(){
	if($(this).index() != prdNum) {
		$(this).css({"color":"#666"});
		$(this).children("div").stop().animate({"width":0}, 100);
	}
});
$(".prd_nav > li").eq(0).trigger("click");

for(var i=0; i<7; i++) {
	$(".prd_wrap").append($(".prd").eq(0).clone());
}

$(".prd").hover(function(){
	$(this).children(".prd_hover").stop().fadeIn(300);
	$(this).find(".prd_compare").find("div").stop().animate({"top":"-43px"}, 300);	
	if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight) {
		console.log("overflow");
		$(this).find(".prd_cont").children("div").stop().animate({"bottom":0}, 200);
		$(this).find(".prd_cont").children("div").click(function(){
			$(this).parent().css({"height":"auto"});
			$(this).hide(0);
		});
	}
	$(this).find(".prd_detail").children("ul").hover(function(){
		$(this).children(":first-child").stop().animate({"margin-top":"-38px"}, 200);
	}, function(){
		$(this).children(":first-child").stop().animate({"margin-top":0}, 200);
	});
}, function(){
	$(this).children(".prd_hover").stop().fadeOut(300);
	$(this).find(".prd_compare").find("div").stop().animate({"top":0}, 300);
	if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight) {
		$(this).find(".prd_cont").children("div").stop().animate({"bottom":"-20px"}, 200);
	}
});
$(".prd_hover_img").hover(function(){
	$(this).stop().animate({"opacity":1}, 200).css({"animation-name":"prdImg"});
}, function(){
	$(this).stop().animate({"opacity":0}, 200).css({"animation-name":"prdImgBack"});
});

$('[data-toggle="tooltip"]').tooltip(); 

$.ajax({
	url:"../json/prds.json",
	type: "post",
	dataType:"json",
	success: function(data) {

	},
	error: function(xhr, status, error) {
		console.log(xhr, status, error);
	}
});