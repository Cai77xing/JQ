// 沙箱模式
(function (window) {
  //1获取页面元素
  // 5 如果构造函数jQuery直接有返回值,就不需要new了,将jQuery设置成工厂函数
  function jQuery(selector) {
    // 6 但是这样获取的元素已经是构造函数init的实例对象,已经不再继承jQuery原型里面的方法,所以需要在new实例对象之前,将init的原型指向jQuery;
    init.prototype = jQuery.prototype;
    return new init(selector);
  }
  
  jQuery.prototype = {
    version: '1.12',
    sayHi: function () {
      console.log(1)
    },
    // 7 给jQuery里面添加方法,使用混入式继承
    extend: function (obj) {
      for (var k in obj) {
        this[k] = obj[k]
      }
    }
    
  }
  jQuery.prototype.extend({
      addClass: function (cname) {
        for (var i = 0; i < this.length; i++) {
         return  this[i].classList.add(cname)
        }
      },
    // 隐士迭代
      hasClass: function (cname) {
         return this[0].classList.contains(cname);
      
          }
    }
  )
  
  // 3 jQuery这段代码太长了,可以拿一个简写的字母代替
  window.$ = window.jQuery = jQuery;
  
  // 4 每次获取元素都需要new.
  function init(selector) {
    var elements = document.querySelectorAll(selector);
    
    // 2将获取到的所有元素,放在jQuery对象中,并是以为数组的方式
    for (var i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
  }
})(window)