<template>
<div>
  <p>平均分布</p>
  <vui-flex>
    <vui-flex-item class="flex-demo">1</vui-flex-item>
    <vui-flex-item class="flex-demo">2</vui-flex-item>
    <vui-flex-item class="flex-demo">3</vui-flex-item>
  </vui-flex>
  <br>

  <p>排序</p>
  <vui-flex>
    <vui-flex-item order="0" class="flex-demo">1</vui-flex-item>
    <vui-flex-item order="2" span="200" class="flex-demo">我应该在 2 号位置</vui-flex-item>
    <vui-flex-item order="1" class="flex-demo">我应该在 3 号位置</vui-flex-item>
  </vui-flex>
  <br>

  <p>默认水平方向排列</p>
  <vui-flex>
    <vui-flex-item order="0" class="flex-demo">1</vui-flex-item>
    <vui-flex-item order="2" class="flex-demo">2</vui-flex-item>
  </vui-flex>
  <p>设置垂直方向</p>
  <vui-flex vertical>
    <vui-flex-item order="0" class="flex-demo">1</vui-flex-item>
    <vui-flex-item order="2" class="flex-demo">2</vui-flex-item>
  </vui-flex>
  <br>

  <p>X轴左对齐方式</p>
  <div style="background:#eee;">
    <vui-flex>
      <vui-flex-item :auto="false" class="flex-demo">看吧~我在左边~</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">我也在~</vui-flex-item>
    </vui-flex>
    <br>
    <vui-flex end>
      <vui-flex-item :auto="false" class="flex-demo">我现在跑右边辣~</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">自动跟随</vui-flex-item>
    </vui-flex>
    <br>
    <vui-flex center>
      <vui-flex-item :auto="false" class="flex-demo">看吧看吧~
      </vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">看吧看吧~
      </vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">221212121</vui-flex-item>
    </vui-flex>
  </div>
  <br>

  <div>
    <h4>常用列布局-左右平均分布</h4>
    <br>
    <vui-flex middle>
      <vui-flex-item>
        <div>90后女孩整容 获胸模大赛亚军</div>
        <div>2017-06-22</div>
      </vui-flex-item>
      <vui-flex-item>
        <img src="images/avatar1.jpg" width="48%" alt="">
        <img src="images/avatar1.jpg" width="48%" alt="">
      </vui-flex-item>
    </vui-flex>
    <vui-divider :padding="['10px', '0']" dotted/>
    <vui-flex top>
      <vui-flex-item>
        <div>90后女孩整容 获胸模大赛亚军</div>
        <div>2017-06-22</div>
      </vui-flex-item>
      <vui-flex-item>
        <img src="images/avatar1.jpg" width="100%" height="100px" alt="">
      </vui-flex-item>
    </vui-flex>
    <vui-divider :padding="['10px', '0']" dotted/>
    <vui-flex top>
      <vui-flex-item>
        <img src="images/avatar1.jpg" width="100%" height="100px" alt="">
      </vui-flex-item>
      <vui-flex-item>
        <div>90后女孩整容 获胸模大赛亚军</div>
        <div>2017-06-22</div>
      </vui-flex-item>
    </vui-flex>
  </div>
  <br>

  <div>
    <h4>常用列布局-内置类名控制</h4>
    <br>

    <ul>
      <li class="vui-flex vui-flex-top">
        <a href="#/flexbox">
          <img src="images/avatar1.jpg" width="68px" alt="">
        </a>
        <div class="vui-flex-item ml5">
          <div>90后女孩整容前后对比 获胸模大赛亚军~~</div>
          <div>2017-06-22</div>
        </div>
      </li>
      <vui-divider :padding="['10px', '0']" dotted/>
      <li class="vui-flex vui-flex-top">
        <div class="vui-flex-item ml5">
          <div>90后女孩整容前后对比 获胸模大赛亚军~~</div>
          <div>2017-06-22</div>
        </div>
        <a href="#/flexbox">
          <img src="images/avatar1.jpg" width="68px" alt="">
        </a>
      </li>
      <vui-divider :padding="['10px', '0']" dotted/>
      <li class="vui-flex vui-flex-middle">
        <div class="vui-flex-item ml5">
          <div>90后女孩整容 获胸模大赛亚军~~</div>
          <div>2017-06-22</div>
        </div>
        <vui-icon icon="right" />
      </li>
    </ul>
  </div>
  <br>

  <p>Y轴左对齐方式</p>
  <div style="background:#eee;">
    <div class="demo-flex">
      <vui-flex>
        <vui-flex-item :auto="false" class="flex-demo">
          默认Y轴顶对齐
          <br><br>
        </vui-flex-item>
        <vui-flex-item :auto="false" class="flex-demo">2</vui-flex-item>
      </vui-flex>
    </div>
    <div class="demo-flex">
      <vui-flex bottom>
        <vui-flex-item :auto="false" class="flex-demo">
          Y轴底对齐
          <br><br>
        </vui-flex-item>
        <vui-flex-item :auto="false" class="flex-demo">2</vui-flex-item>
      </vui-flex>
    </div>
    <div class="demo-flex">
      <vui-flex middle>
        <vui-flex-item :auto="false" class="flex-demo">
          Y轴垂直对齐
          <br><br>
        </vui-flex-item>
        <vui-flex-item :auto="false" class="flex-demo">2</vui-flex-item>
      </vui-flex>
    </div>
  </div>

  <br>
  <p>两端与子元素平均分布</p>
  <div style="background:#eee;">
    <vui-flex around>
      <vui-flex-item :auto="false" class="flex-demo">左右间距平均分布</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">左右间距平均分布</vui-flex-item>
    </vui-flex>
  </div>

  <br>
  <p>两端对齐平均分布</p>
  <div style="background:#eee;">
    <vui-flex between>
      <vui-flex-item :auto="false" class="flex-demo">左对齐</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">平均分布</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">平均分布</vui-flex-item>
      <vui-flex-item :auto="false" class="flex-demo">右对齐</vui-flex-item>
    </vui-flex>
  </div>

</div>
</template>

<style lang="css">
.demo-flex{
  display: inline-block;
  margin: 10px;
}
.flex-demo {
  background-color: #e0e0e0;
  text-align: center;
  padding: 4px 10px;
}
</style>
