<template>
  <div class="main-outer">
    <summary-component></summary-component>
    <hr />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-outer {
  border: 1px solid darkorange;
}
</style>

