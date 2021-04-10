<template>
    <footer id="footer">
        <div class="footer-left">
            Copyright &copy; 2021 Martin Heinz
        </div>
        <div class="footer-right">
            <nav>
                <ul>
                    <BaseFooterItem v-for="item in items"
                                    v-bind:url="item.url"
                                    v-bind:value="item.value"
                                    v-bind:key="item.id">
                    </BaseFooterItem>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>

import BaseFooterItem from '@/components/BaseFooterItem.vue';

export default {
    name: 'BaseFooter',
    components: { BaseFooterItem },
    props: {
        items: Array,
    },
};
</script>

<style>
    #footer {
        position: absolute;
        bottom: 0;
        margin-bottom: 10px;
        width: 100%;
        color: #666;
        vertical-align: top;
        text-align: center;
        font-size: 11px;
    }
    #footer ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #footer li {
        display: inline-block;
        margin-right: 15px;
        border-right: 1px solid #666;
        vertical-align: middle;
    }
    #footer li a {
        margin-right: 15px;
    }
    #footer li:last-child {
        margin-right: 0;
        border-right: 0;
    }
    #footer li:last-child a {
        margin-right: 0;
    }
    #footer a {
        color: #666;
        text-decoration: underline;
        background-image: none;
    }
    #footer a:hover {
        color: #858585;
    }
    #footer .footer-left {
        height: 20px;
        vertical-align: middle;
        line-height: 20px;
    }
    @media (min-width: 39rem) {
        #footer {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            margin-bottom: 20px;
        }
        #footer .footer-left {
            align-self: flex-start;
            margin-right: 20px;
        }
        #footer .footer-right {
            align-self: flex-end;
        }
    }

    #footer-post {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 5000000;
        width: 100%;
        border-top: 1px solid #666;
        background: #212326;
        transition: opacity 0.2s;
    }
    #footer-post a {
        background: none;
        color: inherit;
        text-decoration: none;
    }
    #footer-post a.icon {
        background: none;
    }
    #footer-post a.icon:hover {
        color: #d480aa;
    }
    #footer-post #nav-footer {
        padding-right: 1rem;
        padding-left: 1rem;
        background: #323539;
        text-align: center;
    }
    #footer-post #nav-footer a {
        color: #2bbc8a;
        font-size: 1em;
    }
    #footer-post #nav-footer a:hover {
        background-image: linear-gradient(transparent, transparent 5px, #2bbc8a 5px, #2bbc8a);
        background-position: bottom;
        background-size: 100% 6px;
        background-repeat: repeat-x;
    }
    #footer-post #nav-footer ul {
        display: table;
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
    }
    #footer-post #nav-footer ul li {
        display: inline-table;
        padding: 10px;
        width: 20%;
        vertical-align: middle;
    }
    #footer-post #actions-footer {
        overflow: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        width: 100%;
        text-align: center;
        white-space: nowrap;
    }
    #footer-post #actions-footer a {
        display: inline-block;
        padding-left: 1rem;
        color: #2bbc8a;
    }
    #footer-post #share-footer {
        padding-right: 1rem;
        padding-left: 1rem;
        background: #323539;
        text-align: center;
    }
    #footer-post #share-footer ul {
        display: table;
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
    }
    #footer-post #share-footer ul li {
        display: inline-table;
        padding: 10px;
        width: 20%;
        vertical-align: middle;
    }
    @media screen and (min-width: 500px) {
        #footer-post-container {
            display: none;
        }
    }
</style>
