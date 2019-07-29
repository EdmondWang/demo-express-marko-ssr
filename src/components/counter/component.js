module.exports = {

    onCreate(input) {
        console.log('on Create');
        this.state = {
            count: 0,
            nest: {
                count: 10
            },

            hasNestedCount: input.hasNestedCount
        };
    },

    onInput() {
        console.log('on Input');
    },

    onRender() {
        console.log('on Render');
    },

    OnDestroy() {
        console.log('on Destroy');
    }

}