const https = require('https');

const options = {
    hostname: 'https://m.ctrip.fat29.qa.nt.ctripcorp.com/webapp/vacations/custom/annualMemory?id=1690725&screenshot=1&sign=AAEAAQAJYWR2aXNvcmlkdAQuGJYB-PL-969mun2ayPBaJjPgLHJJFKlSMgyiDUE%3D-tripsign&slide=2',
    port: 443,
    path: '/',
    method: 'GET',
    rejectUnauthorized: false  // 不验证证书
};

const req = https.request(options, res => {
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});

req.end();
