(function($){
	var quizkickSlider, inTransit = false, mainVideo, volueIsFading = false, volumeFading, hidden = "hidden";

	$(window).load(function(){
		$("body").addClass("in-focus");
		// Standards:
		if (hidden in document)
		    document.addEventListener("visibilitychange", onchange);
		else if ((hidden = "mozHidden") in document)
		    document.addEventListener("mozvisibilitychange", onchange);
		else if ((hidden = "webkitHidden") in document)
		    document.addEventListener("webkitvisibilitychange", onchange);
		else if ((hidden = "msHidden") in document)
		    document.addEventListener("msvisibilitychange", onchange);
		// IE 9 and lower:
		else if ('onfocusin' in document)
		    document.onfocusin = document.onfocusout = onchange;
		// All others:
		else
		    window.onpageshow = window.onpagehide 
		        = window.onfocus = window.onblur = onchange;

		var v = 'visible', h = 'hidden',
			evtMap = { 
				focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h 
			};

		function onchange (evt) {
		    evt = evt || window.event;
		    if (evt.type in evtMap) {
		        // document.body.className = evtMap[evt.type];
		    }
		    else {
		        if(this[hidden]) {
					$("body").removeClass("in-focus");
		        	if(quizkickSlider.currSlideId == 0) {
		        		mainVideo.pause();
		        	}
		        } else {
		        	$("body").addClass("in-focus");
		        	if(quizkickSlider.currSlideId == 0 && mainVideo.currentTime < 32) {
		        		mainVideo.play();
		        	}
		        }
		    }
		}

		quizkickSlider = $('#quizkick-showcase').data('royalSlider');
		mainVideo = $("#main-video video")[0];

		if($("body").hasClass("in-focus")) {
			mainVideo.play();

			setTimeout(function(){
				if($("body").hasClass("in-focus")) {
					mainVideo.play();
				}
			},250);
		}

		$("#main-video video").bind('timeupdate', onTimeUpdate);

		quizkickSlider.ev.on('rsBeforeAnimStart', function(event) {
			inTransit = true;
		});

		quizkickSlider.ev.on('rsAfterSlideChange', function(event) {
			inTransit = false;

			updateControls(quizkickSlider.currSlideId);

			if(quizkickSlider.currSlideId != 0) {
				mainVideo.pause();
			} else {
				mainVideo.play();
			}
		});
	});

	function onTimeUpdate(){
		if(mainVideo.currentTime >= 32) {
			mainVideo.pause();
			$("#replay").fadeIn(300);
		} else if(mainVideo.currentTime >= 29 && volueIsFading == false) {
			volueIsFading = true;

			volumeFading = setInterval(function(){
				mainVideo.volume -= 0.00975;
			},30);
			setTimeout(function(){
				clearInterval(volumeFading);
			},3000);
		}
	}

	$(document)
		.on("click","#quizkick-controls .control:not(.active)",function(){
			if(inTransit == false) {
				goToSlide($(this).attr("data-to-slide"));
			}
		})
		.on("click","#replay",function(){
			volueIsFading = false;
			mainVideo.volume = 1;

			$(this).fadeOut(300);
			mainVideo.currentTime = 0;
			mainVideo.play();
		})
		.on("mouseenter",".iphone-video-container > svg > path",function(){
			$(this).parents(".iphone-video-container").addClass("onHover");
			$(this).parent().prev("video")[0].play();
		})
		.on("mouseleave",".iphone-video-container > svg > path",function(){
			$(this).parents(".iphone-video-container").removeClass("onHover");
			$(this).parent().prev("video")[0].pause();
		});

	function goToSlide(slideID){
		updateControls(slideID);

		quizkickSlider.goTo(slideID);
	}

	function updateControls(controlID) {
		$("#quizkick-controls .control.active").removeClass("active");
		$('#quizkick-controls .control[data-to-slide="' + controlID + '"]').addClass("active");		
	}
})(jQuery);