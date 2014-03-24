function is_leap()
{
	var yr=document.getElementById('yr').value;
	
	if(yr<1583)
	{
		alert("Enter a year after 1582.");
		return false;
	}
	
	if (yr%4 == 0)
	{
		if (yr%100 == 0)
		{
				if (yr%400 != 0)
					{
					alert(""+ yr + " is not a leap year");
					return "false";
					}
				else
					{
					alert(""+ yr + " is a leap year");
					return "true";
					}
		}
		else
		{
			alert(""+ yr +" is a leap year");
			return "true";
		}
	}
	else
	{
		alert(""+ yr +" is not a leap year");
		return "false";
	}
}

function focus() /* This function is courtesy of William Watson */
{
	document.getElementById('yr').focus();
}