
var myTemplate= document.getElementById("pageTemplate").innerHTML;
var compile= Handlebars.compile(myTemplate);
var compiledHTML =compile(data);

document.getElementById("studentsContent").innerHTML+= compiledHTML

