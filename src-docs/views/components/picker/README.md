## 选择器

[中国行政区域数据](https://github.com/airyland/china-area-data) 

```javascript
非联动数据格式示例：

// 多列数据格式
[['小米', 'iPhone', '华为'], ['魅族', '三星','锤子']]

// 键值对格式
[[{name: '2019届5班', value: '1'}, {name: '2019届4班', value: '2'}]]

// val格式
['小米', '小米1']

联动数据格式示例：
[
  {name: '湖北省', value: '100010', parent: 0},
  {name: '湖南省', value: '100020', parent: 0},
  {name: '武汉市', value: '100011', parent: '100010'},
  {name: '黄石市', value: '100012', parent: '100010'},
  {name: '长沙市', value: '100021', parent: '100020'},
  {name: '益阳市', value: '100022', parent: '100020'},
  {name: '江夏区', value: '100021', parent: '100011'},
  {name: '武昌区', value: '100022', parent: '100011'}
]
```
