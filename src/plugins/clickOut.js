import Vue from "vue";

Vue.directive("clickOut", {
  bind: function(el, binding, vnode) {
    el.clickOutEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutEvent);
  }
});
