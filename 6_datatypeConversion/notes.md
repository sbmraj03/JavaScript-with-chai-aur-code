- "33" ==> 33
- "33abc" => NaN
- true ==> 1 && false => 0
  
- score= "33abc"
  let valInNum= Number(score)
  $ but printing these no. will give us an error $


# Problem in typecasting in JS
$ let num = Number(null);
console.log(num); // Output: 0 $

This behavior is consistent with JavaScript's type conversion rules. In JavaScript, null is considered falsy and does not represent a numeric value. When converting null to a number, JavaScript coerces it to 0.
