var btn = document.getElementById('btn');
var content = document.getElementById('content');

var speech = new webkitSpeechRecognition();

speech.lang = "ja";

btn.addEventListener( 'click' , function() {
  speech.start();
} );

speech.addEventListener( 'result' , function( e ) {
  console.log(e);
} );
