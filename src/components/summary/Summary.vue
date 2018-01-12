<template>
  <div id="summary" class="container">
      <div class="row">
        <div class="col-6 icon" v-bind:class="{ 'aok': aok, 'fail': !aok }"></div>
        <div class="col-6 text">
            <div v-if="aok">All services are running. Life is good!</div>
            <div v-else>PANIC!!!!</div>
        </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Summary',
  computed: {
        aok: function () {
            return store.state.webServices.reduce((acc, cur) => { return acc.concat(cur.endpoints) }, []).findIndex(x => x.status === 'FAIL') === -1
        }
    }
}
</script>

<style scoped>
#summary .icon {
    font-size: 4em;
}


#summary .icon.aok:before
{
    content:'\2713';
    color:green;
}

#summary .icon.fail:before
{
    content:'\2715';
    color:red;
}

#summary {
    border: 5px solid yellow;
}

.row {
    border: 5px solid blue;
}

div[class^=col] {
    border: 5px solid red;
}

.icon, .text {
    border: 5px solid red;
}
</style>
