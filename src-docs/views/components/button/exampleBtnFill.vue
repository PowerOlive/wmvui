<template>
<div class="container">
  <vui-button label="默认" fill fill class="demo-vui-raised-button" />
  <vui-button label="重要" primary fill class="demo-vui-raised-button" />
  <vui-button label="成功" success fill class="demo-vui-raised-button" />
  <vui-button label="提示" info fill class="demo-vui-raised-button" />
  <vui-button label="警告" warn fill class="demo-vui-raised-button" />
  <vui-button label="危险" danger fill class="demo-vui-raised-button" />

  <br>
  <p>自定义padding按钮</p>
  <vui-button label="重要" primary :padding="['10px','50px']" class="demo-vui-raised-button" />
</div>
</template>

