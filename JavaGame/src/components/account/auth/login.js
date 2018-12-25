import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton} from 'taro-ui'
import PropTypes from 'prop-types'
import '../../../styles/account/auth.scss'
import AdSwiper from "../../widgets/ad_swiper";


if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

class LoginView extends Component {

  static propTypes = {

  };

  static defaultProps = {

  };

  state = {
    account: '',
    password: '',
    canSubmitLogin: false,
  };
  handleInputChange = (keyName, value) => {
    this.setState({
      ...this.state,
      [keyName]: value,
    },() => {
      if(this.state.password !=='' && this.state.account !== '') {
        this.setState({
          ...this.state,
          canSubmitLogin: true,
        })
      } else {
        this.setState({
          ...this.state,
          canSubmitLogin: false,
        })
      }
    })
  };
  handleLoginClick =() => {
    Taro.request({
      url: 'https://www.r-share.cn/account/login',
      method: 'post',
      data: {
        account: this.state.account,
        password: this.state.password,
      },
      success: (res) => {
        console.log(res);
        if(res.data === 0) {
          console.log("账户不存在")
        } else if(res.data === -1) {
          console.log("密码错误")
        } else {
          console.log("登录成功")
          Taro.setStorageSync("aid", res.data);
          Taro.redirectTo({
            url: '/pages/index/index_view',
          })
        }
      }
    })

  };
  render() {
    return (
      <View>
        <AdSwiper />
        <View>
          <View className='at-row at-row__justify--around '>
            <AtForm>
              <AtInput
                name='account'
                title='账户名'
                type='text'
                placeholder='请输入账户'
                value={this.state.account}
                onChange={this.handleInputChange.bind(this, 'account')}
                clear
              />
              <AtInput
                name='password'
                title='密码'
                type='password'
                placeholder='请输入密码'
                value={this.state.password}
                onChange={this.handleInputChange.bind(this, 'password')}
                clear
              />
            </AtForm>
          </View>

          <View className='at-row at-row__justify--around '>
            <AtButton
              circle
              type='primary'
              onClick={this.handleLoginClick}
              disabled={!this.state.canSubmitLogin}
            >
              继续娱乐～
            </AtButton>
          </View>
          <View className='at-row at-row__justify--around '>
            <View className='forget-password' onClick={this.handleForgetClick}>
              忘记密码
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginView
