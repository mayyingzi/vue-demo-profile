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
                            <div 
                                @click="changePosi(true)"
                                :class="{'selected': curPosi}"
                                class="lineCell"><i class="posi-icon"></i>位置</div>
                            <div
                                @click="changePosi(false)"                                
                                :class="{'selected': !curPosi}"
                                class="lineCell">所有店铺</div>
                        </div>
                        <!-- 地址定位信息 -->
                        <div 
                            :class="{'selected': curPosi}"
                            class="firTabDe posiDetail">
                            <div 
                                class="firTabDeBox">
                                <div class="province clos">
                                    <div 
                                        @click="changeAddrSub({
                                            index: -1,
                                            value: '',
                                            sub: -1
                                        })"
                                        :class="{'selected' : curTabVal[0].selected.addr.provinceInd === -1}"
                                        class="cellItem"><p>全部区域</p></div>
                                </div>
                                <div class="city clos">

                                </div>
                            </div>
                        </div>
                        <!-- 店铺信息 -->
                        <div 
                            :class="{'selected': !curPosi}"
                            class="firTabDe clos">
                            <div 
                                @click="changeShopId({
                                    key: -1,
                                    value: '所有店铺'
                                })"
                                :class="{'selected' : curTabVal[0].selected.shop.index === -1}"
                                class="cellItem">所有店铺</div>
                            <div
                                v-for="(value, key) in listData.firTab.shopMap"
                                :key="key"
                                @click="changeShopId({
                                    key,
                                    value
                                })"
                                :class="{'selected' : curTabVal[0].selected.shop.index === key}"
                                class="cellItem">
                                {{value}}
                            </div>
                            
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
