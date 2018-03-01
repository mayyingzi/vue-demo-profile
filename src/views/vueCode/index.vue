<template lang="html">
    <div class="vuePage">
        <p class="item">{{testA}}</p>
        <p>{{objFromArr}}</p>
        <div class="mainAni" id="tesAni">测试i移动</div>
        <div class="clickMe" id="addNewObserver">addNewObserver</div>
        <div class="clickMe" id="addNewObserverContainer">addNewObserverContainer</div>
        <div class="clickMe" >
            <label for="mainCkeckbox">
                mainCkeckbox
                <input id="mainCkeckbox" type="checkbox">
            </label>
        </div>
    </div>
</template>

<script lang ="babel">
import {EatC} from './testDesign';
import {car, ControlCheckbox, AddedCheckboxs} from './jsMOdel';

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
        this.testAni();
        console.log('---当前工厂模式');
        console.log(car);
        this.testObserver();
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
        // 动画实例测试
        testAni() {
            let start = null;
            const element = document.getElementById('tesAni');
            // element.style.position = 'absolute';

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                element.style.left = `${Math.min(progress / 10, 200)} px`;
                if (progress < 2000) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        },
        testObserver() {
            // main text 观察者模式
            const addBtn = document.getElementById('addNewObserver');
            const constainer = document.getElementById('addNewObserverContainer');
            const controlCheckboxDom = document.getElementById('mainCkeckbox');
            const controlCheckbox = new ControlCheckbox();
            controlCheckboxDom.onclick = () => {
                controlCheckbox.notify(controlCheckboxDom.checked);
            };
            addBtn.onclick = () => {
                const check = document.createElement('input');
                check.type = 'checkbox';
                // 新增每一个都应该实现观察者
                console.info(controlCheckbox.observers);
                check.update = AddedCheckboxs.prototype.update;
                controlCheckbox.addObserver(check);
                constainer.appendChild(check);
            };
        }
    }
};
</script>
<style lang="stylus">
@import '../../assets/styles/mixins'
.vuePage
    font-size rem(24)
    .item
        padding-top rem(10)
    .mainAni
        font-size rem(30)
        width 80%
        height rem(500)
        background-color #ff4a6d
        color #fff
    .clickMe
        font-size rem(36)
        color #ff4d6a
        padding-top rem(20)
        border 1px solid #ff4d6a
        box-sizing border-box
        width 100%
        margin-bottom rem(20)
        input 
            height rem(40)
            width rem(40)

</style>

