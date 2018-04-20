//var showQ = document.getElementById("quote");

/*
function initAPI()
{
	loadFromAPI(function(response)
	{
		// Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		console.log(actual_JSON);
	}
);
}
*/

function loadFromAPI(callback)
{
	var quote = new XMLHttpRequest();
	quote.overrideMimeType("application/json");
	quote.open('GET', 'quotes.json', true); // Replace 'my_data' with the path to your file
	quote.onreadystatechange = function () {
		if (quote.readyState == 4 && quote.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(quote.responseText);
		}
	};
	quote.send(null);
}


function initAPI()
{
	loadFromAPI(function(response)
	{
		// Parse JSON string into object
		var quote;
		var quoteJSON = JSON.parse(response);
		quote = quoteJSON.toString();
		console.log(quoteJSON+"    "quote);
	}
);
}

function loadQuote(callback)
{
	var quote = new XMLHttpRequest();
	quote.overrideMimeType("application/json");
	quote.open('GET', 'quotes.json', true); // Replace 'my_data' with the path to your file
	quote.onreadystatechange = function ()
	{
		if (quote.readyState == 4 && quote.status == "200")
		{
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(quote.responseText);
		}
	};
	quote.send(null);
}
