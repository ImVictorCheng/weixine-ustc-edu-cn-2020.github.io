
  $(function () {

      $('#menu').metisMenu();

	  window.setTimeout(function(){
		  $('[data-dismiss="alert"]').alert('close');
	  },10000);


  });




$(window).on("load resize",function  () {
	
	if ($(this).width()<767) {
		$("body").addClass('menu-hide')
	} else{
		$("body").removeClass('menu-hide')
		$("body").removeClass('menu-show')
	}
	
	var wh = $(window).height();
	var h = $(".header").innerHeight();
	
	
	$(".page-wrap").css("height", wh - h + "px");
	$(".treebox").css("height" , wh - h - 30 + "px");
	
})


$(".nav-menu").click(function  () {
$("body").toggleClass("menu-show")
})
$(".menu-close").click(function  () {
$("body").removeClass("menu-show")
})


/*日期*/

// $('.datetimepicker').datetimepicker({
//     format: 'yyyy-mm-dd hh:ii',
//     language: 'zh-CN',
//
// });