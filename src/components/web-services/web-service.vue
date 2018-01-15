<template>
    <div class="container web-service">
        <div class="row info">
            <div class="col-6 name">{{ webService.name }}</div>
            <div class="col-6 description">{{ webService.description }}</div>
        </div>
        <ul class="row endpoints">
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
ul {
    list-style: none;
}

.name {
    text-align: right;
    font-size: 1.5em;
    padding-right: 50px;
}

.description {
    padding: 0.5em;
    text-align: left;
}

.info {
    margin-bottom: 1.5em;
}
</style>