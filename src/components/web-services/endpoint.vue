<template>
    <div class="container endpoint">
        <div class="row">
            <div class="col-6 url">{{ endpoint.url }}</div>
            <div class="col-6 status" v-bind:class="{ 'aok': endpoint.status == 'SUCCESS', 'fail': endpoint.status == 'FAIL', 'loading': endpoint.status == 'INIT' }"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Endpoint',
    props: ['endpoint']
}
</script>
<style scoped>
.url {
    text-align: right;
    padding-right: 50px;
}

.status {
    text-align: left;
}

.status.aok:before
{
    content:'\2713';
    color:green;
}

.status.fail:before
{
    content:'\2715';
    color:red;
}

.status.loading:before
{
    content:'\2743';
    color:darkgoldenrod;
}
</style>