const http = require('http');
let data = [];
http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            let finalData = JSON.parse(body);
            data.push(finalData);
            console.log(data);
            res.statusCode = 200;
            res.end('Data inserted');
        });
    }
    if (req.method === 'GET') {
        if (Request.url === "/getstudentbyrollno") {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                if (body) {
                    let parsed = JSON.parse(body);
                    if (parsed.rollno) {
                        let result = data.find(s => s.rollno === parsed.rollno);
                        res.end(JSON.stringify(result || {}));
                        return;
                    }
                }
                res.end(JSON.stringify(data));
            });
        } else {
            res.end(JSON.stringify(data));
        }
    }
    if (req.method === "DELETE") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            if (body) {
                let parsed = JSON.parse(body);
                if (parsed.rollno) {
                    data = data.filter(s => s.rollno != parsed.rollno);
                    res.end('Deleted successfully');
                    return;
                }
            }
            res.end('No rollno provided');
        });
    }
    if (req.method === "PUT") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            let parsed = JSON.parse(body);
            let index = data.findIndex(s => s.rollno === parsed.rollno);
            data[index] = parsed;
            res.end('Updated successfully');
        });
    }

}).listen(3000, () => {
    console.log('Server is running on port 3000');
});
