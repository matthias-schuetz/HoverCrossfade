jQuery HoverCrossfade
=====================

## A jQuery plugin that replaces the default CSS mouse hover with an image crossfade hover

The HoverCrossfade plugin for jQuery is made for changing default hover effects of links or buttons. It's based on the "background-image" attribute and simply crossfades between two images. When applying the plugin to an element, two additional containers are created in order to make the effect work. One container contains the hover image while the other element acts as clickable area. You can set the delays for fading in and out in the options of the plugin. The plugin was made under the condition that if JavaScript is turned off, the usual CSS hover effects will show up.

## Demo
<a href="http://matthias-schuetz.github.com/jquery.hovercrossfade/">Click here for a live demonstration.</a>

## Usage

Just load the file "jquery.hovercrossfade.js" together with the jQuery library. You can apply the crossfade effect to any item you want.

### Requirements

In order to make the crossfade plugin work, target elements need to have some certain attributes. An example for a link:

```css
#element {
	position: relative;
	width: 200px;
	height: 46px;
	padding: 24px 0 0 0;
	background-image: url(background_sprite.png);
	background-repeat: no-repeat;
	background-position: 0 0;
}

#element:hover {
	background-position: 0 -70px;
}
```

It's important that your target elements do have these attributes (except "padding" which is optional but supported). The plugin is based on "background-position" so your button background has to be a sprite. Take a look at the live demo to see a proper setup.

### Defaults

```javascript
/*
 * HoverCrossfade plugin usage
 * 
 * @param Array normalBackgroundPositions List of the source background positions
 * @param Array hoverBackgroundPositions List of the target background positions
 * @param Number fadeInTime Delay for fading hover image in (default 300)
 * @param Number fadeOutTime Delay for fading hover image out (default 600)
 */

$("#element").hoverCrossfade({
	normalBackgroundPositions: [],
	hoverBackgroundPositions: [],
	fadeInTime: 300,
	fadeOutTime: 600
});
```

### Examples

```html
<a href="#" id="element1">Link text</a>
<a href="#" id="element2">Link text</a>
```

```javascript
$(document).ready(function(){

	// Activate HoverCrossfade plugin for one element

	$("#element1").hoverCrossfade({
		normalBackgroundPositions: ["0 0"],
		hoverBackgroundPositions: ["0 -70px"],
		fadeInTime: 150,
		fadeOutTime: 350
	});


	// Activate HoverCrossfade plugin for more elements

	$("#element1, #element2").hoverCrossfade({
		normalBackgroundPositions: ["0 0", "0 0"],
		hoverBackgroundPositions: ["0 -70px", "0 -45px"],
		fadeInTime: 150,
		fadeOutTime: 350
	});

});
```

## Notes

Normally this kind of effect should be a task for CSS3. But currently it's not possible to achieve a crossfade effect for background images. Only solid background colors can be crossfaded in CSS3. I will update the example page of this plugin when a proper CSS3 solution is possible.

## License

HoverCrossfade is released under the MIT license.