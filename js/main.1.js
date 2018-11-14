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
/****카테고리0 **
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



/***** 카테고리 1 *****/
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
});
$.ajax({
	url : "../json/cate2.json",
	type : "get",
	dataType : "json",
	data : {},
	success : function(data){
		var style = 'style="width:' + ( 60 / data.result.length + '%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul ' + style + '>';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:'+data.result[i].main.color+'"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++)	{

				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:'+data.result[i].sub[j].color+'"></div>';
				html += '</div>'; 
				html += '<span class="number">'+ data.result[i].sub[j].num +'</span>';
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
	url:"../json/cate3.json",
	type:"get",
	dataType :"json",
	data:{},
	success : function(data){
		var txt =''; 
		var html ='';
		txt = '<a href="#" class="recent"  style="width:40%;"><span>RECENT POSTS</span></a>'
		$("#modal2").append(txt);
		for(var i=0; i<data.result.length; i++){
		html = '<ul style="width:40%;" class="posts">';
		html += '<li class="left" style="width:50%; float:left; padding-top:1rem; box-sizing:border-box;">';
		html += '<img src="../img/'+data.result[i].img+'" alt="icon">';
		html += '</li>';
		html += '<li class="right" style="width:50%; float:right;">';
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
		console.log(xhr, status, error);}
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
	url:"../json/cate4.json",
	type:"get",
	dataType :"json",
	data:{},
	success : function(data){
		// var style = 'style="width:' + ( 100/data.result.length +'%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul style="width:25%">';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:'+data.result[i].main.color+'"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++)	{
				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:'+data.result[i].sub[j].color+'"></div>';
				html += '</div>'; 
				html += '<span>'+ data.result[i].sub[j].num +'</span>';
				html += '</li>';	
			}
			html += '</ul>';
			$("#modal3").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);}
});

$.ajax({
	url:"../json/cate5.json",
	type:"get",
	dataType :"json",
	data:{},
	success : function(data){
		// var style = 'style="width:' + ( 100/data.result.length +'%') + ';"';
		var html = '';
		for (var i = 0; i < data.result.length; i++) {
			html = '<ul style="width:25%">';
			html += '<li class="title">';
			html += '<a href="' + data.result[i].main.link + '">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip main-point" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:'+data.result[i].main.color+'"></div>';
			html += '</div>';
			html += '</li>';
			for (var j = 0; j < data.result[i].sub.length; j++)	{
				html += '<li class="cont">';
				html += '<a href="' + data.result[i].sub[j].link + '">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip sub-point" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:'+data.result[i].sub[j].color+'"></div>';
				html += '</div>'; 
				html += '</li>';	
			}
			html += '</ul>';
			$("#modal4").append(html);
		}
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);}
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