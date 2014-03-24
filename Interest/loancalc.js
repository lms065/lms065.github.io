function calculate_payments(btn)
{ 

	var form = btn.form;
        var price = Number(form.P.value);
        var down  = Number(form.D.value);
        var arate = Number(form.I.value);
        var paynumb = Number(form.N.value);

        if ( isNaN(price) || isNaN(down) || isNaN(arate) || isNaN(paynumb) )
        {
            alert("All values entered must be numbers.");
            return;
        }

        var loanAmount = price - down;
        var irate = (arate / 100) / 12;      

	var monthly = loanAmount / ( ( 1 - Math.pow( 1 + irate, - paynumb ) ) / irate );
		
		var totint = (price * irate * paynumb);
        
		
	alert('The montly payment is: $' + monthly.toFixed(2) + '\nTotal Interest paid is: $' + totint.toFixed(2));

}
