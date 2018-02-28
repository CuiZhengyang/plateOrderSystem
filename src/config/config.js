var rootdir = "/plateOrderSystem/server/";
import {Confirm, Alert, Toast, Notify, Loading} from 'vue-ydui/dist/lib.rem/dialog';
var config = {
  url: {
    login: rootdir + "login.php",
    getAllBoards:rootdir+"getAllBoards.php",
    changeProduct:rootdir+"changeProduct.php",
    changeMetal:rootdir+"changeMetal.php",
    addBoardOrder:rootdir+"addBoardOrder.php",
  },
  const: {
    pagesize: 15,
    silent: false,//  静默日志  在上线的时候设为true
    // performance:true,//在浏览器开发工具中启用对组件初始化、编译、渲染和打补丁的性能追踪。
    cookName: "lsbcSessionID"
  },
  resCode: {
    success: '000000',
    rlogin:'000001'
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
    },
    tostNotify(str){
      Toast({mes: str, timeout: 1000})
    }
  }
}
export default config;
