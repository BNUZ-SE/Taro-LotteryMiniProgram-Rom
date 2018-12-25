import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

class TabBar extends Component {

  state = {
    fetchTabBar: false,
  }
  TabUrl = [
    {
      title: 'Game',
      url: ''
    }, {
      title: 'Home',
      url: '/pages/index/index_view'
    }, {
      title: 'User',
      url: '/pages/account/account_view'
    }
  ];
  handleTabBarChange =(value) => {
    this.setState({
      fetchTabBar: !this.state.fetchTabBar
    })
    if(Taro.getStorageSync('currentTabBar') !== value ) {
      Taro.setStorageSync('currentTabBar', value)
      Taro.redirectTo({
        url: this.TabUrl[value].url,
      })
    }
  }
  render() {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: 'Game', iconType: 'star-2', text: 'new' },
          { title: 'Home', iconType: 'home' },
          { title: 'User', iconType: 'user' }
        ]}
        onClick={this.handleTabBarChange.bind(this)}
        current={Taro.getStorageSync('currentTabBar')}
      />
    )
  }
}

export default TabBar;
