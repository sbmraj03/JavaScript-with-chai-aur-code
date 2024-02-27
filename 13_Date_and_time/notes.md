# toLocaleString
- 
The toLocaleString() method is used to convert a date to a string, using the specified options and locale formatting conventions. The options parameter allows you to specify which components of the date should be included in the string representation.

- var date = new Date();
var options = { weekday: 'long' };

var formattedDate = date.toLocaleString('default', options);
console.log(formattedDate);


# date.now()
- Date.now() is a static method of the Date object in JavaScript, used to return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch). It provides a convenient way to obtain the current timestamp.

- var timestamp = Date.now();
console.log(timestamp);
