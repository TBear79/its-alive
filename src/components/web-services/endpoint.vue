<template>
    <li class="row endpoint" v-bind:class="{ 'aok': endpoint.status == 'SUCCESS', 'fail': endpoint.status == 'FAIL', 'loading': endpoint.status == 'INIT' }">
        <div class="col-3 status hidden-medium-up" v-bind:class="{ 'aok': endpoint.status == 'SUCCESS', 'fail': endpoint.status == 'FAIL', 'loading': endpoint.status == 'INIT' }"></div>
        <div class="col-9 url">{{ endpoint.url }}</div>
        <div class="col-3 status hidden-sm" v-bind:class="{ 'aok': endpoint.status == 'SUCCESS', 'fail': endpoint.status == 'FAIL', 'loading': endpoint.status == 'INIT' }"></div>
    </li>
</template>
<script>
export default {
    name: 'Endpoint',
    props: ['endpoint']
}
</script>
<style scoped>
.endpoint {
    border-bottom: 1px solid gray;
    padding: 1em 0;
}

.endpoint.aok {
    color: green;
}

.endpoint.fail {
    color: red;
}

.endpoint.loading {
    color: darkgoldenrod;
}

.status {
    text-align: center;
    font-size: 2em;
}

.status.aok:before
{
    content:'\2713';
    color:green;
}

.status.fail:before
{
    content:'\2715';
    color:darkgoldenrod;
}

.status.loading:before
{
    content:'\2743';
    color:darkgoldenrod;
}

@media only screen and (min-width: 45em) {
    .endpoint {
        line-height: 4em;
    }
}
</style>