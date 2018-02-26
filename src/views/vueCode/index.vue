<template lang="html">
    <div class="vuePage">
        <p class="item">{{testA}}</p>
        <p>{{objFromArr}}</p>
    </div>
</template>

<script lang ="babel">
import {EatC} from './testDesign';

export default {
    name: 'vueCode',
    componets: {},
    data() {
        return {
            title: '测试标题',
            testA:[
                {
                    op: '90'
                }
            ],
            objOne: {
                name: '相互效应',
                inner: {
                    ok: 1,
                    ok2: 2
                }
            },
            objAfter: {},
            textArr:[
                {
                    text: 'me',
                    no: 'id 测试'
                },
                {
                    text: 'me2',
                    no: 'id 测试2'
                }
            ],
            objFromArr:{},
            testModules:[
                {
                    staticKeys:'show one me1'
                },
                {
                    staticKeys:'show one me2'
                }
            ]
        };
    },
    activated() {
        this.resetHeader();
        // this.testA = this.zToArray(this.testA, 0);
        // this.objAfter = this.zExtend(this.objAfter, this.objOne);
        this.objFromArr = this.zToObject(this.textArr);
        console.log(this.zGenStaticKeys(this.testModules));
        const ok = new EatC();
        console.log(ok.buy());
    },
    methods: {
        resetHeader() {
            this.$emit('setHeader', {
                title: this.title
            });
        },
        zToArray(list, start) {
            start = start || 0;
            let i = list.length - start;
            const ret = new Array(i);
            while (i--) {
                ret[i] = list[i + start];
            }
            return ret;
        },
        // Mix properties init target object
        zExtend(to, _from) {
            Object.entries(_from).forEach(([key, value]) => {
                to[key] = value;
            });
            // for (const key in _from) {
            //     if (Object.prototype.hasOwnProperty.call(_from, key)) {
            //         to[key] = _from[key];
            //     }
            // }
            return to;
        },
        // Merge an Array of Objects into a single Object
        zToObject(arr) {
            const res = {};
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    this.zExtend(res, arr[i]);
                }
            }
            return res;
        },
        // Generate a static keys string from compiler modules
        zGenStaticKeys(modules) {
            return modules.reduce((keys, m) => keys.concat(m.staticKeys || []), []).join(',');
        },
        // check if two values are loosely equal that is if they are plain object
        // , do they have the same shape
        zLooseEqual() {
            // too many
        },
        // 设计模式
    }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mixins'
.vuePage
    font-size rem(24)
    .item
        padding-top rem(10)
</style>

