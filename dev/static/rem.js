// 不会经过webpack构建，所以用ES5写法
(function () {
  var docEl = document.documentElement
  // 设置1rem为屏幕宽1/10
  function setRemUiit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUiit()
  window.addEventListener('resize', setRemUiit)
})()