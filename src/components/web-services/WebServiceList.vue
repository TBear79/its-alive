<template>
    <ul id="web-services">
        <li v-for="webService in webServices" v-bind:key="webService.id">
            <web-service-component :webService="webService"></web-service-component>
        </li>
    </ul>
</template>
<script>
import WebService from './web-service'
import store from '../../store'
export default {
    name: 'WebServiceList',
    components: {
        'web-service-component': WebService
    },
    computed: {
        webServices: function () {
            return store.state.webServices
        }
    }
}
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0 2em;
    }

    li {
        margin-top: 1.5em;
        margin-left: 0
    }
</style>