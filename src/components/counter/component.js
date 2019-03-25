module.exports = {

    onCreate() {
        console.log('on Create');
        this.state = {
            count: 0,
            nest: {
                count: 10
            }
        };
    },

    onInput() {
        console.log('on Input');
    },

    onMount() {
        console.log('on Mount');
    },

    onRender() {
        console.log('on Render');
    },

    onUpdate() {
        console.log('on Update');
    },

    OnDestroy() {
        console.log('on Destroy');
    },

    increment() {
        this.state.count++;
        this.state.nest.count++;
    },

}