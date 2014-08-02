$(document).ready(function() {
	var currentMonth;
	var MonthArray = $('.month');

	initDateSlide();

	$('.sidebar ul li a').click(function(e) {
		e.preventDefault();
	});
	$('a.button').click(function(e) {
		e.preventDefault();
	});
	function initDateSlide() {
		MonthArray.each(function() {
			$(this).siblings().hide();
			$(this).click(function() {
				switchMonthSlide($(this));
			})
		});
		currentMonth = $('.month').first();
		openMonthSlide(currentMonth);


	}

	function closeMonthSlide(currentMonth) {
		currentMonth.removeClass('currentMonth');
		currentMonth.siblings().hide(800);
	}

	function openMonthSlide(currentMonth) {
		currentMonth.addClass('currentMonth');
		currentMonth.siblings().show(800);
	}

	function switchMonthSlide(currentMonth) {
		if (!currentMonth.hasClass('currentMonth')) {
			MonthArray.each(function() {
				if ($(this).hasClass('currentMonth')) {
					closeMonthSlide($(this));
				}
			});
		} 
		if (currentMonth.hasClass('currentMonth')) {
			closeMonthSlide(currentMonth);
		} else {
			openMonthSlide(currentMonth);
		}

	}
});