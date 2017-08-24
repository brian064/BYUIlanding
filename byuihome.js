$(document).ready(main);

function main() {
  $(".theModal").hide();
  $(".navWrap").hide();
  $(".featured").hide();
  $(".behindSide").hide();
  $(".navWrap").slideDown(1000);
  $(".theModal").fadeIn(2000);
  $(".featured").fadeIn(2000);

  $(".closeMod").click(function() {
    $(".theModal").slideUp(500);
  })

  $("#ex").click(function() {
    $("html body").animate({
      scrollTop: $(".audience").offset().top
    }, 1000)
  })

  $("#ex2").click(function() {
    $("html body").animate({
      scrollTop: $(".audience").offset().top
    }, 1000)
  })

  $("#news").click(function() {
    $("html body").animate({
      scrollTop: $(".newsRoom").offset().top
    }, 1000)
  })

  $("#news1").click(function() {
    $("html body").animate({
      scrollTop: $(".newsRoom").offset().top
    }, 1000)
  })

  $(".burgerNav").click(function() {
    $(".sideBar").toggleClass("sideBar-active");
    $("body").toggleClass("noScroll");
    $(".behindSide").toggle();
  })

  $(".behindSide").click(function() {
    $(".sideBar").toggleClass("sideBar-active");
    $(".behindSide").hide();
  })

  var wHeight = $(window).height() - ($(window).height()*0.07); //get height of window

  $(".fullheight").css("height", wHeight); // set carousel container to full height

	//replace IMG with background images
	$("#featured .item img").each(function() {
		var imgSrc = $(this).attr("src");
		$(this).parent().css({"background-image": "url(" + imgSrc + ")"});
		$(this).remove();
	});

	//adjust height of .fullheight elements on window
	$(window).resize(function() {
		//wHeight = $(window).height(); //gets current height
    wHeight = $(window).height() - ($(window).height()*0.07);
		$(".fullheight").css("height", wHeight);
	});

}

/*function setBindings() {
  $(".nav a").click(function(e){
    var sectionID = e.currentTarget.id + "tra";

    $("html body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
}*/
