<template>
  <div>
    <vui-flex>
      <vui-flex-item :auto="false">
        默认切换：  
      </vui-flex-item>
      <vui-flex-item>
        <vui-marquee :list="list" :time="1000" />
      </vui-flex-item>
    </vui-flex>
    <br>
    <vui-flex>
      <vui-flex-item :auto="false">
        五颜六色：  
      </vui-flex-item>
      <vui-flex-item>
        <vui-marquee :list="list2" :time="500" down />
      </vui-flex-item>
    </vui-flex>
    <br>
    <vui-flex>
      <vui-flex-item :auto="false">
        可跳转：  
      </vui-flex-item>
      <vui-flex-item>
        <vui-marquee :list="list3" :time="1000" />
      </vui-flex-item>
    </vui-flex>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
  },
  data () {
    return {
      list: ['我只是一个小菜逼', '不喜欢用的不要喷', '期待大牛的神作'],
      list2: [{
        title: '我只是一个小菜逼',
        color: 'blue'
      }, {
        title: '不喜欢用的不要喷',
        color: 'red'
      }, {
        title: '期待大牛的神作',
        color: 'green'
      }],
      list3: [{
        title: '我只是一个小菜逼',
        url: '/idnex'
      }, {
        title: '不喜欢用的不要喷',
        url: '/idnex'
      }, {
        title: '期待大牛的神作',
        url: '/idnex'
      }]
    }
  }
}
</script>
