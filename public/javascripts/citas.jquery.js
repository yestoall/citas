
// corners

function citas_corners()
{
	var settings = 
	{
	    tl			: { radius: 8 },
	    tr			: { radius: 8 },
	    bl			: { radius: 8 },
	    br			: false,
	    antiAlias	: true,
	    autoPad		: false,
	    validTags	: ["div"]
	};
	$(".cita_listado").corner(settings);
}

// botones

function citas_botones()
{
	$('.btn').each
	(
		function()
		{
			var b = $(this);
			var tt = b.text() || b.val();
			if ($(':submit,:button',this)) 
			{
				b = $('<a>').insertAfter(this). addClass(this.className).attr('id',this.id);
				$(this).remove();
			}
			b.text('').css({cursor:'pointer'}). prepend('<i></i>').append($('<span>').
			text(tt).append('<i></i><span></span>'));
		}
	);
	
	$('.btn').click
	(
		function()
		{ 
			$(this).parents('form').submit(); 
		}
	);
}

