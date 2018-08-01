
module.exports = function parcelHot(port) {

  const file = '../src/index.js'; // Pass an absolute path to the entrypoint here
  const options = {      // See options section of api docs, for the possibilities
  outDir: './public',
  // defaults when process.env.NODE_ENV !== 'production'
  //
  // watch: true,      //  whether to watch the files and rebuild them on change
  // cache: true,      // Enabled or disables caching, defaults to true
  }; 

  const Bundler = require('parcel-bundler');

  // Initialize a new bundler using a file and options
  const bundler = new Bundler(file, options);

  console.log("Parcel Bundler activated.");

  const opn = require('opn');
  const openInBrowser = async (url, browser) => {
    try {
      const options = typeof browser === 'string' ? {app: browser} : undefined;

      await opn(url, options);
    } catch (err) {
      console.error(`Unexpected error while opening in browser: ${browser}`);
      console.error(err);
    }
  }

  openInBrowser(`http://localhost:${port}`);

  // pass Parcel all other requests over your express server
  return bundler.middleware()
}
  // How To Use:   app.use(parseHot(port));
