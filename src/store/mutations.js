import Vue from 'vue'

const mutations = {
  writeUserInfo(state,userinfo){
    state.name=userinfo.name;
    state.tel=userinfo.tel;
    state.province=userinfo.province;
    state.city=userinfo.city;
    state.detailAddr=userinfo.detailAddr;
  },
  addBoardList:function (state,item) {
    state.boardList.push(item)
  },
  delBoardList(state,index){
    if(index!=-1)
      state.boardList.splice(index, 1)
    else{
      state.boardList.splice(0, state.boardList.length)
    }
  }

}
export default mutations
