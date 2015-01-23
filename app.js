var express = require('express'),
  app = express();



function sleep(milliseconds) {
  var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
		      break;
		  }
	}
}


  app.get('/', function(req, res){
		sleep(10);
	    res.send('Ola Mundo');
  });	  
  var server = app.listen(3000);
  console.log('Servidor Express iniciado na porta %s', server.address().port);
