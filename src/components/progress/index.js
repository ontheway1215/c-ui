import Progress from './src/progress.vue'

Progress.install = function (Vue) {
  Vue.component(Progress.name, Tag)
}

export default Progress
