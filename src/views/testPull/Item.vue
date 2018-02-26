<template lang="html">
    <div class="item">
        <div class="item-wrap">
            <div class="goods-img">
                <img :src="data.img_url">
            </div>
            <p class="tit">{{data.goods_title}}</p>
        </div>                    
    </div>
</template>

<script>
export default {
    name: 'recyclerViewItem',
    props: {
        data: Object
    }
};
</script>

