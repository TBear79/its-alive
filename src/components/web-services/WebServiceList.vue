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