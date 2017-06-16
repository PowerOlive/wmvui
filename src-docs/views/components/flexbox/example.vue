<template>
<div>
  <p>平均分布</p>
  <vui-flexbox>
    <vui-flexbox-item class="flex-demo">1</vui-flexbox-item>
    <vui-flexbox-item class="flex-demo">2</vui-flexbox-item>
    <vui-flexbox-item class="flex-demo">3</vui-flexbox-item>
  </vui-flexbox>
  <br>

  <p>排序</p>
  <vui-flexbox>
    <vui-flexbox-item order="0" class="flex-demo">1</vui-flexbox-item>
    <vui-flexbox-item order="2" span="200" class="flex-demo">我应该在 2 号位置</vui-flexbox-item>
    <vui-flexbox-item order="1" class="flex-demo">我应该在 3 号位置</vui-flexbox-item>
  </vui-flexbox>
  <br>

  <p>默认水平方向排列</p>
  <vui-flexbox>
    <vui-flexbox-item order="0" class="flex-demo">1</vui-flexbox-item>
    <vui-flexbox-item order="2" class="flex-demo">2</vui-flexbox-item>
  </vui-flexbox>
  <p>设置垂直方向</p>
  <vui-flexbox vertical>
    <vui-flexbox-item order="0" class="flex-demo">1</vui-flexbox-item>
    <vui-flexbox-item order="2" class="flex-demo">2</vui-flexbox-item>
  </vui-flexbox>
  <br>

  <p>X轴左对齐方式</p>
  <div style="background:#eee;">
    <vui-flexbox>
      <vui-flexbox-item :auto="false" class="flex-demo">看吧~我在左边~</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">我也在~</vui-flexbox-item>
    </vui-flexbox>
    <vui-flexbox end>
      <vui-flexbox-item :auto="false" class="flex-demo">我现在跑右边辣~</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">自动跟随</vui-flexbox-item>
    </vui-flexbox>
    <br>
    <vui-flexbox center>
      <vui-flexbox-item :auto="false" class="flex-demo">看吧看吧~现在又到中间了
看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了看吧看吧~现在又到中间了
      </vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">2</vui-flexbox-item>
    </vui-flexbox>
  </div>
  <br>

  <p>Y轴左对齐方式</p>
  <div style="background:#eee;">
    <div class="demo-flex">
      <vui-flexbox>
        <vui-flexbox-item :auto="false" class="flex-demo">
          默认Y轴顶对齐
          <br><br>
        </vui-flexbox-item>
        <vui-flexbox-item :auto="false" class="flex-demo">2</vui-flexbox-item>
      </vui-flexbox>
    </div>
    <div class="demo-flex">
      <vui-flexbox bottom>
        <vui-flexbox-item :auto="false" class="flex-demo">
          Y轴底对齐
          <br><br>
        </vui-flexbox-item>
        <vui-flexbox-item :auto="false" class="flex-demo">2</vui-flexbox-item>
      </vui-flexbox>
    </div>
    <div class="demo-flex">
      <vui-flexbox middle>
        <vui-flexbox-item :auto="false" class="flex-demo">
          Y轴垂直对齐
          <br><br>
        </vui-flexbox-item>
        <vui-flexbox-item :auto="false" class="flex-demo">2</vui-flexbox-item>
      </vui-flexbox>
    </div>
  </div>

  <br>
  <p>两端与子元素平均分布</p>
  <div style="background:#eee;">
    <vui-flexbox around>
      <vui-flexbox-item :auto="false" class="flex-demo">左右间距平均分布</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">左右间距平均分布</vui-flexbox-item>
    </vui-flexbox>
  </div>

  <br>
  <p>两端对齐平均分布</p>
  <div style="background:#eee;">
    <vui-flexbox between>
      <vui-flexbox-item :auto="false" class="flex-demo">左对齐</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">平均分布</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">平均分布</vui-flexbox-item>
      <vui-flexbox-item :auto="false" class="flex-demo">右对齐</vui-flexbox-item>
    </vui-flexbox>
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
