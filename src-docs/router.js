import Vue from 'vue'
import Router from 'vue-router'
import Index from './views'
import Install from './views/get-stared/install'
import Usage from './views/get-stared/usage'
import ChangeLog from './views/more/changeLog'
import Contributing from './views/more/contributing'
import Colors from './views/customization/colors'
import Theme from './views/customization/theme'
import AppBar from './views/components/appbar'
// import AutoComplete from './views/components/autoComplete'
import Avatar from './views/components/avatar'
import Badge from './views/components/badge'
import BottomNav from './views/components/bottomNav'
import BottomSheet from './views/components/bottomSheet'
import button from './views/components/button'
// import RaisedButton from './views/components/raisedButton'
// import IconButton from './views/components/iconButton'
// import FloatButton from './views/components/floatButton'
import Card from './views/components/card'
import Chip from './views/components/chip'
import DatePicker from './views/components/datePicker'
import Dialog from './views/components/dialog'
import Divider from './views/components/divider'
import Drawer from './views/components/drawer'
import GridList from './views/components/gridList'
import Icon from './views/components/icon'
import svgIcon from './views/components/svgIcon'
import LinearProgress from './views/components/linearProgress'
import CircularProgress from './views/components/circularProgress'
import List from './views/components/list'
import Menu from './views/components/menu'
import IconMenu from './views/components/iconMenu'
import DropDownMenu from './views/components/dropDownMenu'
import Paper from './views/components/paper'
import Popover from './views/components/popover'
import SelectField from './views/components/selectField'
import number from './views/components/number'
import Checkbox from './views/components/checkbox'
import Radio from './views/components/radio'
import Switch from './views/components/switch'
import Slider from './views/components/slider'
// import SnackbarToast from './views/components/snackbarToast'
import Stepper from './views/components/stepper'
import SubHeader from './views/components/subHeader'
// import Table from './views/components/table'
import Tabs from './views/components/tabs'
import TextField from './views/components/textField'
import TimePicker from './views/components/timePicker'
import Tooltip from './views/components/tooltip'
import ContentBlock from './views/components/contentBlock'
import Flexbox from './views/components/flexbox'
import Grid from './views/components/grid'
import InfiniteScroll from './views/components/infiniteScroll'
import Picker from './views/components/picker'
import Popup from './views/components/popup'
import RefreshControl from './views/components/refreshControl'
// import Pagination from './views/components/pagination'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: Index },
    { path: '/install', component: Install },
    { path: '/usage', component: Usage },
    { path: '/changeLog', component: ChangeLog },
    { path: '/contributing', component: Contributing },
    { path: '/colors', component: Colors },
    { path: '/theme', component: Theme },
    { path: '/appbar', component: AppBar },
    // { path: '/autoComplete', component: AutoComplete },
    { path: '/avatar', component: Avatar },
    { path: '/badge', component: Badge },
    { path: '/bottomNav', component: BottomNav },
    { path: '/bottomSheet', component: BottomSheet },
    { path: '/button', component: button },
    // { path: '/raisedButton', component: RaisedButton },
    // { path: '/iconButton', component: IconButton },
    // { path: '/floatButton', component: FloatButton },
    { path: '/card', component: Card },
    { path: '/chip', component: Chip },
    { path: '/datePicker', component: DatePicker },
    { path: '/dialog', component: Dialog },
    { path: '/divider', component: Divider },
    { path: '/drawer', component: Drawer },
    { path: '/gridList', component: GridList },
    { path: '/icon', component: Icon },
    { path: '/svgIcon', component: svgIcon },
    { path: '/linearProgress', component: LinearProgress },
    { path: '/circularProgress', component: CircularProgress },
    { path: '/list', component: List },
    { path: '/menu', component: Menu },
    { path: '/iconMenu', component: IconMenu },
    { path: '/dropDownMenu', component: DropDownMenu },
    { path: '/paper', component: Paper },
    { path: '/popover', component: Popover },
    { path: '/selectField', component: SelectField },
    { path: '/number', component: number },
    { path: '/checkbox', component: Checkbox },
    { path: '/radio', component: Radio },
    { path: '/switch', component: Switch },
    { path: '/slider', component: Slider },
    // { path: '/snackbarToast', component: SnackbarToast },
    { path: '/stepper', component: Stepper },
    { path: '/subHeader', component: SubHeader },
    // { path: '/table', component: Table },
    { path: '/tabs', component: Tabs },
    { path: '/textField', component: TextField },
    { path: '/timePicker', component: TimePicker },
    { path: '/tooltip', component: Tooltip },
    { path: '/contentBlock', component: ContentBlock },
    { path: '/flexbox', component: Flexbox },
    { path: '/grid', component: Grid },
    { path: '/infiniteScroll', component: InfiniteScroll },
    // { path: '/pagination', component: Pagination },
    { path: '/picker', component: Picker },
    { path: '/popup', component: Popup },
    { path: '/refreshControl', component: RefreshControl },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
