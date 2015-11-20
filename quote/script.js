$(document).ready(function(){

var quote = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. -Albert Einstein",
"Science without religion is lame, religion without science is blind. -Albert Einstein", "The important thing is not to stop questioning. Curiosity has its own reason for existing. -Albert Einstein",
"Reality is merely an illusion, albeit a very persistent one. -Albert Einstein", "Peace cannot be kept by force; it can only be achieved by understanding. -Albert Einstein"];
var min = 0;
var max = 5;
$(".quote").html(quote[0])
$("button").click(function(){
  final = Math.floor(Math.random() * (max - min)) + min
  displayQuote = quote[final];
$(".quote").html(displayQuote)
});
});
