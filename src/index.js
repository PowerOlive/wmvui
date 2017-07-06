import './styles/base.less'
import Vue from 'vue'
import {retina} from './utils'
import icon from './icon'
import svgIcon from './svgIcon'
import star from './star'
import badge from './badge'
import header from './header'
import button from './button'
import contentBlock from './contentBlock'
import * as list from './list'
import subHeader from './subHeader'
import divider from './divider'
import refreshControl from './refreshControl'
import infiniteScroll from './infiniteScroll'
import avatar from './avatar'
import * as tabs from './tabs'
import paper from './paper'
import * as card from './card'
import tags from './tags'
import overlay from './internal/popup/overlay'
import dialog from './dialog'
import popup from './popup'
import preview from './preview'
import * as menu from './menu'
import dropDownMenu from './dropDownMenu'
import popover from './popover'
import iconMenu from './iconMenu'
import drawer from './drawer'
import picker from './picker'
import textField from './textField'
import selectField from './selectField'
import checkbox from './checkbox'
import radio from './radio'
import _switch from './switch'
import range from './range'
import progress from './progress'
import loading from './loading'
import * as gridList from './gridList'
import * as table from './table'
import datePicker from './datePicker'
import timePicker from './timePicker'
import countDown from './countdown'
import clocker from './clocker'
import magicSum from './magicSum'
import tooltip from './tooltip'
import * as stepper from './stepper'

import number from './number'   // 自定义

// import * as grid from './grid'

import * as flexbox from './flexbox'
import * as marquee from './marquee'
import lazyload from './lazyload'
import config from './config'
const components = {
  number,
  icon,
  svgIcon,
  star,
  badge,
  header,
  button,
  contentBlock,
  ...list,
  subHeader,
  divider,
  refreshControl,
  infiniteScroll,
  avatar,
  ...tabs,
  paper,
  ...card,
  tags,
  overlay,
  dialog,
  preview,
  popup,
  ...menu,
  dropDownMenu,
  popover,
  iconMenu,
  drawer,
  picker,
  textField,
  selectField,
  checkbox,
  radio,
  _switch,
  range,
  progress,
  loading,
  ...gridList,
  ...table,
  datePicker,
  timePicker,
  countDown,
  clocker,
  magicSum,
  tooltip,
  ...stepper,
  ...flexbox,
  lazyload,
  ...marquee
}

const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
    // console.log(components[key].name)
  })
  retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  config,
  install
}
export {
  config,
  install
}
