import Vue from 'vue';
import load from "./myLoading.vue"
const LoadingConstructor = Vue.extend(load);

const instance = new LoadingConstructor({
  el: document.createElement('div')
});

LoadingConstructor.prototype.open = (title) => {
  instance.loadType = title || 'up';

  document.body.appendChild(instance.$el);

};

LoadingConstructor.prototype.close = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

};

export default {
  open: instance.open,
  close: instance.close
};
