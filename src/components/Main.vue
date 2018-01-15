<template>
  <div id="main">
    <summary-component></summary-component>
    <div class="separator"></div>
    <webservices-component></webservices-component>
  </div>
</template>

<script>
import store from '../store'
import Summary from './summary/Summary'
import WebServiceList from './web-services/WebServiceList'

export default {
  name: 'Main',
  components: {
    'summary-component': Summary,
    'webservices-component': WebServiceList
  },
  beforeCreate: function () {
        store.dispatch('initApp')
  }
}
</script>
<style scoped>
.separator {
  margin: 4em 0; 
}

.main {
  margin: 0;
  padding: 0;
}
</style>
