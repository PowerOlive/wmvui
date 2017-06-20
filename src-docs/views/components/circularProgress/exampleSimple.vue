<template>
<div>
  <vui-circular-progress :type="1" />
  <vui-circular-progress :size="20" success :type="1" />
  <vui-circular-progress :size="30" info :type="1" />
  <vui-circular-progress :size="50" warn :type="1" />
  <vui-circular-progress :size="30" danger :type="1"  />
  <br>
  <vui-circular-progress :size="70" success />
  <vui-circular-progress :size="90" info />
  <vui-circular-progress :size="70" warn />
  <vui-circular-progress :size="50" danger />
</div>
</template>
