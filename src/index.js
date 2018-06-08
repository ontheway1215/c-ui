import Button from './components/button';
import Icon from './components/icon';

const components = {
  Button,
  Icon
}

const cUI = {
  ...components,
  iButton: Button
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(cUI).forEach(key => {
    Vue.component(key, cUI[key]);
  });
};

//auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports.default = module.exports;  // eslint-disable-line no-undef
