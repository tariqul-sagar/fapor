(function(){




	$('.filter').on('click','li',function(e){

			e.preventDefault();


			$('.filter li').removeClass('active');
			$(this).addClass('active');
			
			// init Isotope
		      var $grid = $('.projects').isotope({
		        itemSelector: '.item',
		        layoutMode: 'fitRows'
		      });
		      // filter items on button click
		      $('.rc_wrapper').on( 'click', 'li', function() {
		        var filterValue = $(this).attr('data-filter');
		        $grid.isotope({ filter: filterValue });
		      });

	});

	$('.recent_card').mouseenter(function(){
		$(this).find('.rc_img').css({'top':'-100%'});
		$(this).find('.rc_overlay').css({'top':'0'});
	}).mouseleave(function(){
		$(this).find('.rc_img').css({'top':'0'});
		$(this).find('.rc_overlay').css({'top':'100%'});
	});

	

})(jQuery);




