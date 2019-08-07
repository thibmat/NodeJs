// Recuperation du module HTTP
const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');
/**
 * Envoie le fichier selectionné et le renvoie dans la réponse
 * @param res
 * @param filename
 */
function render(res, filename){
    fs.readFile(
        filename,
        {
            encoding: "utf8",
            flag: 'r'
        },
        (err, datas) => {
                res.end(err || datas);
        }
    )
};
const server = http.createServer(
        (req, res)=> {
            const route = url.parse(req.url);
            const path = route.pathname.toLowerCase();
            const params = queryString.parse(route.query);
            if (path === '/')
            {
                render(res, __dirname + '/templates/index.html');

            } else if (path === '/blog')
            {
                const page = params.page ? params.page : 1;
                res.end(`<h1>Blog Page : ${page}</h1>`);
            } else {
                res.statusCode = 404;
                res.end('<h1>Page 404</h1>');
            }
            //res.end();
        }
);
server.listen(3000, ()=>{console.log('serveur web lancé sur http://localhost:3000')});