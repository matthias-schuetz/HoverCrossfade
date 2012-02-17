/**
 * jquery.hovercrossfade.js
 * A jQuery plugin that replaces the default CSS mouse hover of a link with an image crossfade hover.
 * Matthias Schuetz, http://matthiasschuetz.com
 *
 * Copyright (C) Matthias Schuetz
 * Free to use under the MIT license
 */

$.fn.hoverCrossfade = function(options) {
	options = $.extend({
		normalBackgroundPositions: [],
		hoverBackgroundPositions: [],
		fadeInTime: 300,
		fadeOutTime: 600
	}, options);
	
	var crossfadeImageId = "crossfade-image" + new Date().getTime(),
	crossfadeAreaId = "crossfade-area" + new Date().getTime(),
	objectCount = 0;

	$(this).each(function(){
 		$(this).css({
			backgroundPosition: options.normalBackgroundPositions[objectCount]
		});

		$("<div>", {
			id: crossfadeImageId,
			css: {
				position: "absolute",
				top: 0,
				left: 0,
				width: $(this).width(),
				height: $(this).height(),
				"padding": $(this).css("padding-top") + " " + $(this).css("padding-right") + " " + $(this).css("padding-bottom") + " " + $(this).css("padding-left"),
				"background-image": $(this).css("background-image"),
				"background-repeat": "no-repeat",
				"background-position": options.hoverBackgroundPositions[objectCount],
				opacity: 0
			},
			html: $(this).html()
		}).appendTo($(this));

		$("<div>", {
			id: crossfadeAreaId,
			css: {
				position: "absolute",
				top: 0,
				left: 0,
				width: $(this).width(),
				height: $(this).height(),
				"padding": $(this).css("padding-top") + " " + $(this).css("padding-right") + " " + $(this).css("padding-bottom") + " " + $(this).css("padding-left")
			}
		}).appendTo($(this));

		$(this).find("#" + crossfadeAreaId)
			.mouseover(function(){
				$(this).parent().find("#" + crossfadeImageId).stop().animate({
						opacity: 1
					},
					options.fadeInTime);
			})
			.mouseout(function(){
				$(this).parent().find("#" + crossfadeImageId).stop().animate({
						opacity: 0
					},
					options.fadeOutTime);
			});

		if (objectCount < options.normalBackgroundPositions.length) objectCount++;
	});
}