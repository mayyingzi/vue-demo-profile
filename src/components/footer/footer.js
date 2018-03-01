// TODO设置设置footer的显示与否，当前选中icon更新

let countFlag = 0;

export default {
    name: 'VueFooter',
    data() {
        return {
            // 当前选中tab ，/：商品； cart: 求购； order： 订单； center：我的
            nowItem: '',
            isShow: false
        };
    },
    computed: {
        curRoterP() {
            return this.$route.path;
        }
    },
    created() {
        this.updateNowItem();
    },
    watch: {
        curRoterP() {
            this.updateNowItem();
        }
    },
    methods: {
        updateNowItem() {
            const RegPath = /^(\/zIndex|\/order|\/cart|\/center)$/;
            const initItem = this.curRoterP;
            if (RegPath.test(initItem)) {
                this.isShow = true;
                this.nowItem = initItem;
            } else {
                this.isShow = false;
            }
        },
        goPath(config) {
            // this.nowItem = config.item;
            if (this.curRoterP === config.path && !countFlag) {
                return;
            }
            countFlag++;
            this.$router.replace(config.path);
        }
    }
};
