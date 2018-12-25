import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar, AtGrid } from 'taro-ui'
import PathRegexp from 'path-to-regexp'
import '../../styles/index/index.scss'
import TabBar from "../../components/layout/tab_bar";
import AdSwiper from "../../components/widgets/ad_swiper";

export default class IndexView extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    let path = PathRegexp.compile('/account?aid=:aid');
    Taro.request({
      url: "https://www.r-share.cn" + path({ aid: Taro.getStorageSync("aid")}),
      method: 'get',
      success: (res) => {
        console.log(res)
      }
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const GridData = [
      {
        key: "activity",
        value: '活动管理'
      },{
        key: "prize",
        value: '奖品管理',
      }, {
        key: ""
      }
    ];
    return (
      <View className='container'>
          <AdSwiper />
          <AtGrid data={GridData} columnNum={3} />
        <TabBar />
      </View>
    )
  }
}

