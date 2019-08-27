var template = require('./template.marko');

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.marko(template, {
        promise: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I am mengmeng!')
            }, 30000);
        })
    });
};