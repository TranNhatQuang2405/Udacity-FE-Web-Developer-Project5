const app = require('./server')

const port = 8000;

const server = app.listen(port, function listening() {
    console.log(`Server Running on localhost: ${port}`);
});

module.exports = server;