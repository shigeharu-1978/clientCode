var query = location.search;
var value = query.split('=');
var subVal = value[1].split('&');
console.log("おはようございます");
$('label#namae').text(decodeURIComponent(subVal[0]));
subVal = value[2].split('&');
$('label#mail').text(decodeURIComponent(subVal[0]));
$('label#tel').text(decodeURIComponent(value[3]));
