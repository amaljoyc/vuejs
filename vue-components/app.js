Vue.component('my-cmp', {
  data: function() {
    return {
      title: 'Hello World!',
    }
  },
  template: '<p>{{title}}</p>',
});

new Vue({
  el: '#app'
})

const cmp1 = {
  data: function() {
    return {
      title: 'local app 1',
    }
  },
  template: '<p>{{title}}</p>',
}

const cmp2 = {
  data: function() {
    return {
      title: 'local app 2',
    }
  },
  template: '<p>{{title}}</p>',
}

new Vue({
  el: '#local-app1',
  components: {
    'app1': cmp1,
  }
})

new Vue({
  el: '#local-app2',
  components: {
    'app2': cmp2,
  }
})