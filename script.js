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

function decode(c)
{
	var superhero_codes = {78737626:"SUPERMAN", 8467:"THOR", 76246:"ROBIN", 4766626:"IRONMAN", 4467874337:"GHOSTRIDER", 22782462637422:"CAPTAINAMERICA", 35274:"FLASH", 965837463:"WOLVERINE", 228626:"BATMAN", 25233:"BLADE", 7426866:"PHANTOM", 774337626:"SPIDERMAN", 4855:"HULK", 2522594369:"BLACKWIDOW", 4355269:"HELLBOY", 78647437:"PUNISHER"};
	if((c in superhero_codes))
	{
		return superhero_codes[c];
	}
	else
	{
		return -1;
	}
}


function Send()
{
	var inp;
	inp = document.getElementById('display').value;
	var out = decode(inp.substring(2,inp.length));
	if(out==-1)
	{
		alert("No superhero for this code");
		document.getElementById('display').value="";
		return;	
	}
	else
	{
		alert("Superhero found "+out);
		document.getElementById('display').value = "";
		return;
	}
}

function onPressBackSpace()
{
	var temp = document.getElementById('display').value;
	temp = temp.substring(0,temp.length-1);
	document.getElementById('display').value = temp;
}