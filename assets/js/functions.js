$('ul.sub-sub-menu').parent('li').addClass("parent");

$('ul.usa-nav-primary li a').keypress(function(event) {
    if (event.which === 32 || event.which === 13) {
    $(":focus").click();	
    }
});

      $(".usa-js-mobile-nav--active ul.usa-nav-primary li.main-parent.parent.focus-within").click(function(e){
	  	   e.preventDefault();
      	   $(".plus-minus", this).closest().toggleClass("plus minus");
           $("ul.sub-menu", this).closett().toggle();
      });


(function(window, document){
	'use strict';
	var slice = [].slice;
	var removeClass = function(elem){
		elem.classList.remove('focus-within');
	};
	var update = (function(){
		var running, last;
		var action = function(){
			var element = document.activeElement;
			running = false;
			if(last !== element){
				last = element;
				slice.call(document.getElementsByClassName('focus-within')).forEach(removeClass);
				while(element && element.classList){
					element.classList.add('focus-within');
					element = element.parentNode;
				}
			}
		};
		return function(){
			if(!running){
				requestAnimationFrame(action);
				running = true;
			}
		};
	})();
	document.addEventListener('focus', update, true);
	document.addEventListener('blur', update, true);
	update();
})(window, document);

$(window).resize(function(event) {
    if ($(window).width() > 950) {
		$('body').removeClass('usa-js-mobile-nav--active');
		$('#navigation').removeClass('is-visible');
		$('.usa-overlay.is-visible').remove();
				event.preventDefault();
		}
		else if ($(window).width() < 950) {
			$('.usa-menu-btn').click(function () {
				$('.usa-overlay').addClass('is-visible');
		event.preventDefault();
			})	
			}
});

$('.usa-nav-primary li.main-parent').click(function () {
	$(this).find('ul.sub-menu').toggle();
});

$(".bell").click(function() {
	$("#alert-logic").toggle();
});

//$(function(){
//  	  $('#navigation a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//});

$(function(){
    var current = window.location.pathname;
    $('#navigation li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
			}
						})
		if (current == '/preview/gsa/fedramp-gov/2.0PartnerPages/') {
				$("#navigation ul li a").removeClass("active");
//		        $("#navigation ul li a").first().addClass("active");
		    }
});


/// scroll to top button js ////

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// End Scroll to Top //


$(function(){
    $('#navigation ul.sub-menu li a.active').closest('ul.usa-nav-primary li.main-parent').addClass('primary-active');
});


/*

$(function () {
    $(".blog-card").slice(0, 4).addClass('display');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".blog-card:hidden").slice(0, 2).addClass('display');
        if ($(".blog-card:hidden").length == 0) {
           $("#loadMore").remove();
        } else {
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 0);
        }
    });
});

*/

$(function () {
    $(".blog-card").slice(0, 4).addClass('display');
    $(".load-more-bkg").on('click', function (e) {
        e.preventDefault();
        var firstDisplay = $(".blog-card:hidden").slice(0, 2) .addClass('display');  
//        $(".blog-card:hidden").slice(0, 2).addClass('display');
        if ($(".blog-card:hidden").length == 0) {
           $(".load-more-bkg").remove();
        } else {
            $('html,body').animate({
                scrollTop: $(firstDisplay).offset().top
//                scrollTop: $(this).offset().top  
            }, 1500);
        }
    });
});  



//
//$(window).resize(function() {
// if ($(window).width() < 960) {
//        $('usa-logo-text a img').attr("src", "/assets/img/logo-main-fedramp.png");
//}
// if ($(window).width() > 960) {
//        $('usa-logo-text a img').attr("src", "/assets/img/logo-mobile-fedramp.png");
//}
//});
//$(document).ready(function() {
//    $(".nav").accessibleDropDown();
//});
//
//$.fn.accessibleDropDown = function () {
//    var el = $(this);
//
//    /* Make dropdown menus keyboard accessible */
//
//    $("a", el).focus(function() {
//        $(this).parents("li").addClass("hover");
//    }).blur(function() {
//        $(this).parents("li").removeClass("hover");
//    });
//}

//window.onload = function () {
//    document.getElementById('button').onclick = function () {
//        document.getElementById('modal').style.display = "none"
//    };
//};

//$(window).load(function() {
//  // if no cookie
//  if ($.cookie('alert') != "true") {
//    $(".post-count").show();
//    $(".bell").click(function() {
//      $(".post-count").slideUp("slow");
//      // set the cookie for 24 hours
//      var date = new Date();
//      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
//      $.cookie('alert', "true", {
//        expires: date
//      });
//    });
//  }
//});
//
//window.cookieconsent.initialise({
//  container: document.getElementById("cookieconsent"),
//  palette:{
//    popup: { background: "#1aa3ff" },
//    button: { background: "#e0e0e0" },
//  },
//  revokable: true,
//  onStatusChange: function(status) {
//    console.log(this.hasConsented() ?
//    'enable cookies' : 'disable cookies');
//  },
//  "theme": "edgeless"
//});