/**
 * App与H5通信桥接工具
 */
(function () {
  // 检测是否在App环境中
  const isInApp = window.location.href.includes('inAppShell=true');
  console.log('App桥接初始化，是否在App环境中:', isInApp);

  // 向App发送消息
  function postMessageToApp (data) {
    if (isInApp) {
      try {
        console.log('发送消息到App:', data);

        // 方式1: 使用标准的 postMessage API
        window.parent.postMessage({
          type: 'AppBridge',
          data: data
        }, '*');

        // 方式2: 直接发送数据
        window.parent.postMessage(data, '*');

        // 方式3: 使用 uni 提供的方法 (如果在 uni 环境中)
        if (window.uni && window.uni.postMessage) {
          try {
            window.uni.postMessage({
              data: data
            });
          } catch (e) {
            console.error('uni.postMessage 失败:', e);
          }
        }

        return true;
      } catch (error) {
        console.error('发送消息失败:', error);
        return false;
      }
    } else {
      console.log('不在App环境中，消息发送失败', data);
      return false;
    }
  }

  // 请求登录
  function requestLogin (redirectUrl) {
    return postMessageToApp({
      type: 'needLogin',
      url: redirectUrl || window.location.href
    });
  }

  // 设置标题
  function setTitle (title) {
    return postMessageToApp({
      type: 'setTitle',
      title: title
    });
  }

  // 在 AppBridge 对象中添加全屏模式切换方法
  function setFullscreen (fullscreen) {
    return postMessageToApp({
      type: 'setFullscreen',
      fullscreen: !!fullscreen
    });
  }

  // 在 AppBridge 对象中添加返回按钮控制方法
  function setBackButton (enabled, callback) {
    const callbackId = 'back_' + Date.now();

    // 存储回调函数
    if (typeof callback === 'function') {
      window[callbackId] = callback;
    }

    return postMessageToApp({
      type: 'setBackButton',
      enabled: !!enabled,
      callbackId: typeof callback === 'function' ? callbackId : null
    });
  }

  // 暴露给全局使用
  window.AppBridge = {
    isInApp: isInApp,
    postMessageToApp: postMessageToApp,
    requestLogin: requestLogin,
    setTitle: setTitle,
    setFullscreen: setFullscreen,
    setBackButton: setBackButton
  };

  // 自动检测登录按钮并绑定事件
  document.addEventListener('DOMContentLoaded', function () {
    if (isInApp) {
      // 查找所有登录按钮并绑定事件
      const loginButtons = document.querySelectorAll('.login-btn, [data-action="login"]');
      loginButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          requestLogin();
        });
      });

      console.log('App桥接初始化完成，已在App环境中');
    }
  });
})(); 