<script>

export default {
    functional: true,
    render(h, { data, parent }) {
        console.log(parent.$store.state.loading);
        return parent.$store.state.loading > 0 // TODO Use Getter instead of directly accessing state
            ? h('bounce-loader')
            : h('router-view', data);
    },
};

</script>
