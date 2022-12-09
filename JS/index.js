  (function() {
    $('.btn').click(function() {
      $(this).toggleClass('active');
      return $('.box').toggleClass('open');
    });
  
  }).call(this); 

  // Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};