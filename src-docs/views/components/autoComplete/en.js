import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Auto complete component should be have a `dataSource` attribute，as it will determine the prompt content of completion',
  configExample: 'Different parameters combinations usage',
  configExampleDesc: '`dataSource` can display the Icon by configing `leftIcon` or `rightIcon`, and display the prompt content of completion by configing `openOnFocus` when it was focusing',
  filterExample: 'Filter Usage',
  filterExampleDesc: 'To filter the data of `dataSource` by configing different `filter`，for hinting the data related with the input，also we can custom defind the `filter` function，to finish different `dataSource` filter， `maxSearchResults` is used to control the count of result.',
  props: {
    anchorOrigin: 'Anchor position definition, the drop-down box position is based on this point',
    targetOrigin: 'Anchor position, which related to the drop-down box of completion list',
    scroller: 'scroll element, will listen to its `scroll` event, it will update the position of drop-down continually when you scroll.',
    maxHeight: 'define the max height of drop-down box, scroll bar will be displayed when the content is bigger than it.',
    dataSource: 'required，fill with the data of completion list',
    dataSourceConfig: 'dataSource configuration，text is the property name of display text，value is the property name',
    disableFocusRipple: 'disable the ripple effect when focus',
    filter: 'filer configuration, used to filter the data of `dataSource`, only to display the data of related to input.',
    maxSearchResults: 'max count of displayed data',
    openOnFocus: 'whether display the completion list when focus or not',
    menuCloseDelay: 'the delay time of completion list before closing, unit: ms',
    label: 'label of input box',
    labelFloat: 'whether the label can be floated or not',
    labelClass: 'style of label, the binding way is same with the `class`',
    labelFocusClass: 'style of label when the input is focusing, the binding way is same with the `class`',
    disabled: 'whether ths input is disabled or not',
    hintText: 'hint text',
    hintTextClass: 'style of prompt text, the binding way is same with the `class`',
    helpText: 'help text',
    helpTextClass: 'style of help text, the binding way is same with the `class`',
    errorText: 'error text, the input box will become to error status when this parameters is not empty, thus the effect of style will be updated.',
    errorColor: 'color of error status, default to red',
    icon: 'display icon',
    iconClass: 'style of icon, the binding way is same with the `class`',
    fill: 'whether the width is 100% or not, default to 256px',
    underlineShow: 'whether it will display bottom line or not',
    underlineClass: 'style of bottom line, the binding way is same with the `class`',
    underlineFocusClass: 'style of bottom line when the input box is focusing, the binding way is same with the `class`',
    inputClass: 'style of input box, the binding way is same with the `class`',
    value: 'value of input box, you can use `v-model` instead of setting this parameter'
  },
  events: {
    focus: 'when the input box is focusing, component will emit this event',
    blur: 'when the input box is bluring, component will emit thisevent',
    select: 'when you select one item of completion list, component will emit this event with the item index and content',
    input: 'when the value is changed, the component will emit this event with the new value',
    change: 'when the user input or select one item of completion list , the component will emit this event with the new value'
  }
}
