module.exports = {

    onMount() {
        console.log('component-browser on mount');
    },

    increment() {
        this.state.count++;
        this.state.nest.count++;
    }

};