require('dotenv').config();
console.log('process env', process.env);

const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n* Server Running on PORT ${PORT} *\n`);
});