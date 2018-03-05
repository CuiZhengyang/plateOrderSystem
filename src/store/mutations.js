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
  },
  addCommodityList:function (state,item) {
    state.commodityList.push(item)
  },
  delCommodityList(state,index){
    if(index!=-1)
      state.commodityList.splice(index, 1)
    else{
      state.commodityList.splice(0, state.commodityList.length)
    }
  },

}
export default mutations
