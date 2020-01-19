'use strict';

const template = require('./template.marko');

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.marko(template, {
        promise: new Promise((resolve) => {
            setTimeout(() => {
                resolve('Async result after 30s!')
            }, 30000);
        })
    });
};
