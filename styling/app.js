new Vue({
    el: '#app',
    data: {
        title: 'testing!',
        isColorChange: false,
        color: 'blue',
        redOnly: 'red',
        smallSize: 'small',
    },
    computed: {
        changeColor: function(){
            return {
                green: this.isColorChange
            };
        }
    },
});