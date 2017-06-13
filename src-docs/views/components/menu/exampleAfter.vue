<template>
<div class="demo-menu-container">
  <vui-menu desktop :autoWidth="false" :width="200">
    <vui-menu-item title="亚瑟" afterText="大贱人"/>
    <vui-menu-item title="不知火舞" afterText="骚贱浪"/>
    <vui-menu-item title="韩信" afterText="韩跳跳"/>
    <vui-menu-item title="孙悟空" afterText="猴三棍"/>
    <vui-menu-item title="赵云" afterText="小枪枪"/>
    <vui-menu-item title="张飞" afterText="烟人小飞飞"/>
    <vui-divider />
    <vui-menu-item title="花木兰" rightIcon="right"/>
    <vui-menu-item title="大乔" rightIcon="right"/>
    <vui-menu-item title="小乔" rightIcon="right"/>
    <vui-menu-item title="露娜可可" rightIcon="right"/>
    <vui-menu-item title="橘石精" rightIcon="right"/>
    <vui-menu-item title="高贱离" rightIcon="right"/>
    <vui-divider />
    <vui-menu-item title="妲已" afterText="少儿不益"/>
  </vui-menu>
  <vui-menu :autoWidth="false" :width="300">
    <vui-menu-item title="诸葛亮" afterText="猪哥亮" />
    <vui-menu-item title="兰陵王" afterText="后期辣鸡" />
    <vui-menu-item title="程咬金" afterText="操不死的小强" />
  </vui-menu>
</div>
</template>

<style lang="css">
.demo-menu {
  display: inline-block;
  margin: 16px 32px 16px 0;
}

.demo-menu-container{
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}

</style>
