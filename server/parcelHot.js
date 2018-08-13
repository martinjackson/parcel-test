require("babel-core/register");
require("babel-polyfill");

const opn = require('opn');
const Bundler = require('parcel-bundler');


const openInBrowser = async (url, browser) => {
  try {
    const options = typeof browser === 'string' ? {app: browser} : undefined;

    await opn(url, options);
  } catch (err) {
    console.error(`Unexpected error while opening in browser: ${browser}`);
    console.error(err);
  }
}

// How To Use:
//    app.use(parseHot(port, '../src/index.js', {outDir: './public'}));

module.exports = function parcelHot(port, file='../src/index.js', options={outDir: './public'}) {

  const bundler = new Bundler(file, options);

  bundler.once('buildEnd', ()=> {  
    openInBrowser(`http://localhost:${port}`);  
  });

  return bundler.middleware()
}
