import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import TabBar from "../../components/layout/tab_bar";


export default class GameView extends Component {

  config = {
    navigationBarTitleText: '欢乐大抽奖'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>

        <TabBar />
      </View>
    )
  }
}

