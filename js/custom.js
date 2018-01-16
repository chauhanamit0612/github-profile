"use strict";
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(".toggle-panel-btn").on("click", function(){
    $(this).toggleClass("clicked");
    $(this).parent().find(".toggle-panel").toggleClass("hide")
})
$(document).ready(function(){
    $("#stickyTab").sticky({topSpacing:0});
    $("#stickyTabRight").sticky({topSpacing:70});
    $("#stickyProfile").sticky({topSpacing:0});
    
    $('.header-select .form-control').on('change', function (e) {
	    $('.sm-tabs li a').eq($(this).val()).tab('show');
	});
})
$(window).scroll(function(){
    var topHeight1 = $(".img-profile").height() + $(".p-name").height() + $(".user-name").height() + 30;
    if ( $(this).scrollTop() > topHeight1 ) {
        $('.profile-mini-card').css("display", "table")
        $('.visiable-item').addClass('show-item');
        $('#header').css("display", "block")
        if ( $(this).scrollTop() >= topHeight1 + 100 ) {
            $('.visiable-item-btn').addClass('show-item');
        } else {
            $('.visiable-item-btn').removeClass('show-item');
        }
    } else {
        $('.profile-mini-card').css("display", "none")
        $('#header').css("display", "none")
        $('.visiable-item').removeClass('show-item');
    }
});
$(function () {

			function randomDate(start, end) {
				var date = new Date(+start + Math.random() * (end - start));
				return moment(date).format('YYYY-MM-DD');
			}

			var events = ( Math.random() * 200 ).toFixed(0);
			var data = [];
			for (var i = 0; i < events; i++ ) {
				data.push({
					count: parseInt( ( Math.random() * 200 ).toFixed(0) ),
					date: randomDate( moment().subtract(1, 'year').subtract(5,'months').format('x'), moment().format('x') )
				});
			}

			$("#heatmap").CalendarHeatmap(data, {
                lastMonth: moment().month(),
                labels: {
					days: true,
				},
                tooltips:{
					show: true
				},
                legend: { 
                    show: true,
                    align: "top"
	           }
            });
		});