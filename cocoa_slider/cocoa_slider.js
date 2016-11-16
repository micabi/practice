$(function() {
	  var _lock = 0;
	  var _slide_index = 5;
	  var _slide_location = 0;

	  $("#slides .slide").hover(function() {
	    _lock = 1;
	    var _target_index = $(".slide_wrapper").index($(".slide_wrapper",this));

	    $(".slide_wrapper",this).addClass("active");

	    if (_slide_index != _target_index) {
	      $(".slide_wrapper").eq(_slide_index).removeClass("active");
	    }


	    _slide_index = _target_index;
	  },function() {
	  });

	  function AutoSlide() {
	    if (1 == _lock) {
	      return false;
	    }
	    setTimeout(function() {
  	    if (1 == _lock) {
  	      return false;
  	    }
  	    $(".slide_wrapper").removeClass("active");
  	    var _index = 0;
  	    if (5 == _slide_index) {
  	      _slide_location = 1;
  	    }
  	    if (0 == _slide_index) {
  	      _slide_location = 0;
  	    }
  	    if (0 == _slide_location) {
  	      _index = _slide_index+1;
  	    } else {
  	      _index = _slide_index-1;
  	    }

  	    $(".slide_wrapper").eq(_index).addClass("active");
  	    _slide_index = _index;
  	    AutoSlide();
  	  }, 2000);

	    // setTimeout('AutoSlide()', 3000);
	  }
	  //setTimeout(AutoSlide(), 3000);
	   AutoSlide();
	});