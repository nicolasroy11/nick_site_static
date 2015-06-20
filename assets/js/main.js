//Parallax Effect
$(function() 
{
	//cache the window object
	var $window = $(window);
	
	//parallax background effect
	$('section[data-type="background"]').each(function()	//Function that will apply to each HTML5 type with datatype="background" in the document
	{
		var $bgobj = $(this);	//background object = the section with data-type = background - so this section
		
		$(window).scroll(function()
		{
			//scroll the background at var speed
			//the yPos is negative because we're scrolling it up
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			//put together our final background position
			var coords = '50% ' + yPos + 'px';
			
			//Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		});	//end window scroll
	});
});