<template>
    <div id="summary">
            <span class="icon" v-bind:class="{ 'aok': aok, 'fail': !aok }"></span>
            <span class="text">
                <template v-if="aok">"{{SUMMARY_SUCCESS}}"</template>
                <template v-else>"{{SUMMARY_FAIL}}"</template>
            </span>
    </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Summary',
  computed: {
        aok: function () {
            return store.state.webServices.reduce((acc, cur) => { return acc.concat(cur.endpoints) }, []).findIndex(x => x.status === 'FAIL') === -1
        },
        SUMMARY_SUCCESS: function () {
            return store.state.text.SUMMARY_SUCCESS
        },
        SUMMARY_FAIL: function () {
            return store.state.text.SUMMARY_FAIL
        }
    }
}
</script>

<style scoped>
#summary 
{
    text-align: center;
}

.icon, .text {
    vertical-align: middle;
}

.text {
    font-size: 2em;
    line-height: 1.5em;
    width: 8em;
    display: inline-block;
}

.icon {
    font-size: 8em;
    margin: auto auto;
}

.icon.aok:before
{
    content:'\2713';
    color:green;
}

 .icon.fail:before
{
    content:'\2715';
    color:red;
}
</style>
