<template>
  <div>
    <p>Current status: {{ status }}</p>
    <button @click="changeStatus">change status!</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            status: 'Sleeping...'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Woke up!'
        }
    }
};
</script>
