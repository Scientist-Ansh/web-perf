import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';

const app = express();
const port = 4000;

app.use(compression());
app.use(
  serveStatic('dist', {
    maxAge: '100d',
    setHeaders: setCustomCacheControl,
  })
);

app.listen(port);

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader(
      'Cache-Control',
      'public, max-age=60,stale-while-revalidate=60'
    );
  }
}
