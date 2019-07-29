module.exports = {

    onCreate(input) {
        this.state = {
            msg: 'Hello ' + input.name
        };
    },

};