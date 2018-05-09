function AddDigit(dig)
{
	var x = document.getElementById('display').value;
	if(dig!=0||dig==' ')
	{
		if(x.length==0)
		{
			alert("Code must begin with 0");
			document.getElementById('display').value = "";
			return;
		}
	}
	document.getElementById('display').value += dig;
}

function Send()
{
	var inp;
	inp = document.getElementById('display').value;
	if(inp == '0 4855')
	{
		alert("HULK is really angry and here to help you");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 78737626')
	{
		alert("SUPERMAN is here, though he lost to batman he can still help");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 8467')
	{
		alert("THOR is here with the stormbreaker (SPOILER ALERT)");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 76246')
	{
		alert("ROBIN is here");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 4766626')
	{
		alert("Tony Stark is here in his suit IRONMAN");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 4467874337')
	{
		alert("GHOSTRIDER is here to play with fire");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 22782462637422')
	{
		alert("CAPTAIN AMERICA is here with the beard ;)");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 35274')
	{
		alert("FLASH. Make sure he helps you before he runs away");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 965837463')
	{
		alert("Though dead in movies but somehow WOLVERINE is here to help you");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 228626')
	{
		alert("The Dark Knight, The Silent Guardian Batman is here. You are safe :)");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 25233')
	{
		alert("BLADE is here");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 7426866')
	{
		alert("PHANTOM is here");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 774337626')
	{
		alert("As Tony would say kid - SPIDERMAN is here to help");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 2522594369')
	{
		alert("BLACK WIDOW is here to help you. Don't worry about hulk now ;)");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 4355269')
	{
		alert("HELLBOY is here");
		document.getElementById('display').value = "";
		return;
	}
	else if(inp == '0 78647437')
	{
		alert("PUNISHER is here");
		document.getElementById('display').value = "";
		return;
	}
	else
	{
		alert("No superhero for this code");
		document.getElementById('display').value="";
		return;
	}
}

function onPressBackSpace()
{
	var temp = document.getElementById('display').value;
	temp = temp.substring(0,temp.length-1);
	document.getElementById('display').value = temp;
}