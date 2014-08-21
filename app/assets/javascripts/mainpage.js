$(document).ready(function() {
	var currentMonth;
	var MonthArray = $('.month');
	initDateSlide();
	$('.sidebar ul li a').click(function(e) {
		e.preventDefault();
	});
	$('#wrapper_record_content').css("width", $(document).width() - 720).css('height', $('#date_sidebar').height());
	var widthLong = Math.round(($(document).width() - 220) * 2 / 3);
	// alert($(document).width());
	// $('#record_content').css("width",Math.round((($(document).width()-700)/$(document).width())*100));
	var widthShort = Math.round(($(document).width() - 220) * 1 / 3);


	 
	$('#task_list').click(function() {
		$(this).animate({
			width: widthLong
		});
		$('#record_content').animate({
			width: widthShort,
			marginLeft: 0
		});
	});
	$('#record_content').click(function() {
		$(this).animate({
			width: widthLong,
			marginLeft: 0
		});
		$('#task_list').animate({
			width: widthShort
		});

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

function remove_fields(link) {
	$(link).prev("input[type=hidden]").value = "1";
	$(link).parent().parent().hide(800);

}

function add_fields(link, association, content) {

	var new_id = new Date().getTime();
	var regexp = new RegExp("new_" + association, "g")
	var newRecord = $(content.replace(regexp, new_id));
	newRecord.hide();
	newRecord.insertAfter($(link).parent());
	newRecord.show(1000);
	$(".file").change(function(event) {
		var target = $(this).prev().children('img')
		var input = $(event.currentTarget);
		var file = input[0].files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			image_base64 = e.target.result;
			target.attr('src', image_base64);
		};

		reader.readAsDataURL(file);
	});
}