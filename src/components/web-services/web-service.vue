<template>
    <div class="web-service">
        <div class="name">{{ webService.name }}</div>
        <div class="description">{{ webService.description }}</div>
        <ul class="container endpoints">
            <endpoint-component :endpoint="endpoint" v-for="endpoint in webService.endpoints" v-bind:key="endpoint.id"></endpoint-component>
        </ul>
    </div>
</template>
<script>
import Endpoint from './endpoint'
export default {
    name: 'WebService',
    props: ['webService'],
    components: {
        'endpoint-component': Endpoint
    }
}
</script>
<style scoped>
.name {
    font-size: 1.5em;
    line-height: 2em;
    padding-right: 50px;
    font-weight: bold;
}

.info {
    margin-bottom: 1.5em;
}

.endpoints {
    margin-top: 1.5em;
    padding: 0;
    list-style: none;
}
</style>