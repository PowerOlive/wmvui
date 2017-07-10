<template>
    <div>
        <vui-flex wrap>
            <vui-flex-item :auto="false">
                <vui-tags>
                    <img src="images/vegetables.jpg" width="160">
                    <vui-icon icon="tag1" :size="40" color="#ef5350" slot="icon" data-text="最新" />
                </vui-tags>
            </vui-flex-item>
            <vui-flex-item :auto="false">
                <vui-tags right>
                    <img src="images/camera.jpg" width="160">
                    <vui-icon icon="tag2" :size="40" color="#ffa726" slot="icon" data-text="HOT"  />
                </vui-tags>
            </vui-flex-item>
            <vui-flex-item :auto="false">
                <vui-tags bottom>
                    <img src="images/hats.jpg" width="160">
                    <vui-icon icon="tag2" :size="40" color="#4caf50" slot="icon" data-text="免费" />
                </vui-tags>
            </vui-flex-item>
            <vui-flex-item :auto="false">
                <vui-tags left>
                    <img src="images/honey.jpg" width="160">
                    <vui-icon icon="tag1" :size="40" color="#2196f3" slot="icon" data-text="限免" />
                </vui-tags>
            </vui-flex-item>

            <vui-flex-item :auto="false">
                <vui-tags>
                    <img src="images/breakfast.jpg" width="160">
                    <vui-icon icon="tag3" :size="20" color="#673ab7" slot="icon" data-text="绝版" />
                </vui-tags>
            </vui-flex-item>

            <vui-flex-item :auto="false">
                <vui-tags>
                    <img src="images/sun.jpg" width="160">
                    <vui-icon icon="tag5" :size="40" color="#009688" slot="icon" data-text="活动" />
                </vui-tags>
            </vui-flex-item>
            <vui-flex-item :auto="false">
                <vui-tags bottom>
                    <img src="images/morning.jpg" width="160">
                    <vui-icon icon="tag4" :size="20" color="#3f51b5" slot="icon" data-text="限量" />
                </vui-tags>
            </vui-flex-item>
            <vui-flex-item :auto="false">
                <vui-tags left>
                    <img src="images/water-plant.jpg" width="160">
                    <vui-icon icon="tag3" :size="20" color="#f9a825" slot="icon" data-text="影星" />
                </vui-tags>
            </vui-flex-item>
        </vui-flex>

        <br><br>
        <vui-tags>
            <vui-grid-list>
                <vui-grid-tile>
                    <img src="images/water-plant.jpg" width="100%" />
                    <span slot="title">我是一张图片</span>
                    <span slot="subTitle">作者 <b>不知道</b></span>
                    <vui-button circle icon="like-fill" slot="action"/>
                </vui-grid-tile>
            </vui-grid-list>
            <vui-icon icon="tag3" :size="20" color="#f9a825" slot="icon" data-text="影星" />
        </vui-tags>
    </div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
.demo-tags{
  margin: 10px;
}
</style>
