<template>
  <div class="vui-picker">
    <vui-flex :gutter="0">
      <vui-flex-item :span="columnWidth && columnWidth[index]" v-for="(one, index) in currentData" :key="index" style="margin-left:0;">
        <div class="vui-picker-item" :id="`vui-picker-${uuid}-${index}`"></div>
      </vui-flex-item>
    </vui-flex>
  </div>
</template>

<script>
import Scroller from './scroller'
import flexbox from '../flexbox/flexbox'
import flexboxItem from '../flexbox/flexboxItem'
import Manager from './chain'
import value2name from './value2name'
export default {
  name: 'vui-picker',
  components: {
    'vui-flex': flexbox,
    'vui-flex-item': flexboxItem
  },
  created () {
    if (this.columns !== 0) {
      const length = this.columns
      this.store = new Manager(this.data, length, this.fixedColumns)
      this.currentData = this.store.getColumns(this.value)
    }
  },
  mounted () {
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.$nextTick(() => {
      this.render(this.currentData, this.currentValue)
    })
  },
  props: {
    data: [Array],
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues () {
      return value2name(this.currentValue, this.data)
    },
    getId (i) {
      return `#vui-picker-${this.uuid}-${i}`
    },
    render (data, value) {
      this.count = this.currentData.length
      const _this = this
      if (!data || !data.length) {
        return
      }
      let count = this.currentData.length
      // set first item as value
      if (value.length < count) {
        for (let i = 0; i < count; i++) {
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0])
        }
      }
      for (let i = 0; i < data.length; i++) {
        /**
        * Still don't know why this happens
        */
        if (!document.querySelector(_this.getId(i))) {
          return
        }
        _this.scroller[i] && _this.scroller[i].destroy()
        _this.scroller[i] = new Scroller(_this.getId(i), {
          data: data[i],
          defaultValue: value[i] || data[i][0].value,
          itemClass: _this.item_class,
          onSelect (value) {
            _this.$set(_this.currentValue, i, value)
            if (!this.columns || (this.columns && _this.getValue().length === _this.store.count)) {
              _this.$emit('change', _this.getNameValues(), _this.getValue())
            }
            if (_this.columns !== 0) {
              _this.renderChain(i + 1)
            }
          }
        })
        if (_this.currentValue) {
          _this.scroller[i].select(value[i])
        }
      }
    },
    renderChain (i) {
      if (!this.columns) {
        return
      }
      // do not render for last scroller
      if (i > this.count - 1) {
        return
      }
      const _this = this
      let ID = this.getId(i)
      // destroy old one
      this.scroller[i].destroy()
      let list = this.store.getChildren(_this.getValue()[i - 1])
      this.scroller[i] = new Scroller(ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect (value) {
          _this.$set(_this.currentValue, i, value)
          _this.$emit('change', _this.getNameValues(), _this.getValue())
          _this.renderChain(i + 1)
        }
      })
      this.$set(this.currentValue, i, list[0].value)
      this.renderChain(i + 1)
    },
    getValue () {
      let data = []
      for (let i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value)
        } else {
          return []
        }
      }
      return data
    },
    emitValueChange (name, val) {
      if (!this.columns || (this.columns && val.length === this.store.count)) {
        this.$emit('change', name, val)
      }
    }
  },
  data () {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.currentValue)) {
        this.currentValue = val
      }
    },
    currentValue (val, oldVal) {
      this.$emit('input', val)
      // render all the scroller for chain datas
      if (this.columns !== 0) {
        if (val.length > 0) {
          if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
            this.currentData = this.store.getColumns(val)
            this.$nextTick(function () {
              this.render(this.currentData, val)
            })
          }
        }
      } else {
        if (val.length) {
          for (let i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i])
            }
          }
        } else {
          this.render(this.currentData, [])
        }
      }
    },
    data (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.currentData)) {
        this.currentData = val
      }
    },
    currentData (newData) {
      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(() => {
          this.render(newData, this.currentValue)
          // emit on-change after rerender
          this.$nextTick(() => {
            this.emitValueChange(this.getNameValues(), this.getValue())
            if (JSON.stringify(this.getValue()) !== JSON.stringify(this.currentValue)) {
              if (!this.columns || (this.columns && this.getValue().length === this.store.count)) {
                this.currentValue = this.getValue()
              }
            }
          })
        })
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return
          }
          const length = this.columns
          this.store = new Manager(newData, length, this.fixedColumns)
          this.currentData = this.store.getColumns(this.currentValue)
        }
      }
    }
  },
  beforeDestroy () {
    for (let i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy()
      this.scroller[i] = null
    }
  }
}
</script>

<style lang="scss">
@import "../styles/import.scss";
.scroller-component {
  display: block;
  position: relative;
  height: 180px;
  overflow: hidden;
  width: 100%;
}

.scroller-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.scroller-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  z-index: 3;
  transform: translateZ(0px);
  background-image:
    -webkit-linear-gradient(top, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
    -webkit-linear-gradient(bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
  background-image:
    linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
    linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
  background-position: top, bottom;
  background-size: 100% 68px;
  background-repeat: no-repeat;
}

.scroller-item {
  text-align: center;
  font-size: 16px;
  height: 34px;
  line-height: 34px;
  color: $textColor;
  &-selected{
    color: $primaryColor;
  }
}

.scroller-indicator {
  width: 100%;
  height: 34px;
  position: absolute;
  left: 0;
  top: 68px;
  z-index: 3;
  background-image:
    -webkit-linear-gradient(top, #d0d0d0, #d0d0d0, transparent, transparent),
    -webkit-linear-gradient(bottom, #d0d0d0, #d0d0d0, transparent, transparent);
  background-image:
    linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
    linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
  background-position: top, bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}
.scroller-item {
  line-clamp: 1;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
