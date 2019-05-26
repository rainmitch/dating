
export function cookieExists (varName)
{
	var parts = document.cookie.split (';');
	
	for (var i = 0; i < parts.length; i++)
	{
		var pieces = parts[i].split ('=');
		if (pieces[0] === varName)
		{
			return true;
		}
	}
	
	return false;
}

function validCookieName (name)
{
	for (var i = 0; i < name.length; i++)
	{
		if (!(
				(name[i] >= 'a' && name[i] <= 'z') ||
				(name[i] >= 'A' && name[i] <= 'Z') ||
				(name[i] >= '0' && name[i] <= '9') ||
				(name[i] === '_')
			 ))
		{
			return false;
		}
	}
	
	return true;
}

export function setCookie (varName, data, expiration)
{
	if (!validCookieName (varName))
	{
		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
			console.log ("setCookie: Illegal varName, '" + varName + "'!");
		return false;
	}
	
	var encodedData = encodeURIComponent(data);
	// encode any unsavory charactors such as ';'
	
	var cookieData = varName + "=" + encodedData;
	
	if (expiration != null)
	{
		cookieData += "; expires=" + expiration;
	}
	
	cookieData += "; path=/;";
	
	document.cookie = cookieData + document.cookie;
}


export function setCookieSeconds (varName, data, seconds)
{
	var date = new Date ();
	date.setTime (date.getTime () + (seconds*1000));
	
	return setCookie (varName, data, date.toGMTString ());
}

export function getCookie (varName)
{
	var parts = document.cookie.split (';');
	
	for (var i = 0; i < parts.length; i++)
	{
		var pieces = parts[i].split ('=');
		if (pieces[0] === varName)
		{
			return pieces[1];
		}
	}
	throw "Unable to get cookie";
}

export function deleteCookie (varName)
{
	setCookie (varName, "", "Thu, 01 Jan 1970 00:00:01 GMT");
}
