<template>
    <div class="barMain">
        <div class="bar">
            <div class="item" 
                v-for="(item, index) in curTabVal"
                :class="{'actived':index===actTab}"                
                :key="index">
                <div 
                    @click.stop="toggleDetail(index)"
                    class="tabown">
                    <p class="text">{{item.title}}</p>
                </div>
                <!-- tab对应列表 -->
                <div class="tabDetail">
                    <div 
                        v-if="index > 0"
                        class="detailMain">
                        <div class="mainCell">
                            <div class="cellItem"
                                v-if="item.key==='shelvesGoodsStatus'"
                                :class="{'selected': item.cur===-1}"
                                @click="selectTabCell({
                                    cur:-1,
                                    title:'所有状态',
                                    tabIndex: index})"
                            >
                                <p>所有状态</p>
                            </div>
                            <div class="cellItem"
                                v-if="item.key==='pigTypeMap'"
                                :class="{'selected': item.cur===-1}"
                                @click="selectTabCell({
                                    cur:-1,
                                    title:'所有品类',
                                    tabIndex: index})"
                            >
                                <p>所有品类</p>
                            </div>
                            <div class="cellItem"
                                v-for="(cellI, cellKey) in listData[item.key]"
                                :key="cellKey"
                                :class="{'selected': item.cur===cellKey}"
                                @click="selectTabCell({
                                    cur:cellKey,
                                    title:cellI,
                                    tabIndex: index})"
                            >
                                <p>{{cellI}}</p>
                            </div>
                        </div>
                    </div>

                    <div 
                        v-else
                        class="detailMain">
                        <div class="mainPar clos">
                            <div class="lineCell slected">位置</div>
                            <div class="lineCell">所有店铺</div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div 
            @click="toggleDetail(-1)"
            :class="{'show': actTab !=null}"
            class="bgCover"></div>
    </div>
</template>

<script src="./listTabBar.js" lang="babel"></script>
<style src="./listTabBar.styl" lang="stylus" scoped></style>
