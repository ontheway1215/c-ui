import Upload from './src/upload.vue'

Upload.install = function (Vue) {
  Vue.component(Upload.name, Tag)
}

export default Upload
