<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
};
</script>

<style>
    body {
        max-width: 72rem;
        margin: 0;
        height: 100%;
        background-color: #1d1f21;
        color: #c9cacc;
        font-weight: 400;
        font-size: 14px;
        font-family: "Menlo", "Meslo LG", monospace;
        line-height: 1.725;
        text-rendering: geometricPrecision;
        flex: 1;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        padding-right: 2rem;
        padding-left: 2rem;
    }
</style>
