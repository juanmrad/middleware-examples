const express = require('express');
const app = express();

function testParameters(number) {
    return number;
}

function testAdd50(number) {
    return number + 50;
}

function myMiddleware50(req, res, next) {
    req.params.number = testAdd50(req.params.number);
    return next();
}

app.get('/route1/:number', (req, res) => {
    return res.send(testParameters(req.params.number));
});

app.get('/route2/:number', myMiddleware50, myMiddleware50, (req, res) => {
    return res.send(testParameters(req.params.number));
});


app.listen(3000, function() {
    console.log("My API is now listening on port 3000...");
});