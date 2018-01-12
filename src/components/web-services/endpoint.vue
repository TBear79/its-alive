<template>
    <div class="endpoint">
        <div>{{ endpoint.url }}</div>
        <div>{{ endpoint.status }}</div>
    </div>
</template>
<script>
export default {
    name: 'Endoint',
    props: ['endpoint']
}
</script>
<style scoped>
</style>