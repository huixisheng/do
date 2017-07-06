import Vue from 'vue'
// import 'element-ui/lib/theme-default/index.css' // @see 为了方便复现问题，webpack没有添加相应的css-loader
import App from './App.vue'

import {
  Input,
  Button,
  Select,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Form,
  FormItem,
  Loading,
  Message,
  // MessageBox,
  Option // @see option的o应该是大写
} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(Loading.directive)
Vue.use(Message) // @see messsage 源码中并有提供相应的install方法，这个调用应该是无效的
// Vue.use(MessageBox)

console.log(Message);
Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  render: h => h(App)
})
