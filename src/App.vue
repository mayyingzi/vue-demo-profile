<template lang="html">
    <div id="app">        
        <!-- <router-view></router-view> -->
        <div class="main-box" :class="transitionClass">
            <transition 
                :mode="transitionMode"
                :name="transitionName">
                <navigation>
                    <router-view class="contentMain"></router-view>
                </navigation>
            </transition>
        </div>
        
    </div>
</template>

<script lang="babel">
    // import _ from 'lodash';
    // import loading from './components/domMinx/loading';

    export default {
        name: 'vue-demo',
        data() {
            return {
                view: true,
                transitionClass: '',
                transitionName: '',
                transitionMode: 'in-out'
            };
        },
        components: {},
        computed: {},
        beforeCreate() {
            this.$navigation.on('back', () => {
                this.routeFadeOut();
            });
            this.$navigation.on('replace', () => {
                this.routeFadeIn();
            });
            this.$navigation.on('forward', () => {
                this.routeFadeIn();
            });
            this.$navigation.on('refresh', () => {
                this.routeFadeIn();
            });
        },
        mounted() {},
        methods: {
            routeFadeIn() {
                // loading.show();
                // console.log('打开新的页面');
                this.transitionName = 'slideIn';
                this.transitionMode = 'in-out';
                this.transitionClass = 'routePush';
            },
            routeFadeOut() {
                // console.log('回退页面');
                this.transitionName = 'slideOut';
                this.transitionMode = 'in-out';
                this.transitionClass = 'routePop';
            },
        }
    };
</script>

<style src="@/assets/styles/app.styl" lang="stylus"></style>
