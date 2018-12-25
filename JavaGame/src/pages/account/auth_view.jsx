import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtActivityIndicator, AtForm, AtInput, AtTabs, AtTabsPane } from 'taro-ui'
import LoginView from "../../components/account/auth/login";
import RegisterView from "../../components/account/auth/register";


class AuthView extends Component {

  config = {
    navigationBarTitleText: '性感121 在线发牌'
  }
  state = {
    onReady: false,
    currentTab: 0,
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      ...this.state,
      onReady: true,
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleTabChange = (value) => {
    this.setState({
      ...this.state,
      currentTab: value,
    })
  }
  render () {
    const tabList = [{ title: '登录' }, { title: '加入我们' }];
    return (
      <View className='container'>
        {!this.state.onReady &&  <AtActivityIndicator mode='center'>123 </AtActivityIndicator>}
        {this.state.onReady &&
          <AtTabs current={this.state.currentTab} tabList={tabList} onClick={this.handleTabChange.bind(this)}>
            <AtTabsPane current={this.state.currentTab} index={0} >
              <LoginView />
            </AtTabsPane>
            <AtTabsPane current={this.state.currentTab} index={1} >
              <RegisterView />
            </AtTabsPane>
          </AtTabs>
        }
      </View>
    )
  }
}

export default AuthView;
