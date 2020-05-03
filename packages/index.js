import './font/iconfont.css'

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function validateFileName (str) {
  return /^\S+\.vue$/.test(str) && str.replace(/^\S+\/(\w+)\.vue$/, (res, $1) => capitalizeFirstLetter($1))
}

const install = (Vue) => {
  const requireComponent = require.context('./', true, /\.vue$/)
  requireComponent.keys().forEach(filePath => {
    const componentConfig = requireComponent(filePath)
    // 得到文件名的前半部分index
    const fileName = validateFileName(filePath)
    const componentName = fileName.toLowerCase() === 'index' ? capitalizeFirstLetter(componentConfig.default.name) : fileName
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

// 判断一下，如果是通过外链引入的Vue就是全局的，可以不用Vue.use()，直接全局给你注册号
if (typeof window !== 'undefined' && window.vue) {
  install(window.vue)
}

export default {
  install
}
