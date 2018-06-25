import Tag from './src/progress.vue'

Tag.install = function (Vue) {
  Vue.component(Progress.name, Tag)
}

export default Progress
