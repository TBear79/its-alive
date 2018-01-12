<template>
    <div class="web-service">
        <div>{{ webService.name }}</div>
        <div>{{ webService.description }}</div>
        <ul class="endpoints">
            <li v-for="endpoint in webService.endpoints" v-bind:key="endpoint.id">
                <endpoint-component :endpoint="endpoint"></endpoint-component>
            </li>
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
</style>