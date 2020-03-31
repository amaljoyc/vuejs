new Vue({
    el: '#app',
    data: {
        title: 'Hello!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        count: 0,
        count2: 0,
        x: 0,
        y: 0,
        mytext: 'two way binding',
        i: 0,
        watchMe: 0,
    },
    methods: {
        sayHello: function() {
            return this.title;
        },
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        increment: function() {
            this.count++;
        },
        incrementBy: function(step, event) {
            console.log(event);
            this.count2 += step;
        },
        getCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Hello!')
        },
        nonComputedMethod: function() {
            console.log("non computed method called")
        }
    },
    computed: {
        getI: function() {
            console.log("computed method called")
            return this.i;
        },
        computedMethod: function() {
            console.log("computed method rendered only once")
        }
    },
    watch: {
        watchMe: function() {
            vm = this;
            setTimeout(function() {
                vm.watchMe = 0;
            }, 2000
            )
        }
    }
});