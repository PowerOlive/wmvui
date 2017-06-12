<template>
<div class="demo-menu-container">
  <mu-menu desktop :autoWidth="false" :width="200">
    <mu-menu-item title="亚瑟" afterText="大贱人"/>
    <mu-menu-item title="不知火舞" afterText="骚贱浪"/>
    <mu-menu-item title="韩信" afterText="韩跳跳"/>
    <mu-menu-item title="孙悟空" afterText="猴三棍"/>
    <mu-menu-item title="赵云" afterText="小枪枪"/>
    <mu-menu-item title="张飞" afterText="烟人小飞飞"/>
    <mu-divider />
    <mu-menu-item title="花木兰" rightIcon="right"/>
    <mu-menu-item title="大乔" rightIcon="right"/>
    <mu-menu-item title="小乔" rightIcon="right"/>
    <mu-menu-item title="露娜可可" rightIcon="right"/>
    <mu-menu-item title="橘石精" rightIcon="right"/>
    <mu-menu-item title="高贱离" rightIcon="right"/>
    <mu-divider />
    <mu-menu-item title="妲已" afterText="少儿不益"/>
  </mu-menu>
  <mu-menu :autoWidth="false" :width="300">
    <mu-menu-item title="诸葛亮" afterText="猪哥亮" />
    <mu-menu-item title="兰陵王" afterText="后期辣鸡" />
    <mu-menu-item title="程咬金" afterText="操不死的小强" />
  </mu-menu>
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
