const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
	  const parsedUrl = url.parse(req.url);
	  let pathname = path.join(PUBLIC_DIR, parsedUrl.pathname);
	  
if (parsedUrl.pathname === '/') {
	    pathname = path.join(PUBLIC_DIR, 'index.html');
	  }

	  fs.readFile(pathname, (err, data) => {
		      if (err) {
			            res.statusCode = 404;
			            res.end('File not found');
			          } else {
					  const ext = path.parse(pathname).ext;
					        const mimeTypes = {
							        '.html': 'text/html',
							        '.js': 'text/javascript',
							        '.css': 'text/css'
							      };
					        
					        res.setHeader('Content-type', mimeTypes[ext] || 'text/plain');
					        res.end(data);
					      }
		    });
});

server.listen(PORT, () => {
	  console.log(`Server running on http://localhost:${PORT}`);
});
