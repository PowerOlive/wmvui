<template>
<div class="demo-picker-container">
  <vui-picker :data='years' v-model='year1' @on-change='change' />
  <!-- <vui-picker 
  :data="data1" 
   />
   <br>
  选择地区 
  <vui-picker 
  :data="data2" 
  @onpicker="onpicker"
  @onSelect="onSelect"
  @onChange="onChange"
  @onValChange="onValChange"
   /> -->
</div>
</template>

<script>
let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}
export default {
  data () {
    return {
      years: [years],
      year1: ['']
      // data1: [
      //   [{
      //     text: '小美',
      //     value: 1
      //   }, {
      //     text: '猪猪',
      //     value: 2
      //   }], [{
      //     text: '张三',
      //     value: 1
      //   }, {
      //     text: '李四',
      //     value: 2
      //   }], [{
      //     text: '张三',
      //     value: 1
      //   }, {
      //     text: '李四',
      //     value: 2
      //   }], [{
      //     text: '张三',
      //     value: 1
      //   }, {
      //     text: '李四',
      //     value: 2
      //   }]
      // ],
      // first: [],
      // second: [],
      // third: [],
      // selectedIndex: [0, 0, 0],
      // checked: [0, 0, 0],
      // data2: [],
      // picker: {}
    }
  },
  created () {
    // this.creatList(city, this.first)
    // if (city[this.selectedIndex[0]].hasOwnProperty('sub')) {
    //   this.creatList(city[this.selectedIndex[0]].sub, this.second)
    // } else {
    //   this.second = [{text: '', value: 0}]
    // }
    // if (city[this.selectedIndex[0]].sub[this.selectedIndex[1]].hasOwnProperty('sub')) {
    //   this.creatList(city[this.selectedIndex[0]].sub[this.selectedIndex[1]].sub, this.third)
    // } else {
    //   this.third = [{text: '', value: 0}]
    // }
    // this.data2 = [this.first, this.second, this.third]
    // this.onpicker()
  },
  methods: {
    change (value) {
      console.log('new Value', value)
    }
    // onpicker (picker) {
    //   this.picker = picker
    // },
    // creatList (obj, list) {
    //   obj.forEach((item, index, arr) => {
    //     var temp = {}
    //     temp.text = item.name
    //     temp.value = index
    //     list.push(temp)
    //   })
    // },
    // firstChange () {
    //   this.second = []
    //   this.third = []
    //   this.checked[0] = this.selectedIndex
    //   var firstCity = city[this.selectedIndex]
    //   if (firstCity.hasOwnProperty('sub')) {
    //     this.creatList(firstCity.sub, this.second)
    //     var secondCity = city[this.selectedIndex].sub[0]
    //     if (secondCity.hasOwnProperty('sub')) {
    //       this.creatList(secondCity.sub, this.third)
    //     } else {
    //       this.third = [{text: '', value: 0}]
    //       this.checked[2] = 0
    //     }
    //   } else {
    //     this.second = [{text: '', value: 0}]
    //     this.third = [{text: '', value: 0}]
    //     this.checked[1] = 0
    //     this.checked[2] = 0
    //   }
    //   this.picker.refillColumn(1, this.second)
    //   this.picker.refillColumn(2, this.third)
    //   this.picker.scrollColumn(1, 0)
    //   this.picker.scrollColumn(2, 0)
    // },
    // secondChange () {
    //   this.third = []
    //   this.checked[1] = this.selectedIndex
    //   var firstIndex = this.checked[0]
    //   if (city[firstIndex].sub[this.selectedIndex].hasOwnProperty('sub')) {
    //     var secondCity = city[firstIndex].sub[this.selectedIndex]
    //     this.creatList(secondCity.sub, this.third)
    //     this.picker.refillColumn(2, this.third)
    //     this.picker.scrollColumn(2, 0)
    //   } else {
    //     this.third = [{text: '', value: 0}]
    //     this.checked[2] = 0
    //     this.picker.refillColumn(2, this.third)
    //     this.picker.scrollColumn(2, 0)
    //   }
    // },
    // onSelect (selVal, selIndex) {
    //   var text1 = this.first[selIndex[0]].text
    //   var text2 = this.second[selIndex[1]].text
    //   var text3 = this.third[selIndex[2]] ? this.third[selIndex[2]].text : ''
    //   console.log(text1 + ' ' + text2 + ' ' + text3)
    // },
    // onChange (picker, index, selIndex) {
    //   console.log('滑动时：' + index, selIndex)
    //   if (index === 0) {
    //     this.firstChange()
    //   } else if (index === 1) {
    //     this.secondChange()
    //   }
    //   // picker.refillColumn(1, [{
    //   //   text: '张三1',
    //   //   value: 1
    //   // }, {
    //   //   text: '李四2',
    //   //   value: 2
    //   // }])
    // },
    // onValChange (selVal, selIndex) {
    //   console.log('值改变：' + selVal, selIndex)
    // }
  }
}
</script>

<style lang="css">
.demo-picker-container{
  width: 256px;
}
</style>
