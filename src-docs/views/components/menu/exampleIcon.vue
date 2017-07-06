<template>
  <vui-paper class="demo-menu">
    <vui-menu>
      <vui-menu-item>
        <vui-icon icon="code" slot="left" />
        <template slot="title">李白</template>
        <vui-icon icon="right" :size="14" slot="right" />
      </vui-menu-item>
      <vui-menu-item>
        <template slot="title">姜子牙</template>
        <vui-badge text="11" circle slot="right" />
        <vui-icon icon="right" :size="14" slot="right" />
      </vui-menu-item>
      <vui-menu-item>
        <vui-icon icon="right" :size="14" slot="left" />
        <template slot="title">李白</template>
        <vui-badge text="骚贱浪" slot="right" />
        <vui-icon icon="like-fill" color="red" slot="right" style="margin-left:10px"/>
        <vui-icon icon="right" :size="14" slot="right" />
      </vui-menu-item>
      <vui-menu-item>
        <template slot="title">敌人节</template>
        <vui-icon icon="right" :size="14" slot="right" />
      </vui-menu-item>
      <vui-menu-item title="蔡文鸡" />
      <vui-menu-item>
      <template slot="title">亚瑟</template>
        <template slot="right">
          <span style="color:#999">大贱人</span>
        </template>
      </vui-menu-item>
      <vui-menu-item>
        <template slot="title">不知火舞</template>
        <template slot="right">
          <span style="color:#999">骚贱浪</span>
        </template>
      </vui-menu-item>
      <vui-menu-item>
        <template slot="title">韩信</template>
        <template slot="right">
          <span style="color:#999">韩跳跳</span>
        </template>
      </vui-menu-item>
      <vui-menu-item>
        <template slot="title">孙悟空</template>
        <template slot="right">
          <span style="color:#999">猴三棍</span>
        </template>
      </vui-menu-item>
      <vui-divider />
      <vui-menu-item>
        <template slot="title">妲已</template>
        <template slot="right">
          <span style="color:#999">少儿不益</span>
        </template>
      </vui-menu-item>
    </vui-menu>
  </vui-paper>
</template>


<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}

</style>
