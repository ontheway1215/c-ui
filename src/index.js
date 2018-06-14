import Button from './components/button'
import ButtonGroup from './components/button-group'
import Tag from './components/tag'
import Alert from './components/alert'
import Input from './components/input'
import Modal from './components/modal'
import Message from './components/message'

const components = {
  Button,
  ButtonGroup,
  Tag,
  Alert,
  Input,
  Modal,
  Message
}

function install (Vue, opts = {}) {
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  for (const item in components) {
    if (components[item].name) {
      Vue.component(components[item].name, components[item])
    }
  }
}

//auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  // locale: locale.use,
  // i18n: locale.i18n,
  ...components
}

module.exports.default = module.exports;  // eslint-disable-line no-undef
