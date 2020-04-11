new Vue({
    el: '#app',
    data: {
        show: true,
        myList: ['one', 'two', 'three'],
    },
    methods: {
        toggleShow: function() {
            this.show = !this.show
        }
    }
});