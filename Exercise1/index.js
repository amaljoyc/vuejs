new Vue({
    el: '#exercise',
    data: {
        name: 'Amal',
        age: '29',
        anImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    },
    methods: {
        random: function() {
            return Math.random();
        }
    }
});