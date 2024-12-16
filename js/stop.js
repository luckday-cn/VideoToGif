const currentRoute = window.location.hash;
if (currentRoute != "#tjs") {
  console.log("--------", document.body)
  //网站禁止右键
  document.body.oncontextmenu = function () {
    self.event.returnValue = false;
  };
  //网站禁止选择文字
  document.body.onselectstart = function () {
    self.event.returnValue = false;
  };
 
  // 键盘事件
  window.onkeydown =
    window.onkeyup =
    window.onkeypress =
      function (event) {
        // 判断是否按下F12，F12键码为123 u为85 s为83 c为67 i为73
        if (
          event.keyCode == 123 ||
          (event.ctrlKey && event.keyCode == 85) ||
          (event.ctrlKey && event.keyCode == 83) ||
          (event.ctrlKey && event.keyCode == 67) ||
          (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
          (event.ctrlKey && event.shiftKey && event.keyCode == 67) ||
          (event.shiftKey && event.keyCode == 121)
        ) {
          event.preventDefault(); // 阻止默认事件行为
          window.event.returnValue = false;
        }
      };
 
  //禁用调试工具
  var threshold = 160; // 打开控制台的宽或高阈值每秒检查一次;
  var check = setInterval(function () {
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      // 如果打开控制台，则跳转页面
      window.location.replace("about:blank");
      // 关闭当前页面
      self.opener = null;
      self.close();
    }
  }, 200);
 
  //屏蔽复制
  document.oncopy = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (
        !(
          (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
          the.tagName == "TEXTAREA"
        )
      ) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
 
  //屏蔽剪贴
  document.oncut = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (
        !(
          (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
          the.tagName == "TEXTAREA"
        )
      ) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
  //屏蔽粘贴
  document.onpaste = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (
        !(
          (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
          the.tagName == "TEXTAREA"
        )
      ) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
}