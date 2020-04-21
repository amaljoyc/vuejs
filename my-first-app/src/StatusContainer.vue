<template>
    <div>
        <my-status v-for="s in 5" :key="s"></my-status>
    </div>
</template>

<script>
import Status from './Status.vue'

export default {
    components: {
        'my-status': Status,
    }
}
</script>