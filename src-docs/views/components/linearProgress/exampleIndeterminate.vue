<template>
  <div>
    <vui-linear-progress mode="determinate" :value="40" />
    <br>
    <vui-linear-progress mode="determinate" :value="70" success />
    <br>
    <vui-linear-progress mode="determinate" :value="90" info />
    <br>
    <vui-linear-progress mode="determinate" :value="70" warn />
    <br>
    <vui-linear-progress mode="determinate" :value="40" danger />
    <br>
    <vui-linear-progress mode="determinate" showValue :size="14" :value="50"  />
  </div>
</template>
