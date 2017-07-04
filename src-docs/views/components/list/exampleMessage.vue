<template>
<div>
  <vui-list>
    <vui-list-item>
      <template slot="title">这个周末一起吃饭么?</template>
      <vui-avatar src="images/avatar1.jpg" slot="left"/>
      <template slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </template>
      <vui-icon-menu slot="right" icon="more" tooltip="操作">
        <vui-menu-item>
          <template slot="title">回复</template>
        </vui-menu-item>
        <vui-menu-item>
          <template slot="title">标记</template>
        </vui-menu-item>
        <vui-menu-item>
          <template slot="title">删除</template>
        </vui-menu-item>
      </vui-icon-menu>
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>
    <vui-list-item :describeLine="2">
      <template slot="title">Alex Qin</template>
      <template slot="describe">看电影啊我们去看电影，最近有部烂片上映，又有吐槽的了</template>
      <slot>2017-06-22</slot>
      <img src="images/avatar1.jpg" width="50" slot="right" class="mr5" />
      <img src="images/avatar1.jpg" width="50" slot="right" />
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>

    <vui-list-item :describeLine="2">
      <template slot="title">Alex Qin</template>
      <img src="images/avatar1.jpg" width="80" slot="left" />
      <template slot="describe">看电影啊我们去看电影，最近有部烂片上映，又有吐槽的了
      </template>
      <slot>2017-06-22</slot>
      <vui-icon slot="right" icon="right" />
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>

    <vui-list-item :describeLine="2">
      <template slot="title">Alex Qin</template>
      <template slot="describe">看电影啊我们去看电影，最近有部烂片上映，又有吐槽的了
      </template>
      <slot>2017-06-22</slot>
      <img src="images/avatar1.jpg" width="80" slot="right" />
    </vui-list-item>
    <vui-divider :padding="['10px','0']"/>

    <vui-list-item>
      <template slot="title">这个周末一起吃饭么?</template>
      <div class="mt5">
        Myron Liu -周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </div>
      <img src="images/breakfast.jpg" width="100%" />
    </vui-list-item>
  </vui-list>
</div>
</template>
