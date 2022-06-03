# Weekly Project 1 - 
[Deployed link](https://web-perf.vercel.app/)

The following tools have been used in the weekly project.

## Parcel

Parcel is a bundler which is used to achieve the following things.
- Minification and concatenation of the html,css and js files.(automatic)
- versioning of the css, images and js files via hashing.(automatic)
- resizing of the images.
- automatically building the website(build script added in package.json file)
  Example - 
  ``` 
  <img src="image.jpeg?width=500" alt="test image" />
  ```

## ExpressJs
Express is a nodejs web app framework which remove a lot of boiler plate code required to make a server. It also supports middlewares which can intercept request and do some tasks. It has been used to achieve the following tasks.
- Create and run a server.
- To use the middleware compression which compresses the file using gzip.
- To use the middleware serveStatic and replace the manual static handler which serves sattic files.

## serve-static
A middleware used to serve static files.
- It handles the incoming requests and sending back the respective file.
- It adds the conditional request headers(Etag and last-modified) and handles conditional requests.
- It also adds the cache control headers with long max-age for static files.
- Cache header for html file is manually overriden for short max-age and with stale-while-revalidate.

Example - 
```
var app = express()

app.use(serveStatic(path.join(__dirname, 'public'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))

app.listen(3000)

// This function can be used to override the headers(used for the html file by checking the mime type)
function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
```

## Vercel
This is used for the deployement of the website to include the CDNs for the website.

