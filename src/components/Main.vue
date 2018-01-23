<template>
  <div id="main">
    <summary-component></summary-component>
    <div id="details-link">
      <a href="#" target="blank">View details</a>
    </div>
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

#main {
  margin: 0 auto;
  padding: 0 0 1em 0;
  max-width: 1024px;
}

#details-link {
  text-align: center;
}

#details-link a {
  color: lightgray;
}

@media only screen and (min-height: 25em) {
    #details-link {
      display: none;
    }
}
</style>
<style>
@media only screen and (max-height: 25em) {
  #web-services {
        display: none;
  }  
}
</style>
