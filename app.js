// app.js
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.send('OK');
});

app.get('/fib', (req, res) => {
    let n = parseInt(req.query.id);
    if (isNaN(n) || n < 0) return res.status(400).send("Invalid input");

    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    res.send(arr[n].toString());
});

module.exports = app;
