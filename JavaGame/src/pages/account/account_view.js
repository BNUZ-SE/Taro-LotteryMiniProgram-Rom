import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {  AtAvatar } from 'taro-ui'

import '../../styles/account/account.scss'
import TabBar from "../../components/layout/tab_bar";
class AccountView extends Component {

  config = {
    navigationBarTitleText: '我的账户'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <View className='account-view'>

          <AtAvatar text='用户' />
          <TabBar />
        </View>
      </View>
    )
  }
}

export default AccountView;
