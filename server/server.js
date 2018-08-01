var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    parcelHot = require('./parcelHot');

const defPort = (process.env.NODE_ENV !== 'production') ? '1234' : '3001';
var port = parseInt(process.argv[2] || defPort, 10);
if (port < 1000) {
   console.log('Operating on Port '+port+' requires priveledge');
   }

app.set('port', port);

//////////////////////////////////////////////////////////////

var home = path.join(__dirname, 'public');
app.use(express.static(home));

// needed for when a form posts a JSON encoded body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log("Server listening on port " + app.get('port')+" serving "+home);
});

// -----------------------------------------------------------------------------
//    API
// -----------------------------------------------------------------------------

// Human viewable
app.get('/api/hello/:name', function (req, res) {
  var now = new Date().toLocaleString();
  res.send(`Hello <strong>${req.params.name}</strong> on <em>${now}</em> from <strong>${req.headers.host}</strong>`);
});

// formated for React component to consume
app.get('/api/echo/:name', function (req, res) {
  const now = new Date();
  const date = {y: now.getFullYear(), m: now.getMonth()+1, d:now.getDate()}
  const stuff = {name: req.params.name, host: req.headers.host, date, now: now.toLocaleString()};

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end( JSON.stringify(stuff) );
});

// -----------------------------------------------------------------------------
//  Hot Loader (if in development mode)
// -----------------------------------------------------------------------------

if (process.env.NODE_ENV !== 'production') {

  // pass Parcel all other requests over your express server
  app.use(parcelHot(port));

  console.log("Parcel Bundler activated.");
}
