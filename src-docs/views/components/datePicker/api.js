export default {
  props: [{
    name: 'dateTimeFormat',
    type: 'Object',
    default: '内置 dateTimeFormat',
    desc: 'props.dateTimeFormat'
  }, {
    name: 'autoOk',
    type: 'Boolean',
    default: 'false',
    desc: 'props.autoOk'
  }, {
    name: 'okLabel',
    type: 'String',
    default: '确定',
    desc: 'props.okLabel'
  }, {
    name: 'cancelLabel',
    type: 'String',
    default: '确定',
    desc: 'props.cancelLabel'
  }, {
    name: 'container',
    type: 'String',
    default: 'dialog',
    desc: 'props.container'
  }, {
    name: 'disableYearSelection',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disableYearSelection'
  }, {
    name: 'firstDayOfWeek',
    type: 'Number',
    default: '1',
    desc: 'props.firstDayOfWeek'
  }, {
    name: 'mode',
    type: 'String',
    default: 'portrait',
    desc: 'props.mode'
  }, {
    name: 'shouldDisableDate',
    type: 'Function',
    default: '',
    desc: 'props.shouldDisableDate'
  }, {
    name: 'format',
    type: 'String',
    default: 'YYYY-MM-DD',
    desc: 'props.format'
  }, {
    name: 'maxDate',
    type: 'Date, String',
    default: '',
    desc: 'props.maxDate'
  }, {
    name: 'minDate',
    type: 'Date, String',
    default: '',
    desc: 'props.minDate'
  }, {
    name: 'name',
    type: 'String',
    default: '',
    desc: 'props.name'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: 'props.labelFloat'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'labelFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelFocusClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: 'props.hintText'
  }, {
    name: 'hintTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.hintTextClass'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: 'props.helpText'
  }, {
    name: 'helpTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.helpTextClass'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: 'props.errorText'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: 'props.errorColor'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'fill',
    type: 'Boolean',
    default: 'false',
    desc: 'props.fill'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: 'props.underlineShow'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineClass'
  }, {
    name: 'underlineFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineFocusClass'
  }, {
    name: 'inputClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.inputClass'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: 'props.value'
  }],
  events: [{
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }]
}
