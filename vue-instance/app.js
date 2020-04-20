Vue.component("hello-world", {
  template: "<p>HelloWorld!</p>",
});

const vm1 = new Vue({
  el: "#app1",
  data: {
    title1: "Hello!",
  },
  methods: {
    showMyRef: function () {
      this.$refs.myRefButton.innerText = "show-me!";
    },
  },
});

setTimeout(() => {
  vm1.title1 = "changed by timer!";
}, 3000);

const vm2 = new Vue({
  el: "#app2",
  data: {
    title2: "World!",
  },
  methods: {
    onChange: function () {
      vm1.title1 = "changed by button!";
    },
  },
});

const vm3 = new Vue({
  template: "<h1>Hello!</h1>",
});
vm3.$mount("#app3");
