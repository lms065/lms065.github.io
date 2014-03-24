function is_age()
{ 
	var form = document.getElementById("myForm");
        var age = Number(form.age.value);
		var other = Number(form.other.value);
		
		var min = (age / 2) + 7;
        var max = 2 * (age - 7);
		var old = (other - max) / 2;
		var yng = 2 * (min - other);
    
	if (age < 18 & other > 19)
		{
			alert("It is illegal to date this person in Louisiana! :(")
		}
	else if (age >= 14)
	{
	
		
		if (other < min)
		{ 
			alert('This person is too young \nbut you could date them if they were ' + yng.toFixed(1) +' years older.');
		}
		
		else 
			if (other > max)
			{
				alert('This person is too old \nbut you could date them if you were ' + old.toFixed(1) +' years older.');
			}
			else
				{
					alert('You can date this person');
				}
		
			alert('The youngest you can date is: ' + min.toFixed(1) + '\nThe oldest you can date is: ' + max.toFixed(1));
	}
	
	else
	{
		alert("You are too young to date")
	}
}
