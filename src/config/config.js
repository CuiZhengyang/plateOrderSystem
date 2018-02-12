var rootdir = "/bioauth-core-access-web/rest/wx"

var config = {
  url: {
    beforeLogin: rootdir + "/isLogin",
    sendMobile: rootdir + "/getMsgCode",
    login: rootdir + "/submitCode",
    idCheck: rootdir + "/realAuth",
    shengWuRenZheng: rootdir + "/bioAuth",
    addCard: rootdir + "/addCard",
    servContent: rootdir + "/overview",
    cardList: rootdir + "/cardList",
    delCard: rootdir + "/delCard",
    setDefaultCard: rootdir + "/setDefaultCard",
    merList: rootdir + "/merList",
    merAuth: rootdir + "/merAuth",
    rmAuth: rootdir + "/rmAuth",
    consumRecord: rootdir + "/consumRecord",
    getweixin: rootdir + "/getToken",
  },
  const: {
    pagesize: 15,
    silent: false,//  静默日志  在上线的时候设为true
    // performance:true,//在浏览器开发工具中启用对组件初始化、编译、渲染和打补丁的性能追踪。
    cookName: "WXSESSIONID"
  },
  resCode: {
    success: 1000
  },
  functions: {
    getCookie(cname) {
      var name = cname + '='
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return undefined;
    },
    trim(str) {
      return str.replace(/\s|\xA0/g, "");
    }
  }
}
export default config;
