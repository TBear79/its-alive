<template>
  <div id="summary" class="container">
      <div class="row">
        <div class="col-6">
            <div class="icon" v-bind:class="{ 'aok': aok, 'fail': !aok }"></div>
        </div>
        <div class="col-6">
            <div class="text">
                <span>
                    <template v-if="aok">"All services are running. Life is good!"</template>
                    <template v-else>"PANIC!!!!"</template>
                </span>
            </div>
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
.icon {
    font-size: 8em;
    float: right;
    margin-right: 0.5em;
}


.col-6 {
    display: table;
    height: 200px;
}

.icon, .text {
    display: table-cell;
    vertical-align: middle;
}

.text span {
    float:left;
    font-size: 2em;
    line-height: 1.5em;
    width: 6em;
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
</style>
