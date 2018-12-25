import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import '../../styles/index/welcome.scss'


class WelcomeView extends Component {

  config = {
    navigationBarTitleText: '抽奖小游戏'
  }

  componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  state = {
    isLoading: false,
  }
  handleClick = () => {
    const hasLogin = Taro.getStorageSync('hasLogin');
    if(hasLogin) {
      Taro.redirectTo({
        url: '/pages/index/index_view'
      })
    } else {
      Taro.redirectTo({
        url: '/pages/account/auth_view'
      })
    }
  }
  render () {
    return (
      <View className='container'>
        <View className='welcome-view'>
          <AtButton
            onClick={this.handleClick.bind(this)}
            type='primary'
            loading={this.state.isLoading}
          >
            澳门DU场 在线娱乐
          </AtButton>
        </View>
      </View>
    )
  }
}

export default WelcomeView;
