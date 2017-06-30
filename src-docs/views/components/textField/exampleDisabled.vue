<template>
<div>
  <vui-text-field hintText="只读" readonly/><br/>
  <vui-text-field label="带标签" disabled/><br/>
  <vui-text-field label="浮动标签" labelFloat disabled/><br/>
  <vui-text-field hintText="多行文本输入，默认 3行，最大6行" disabled multiLine :rows="3" :rowsMax="6"/><br/>
</div>
</template>
