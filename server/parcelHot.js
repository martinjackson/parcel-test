require("babel-core/register");
require("babel-polyfill");

const Bundler = require('parcel-bundler');


// How To Use:
//    app.use(parseHot(port, '../src/index.js', {outDir: './public'}));

module.exports = function parcelHot(port, file='../src/index.js', options={outDir: './public'}) {

  const bundler = new Bundler(file, options);

  bundler.once('buildEnd', ()=> {  
    console.log(`Ready for browser to view http://localhost:${port} -- vscode debugger "launch localhost" ...`);    
  });

  return bundler.middleware()
}
