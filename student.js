// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"
// var date= {
//     year:2016,
//     month:01,
//     day: 21
// }
// n="name"
// date.year
// date.month
// p{ n }

// var: = 0;
// var x= 3.75;
// var l[i,x,s];
// var p= {
// name:Daniel
// email:"dbergey@friendscentral.org"
// } var ret= d.year:
// if ( d.month<10){
//     ret=ret +'0' d.month
// } =else {
// }

var showPerson= 
function (p) {
return p.name +' <'+p.email+'>'
}




//Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
//Output: "1970-01-31T12:59:59" Note  the T between date and time
// var date= {
// year:2016,
// month:01,
// day: 21
//  }
// n="name"
// date.year
// date.month
// p{ n}

//  var: = 0;
//  var x= 3.75;
//  var l[i,x,s];
//  var p= {
// name:Daniel
//  email:"dbergey@friendscentral.org"
//  } var ret= d.year:
// if ( d.month<10){
// ret=ret +'0' d.month
//  } =else {
//  }
// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)
var compareInts= 
function (x, y) {
 if  (x<y){
  return "LT"}
     else if(x==y) { 
        return "EQ";
     } else if    (x>y) {
  return "GT"
  
}
}

// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"
var compareDates= function (x, y)
{
 if  (x.year  <  y.year )     {
  return "LT" 
 } else if    (x.year > y.year ) {
           return "GT"
  } 
   if  (x.month  <  y.month ){
  return "LT"
   }
    else if    (x.month > y.month ) {
  return "GT"
   }if (x.day < y.day){
   return "LT"
   }if (x.day > y.day){
   return "GT"
   }
  if  (x.hour  <  y.hour ){
  return "LT"}
   if    (x.hour > y.hour ) {
 return "GT"}
 if  (x.minute  <  y.minute ){
  return "LT"
  } if  (x.minute  > y.minute ){
    return "GT"
   
  }else if(x.minute == y.minute ) { 
        return "EQ";
    } if    (x.second > y.second ) {
  return "GT"
  }if  (x.second  <  y.second ){
  return "LT"
  }else if(x.second == y.second ) { 
        return "EQ";
   
}
}






// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)
var elementOf= function (x, y)
if  (x[0].toUpperCase() === x [0] )								{
	return true
// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email


// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag




// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody
