<template>
  <div class="container">
    <my-header></my-header>
    <hr />
    <server></server>
    <hr />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Server from './Server.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'my-header': Header,
        'server': Server,
        'my-footer': Footer,
    }
};
</script>
