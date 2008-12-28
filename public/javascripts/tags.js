/*
	tags.js
	
	version 1.0b [08.07.28] | nacho@yestoall.com
	
*/

function tag_add(cual,donde)
{
	var f = document.forms[0].tags;
	var d = f.value;

	if (d.search(cual)>=0)
	{
		d = d.replaceAll(", "+cual,"");
		d = d.replaceAll(cual,"");
		f.value = d;
	}
	else
	{
		f.value = (d=="") ? cual : d+", "+cual;
	}

	if (f.value.substring(0,2) == ", ")
	{
		f.value = f.value.substring(2);
	}
}
