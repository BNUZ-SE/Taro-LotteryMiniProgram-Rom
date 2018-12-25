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

class RegisterView extends Component {

  static propTypes = {

  };

  static defaultProps = {

  };


  state = {
    account: '',
    nick_name: '',
    dc_password: '',
    password: '',
    canSubmitRegister: false,
  }
  handleRegisterClick =() => {
    Taro.request({
      url: 'https://www.r-share.cn/account/register',
      method: 'post',
      data: {
        account: this.state.account,
        nick_name: this.state.nick_name,
        password: this.state.password,
        update_time: Date.now(),
        create_time: Date.now(),
      },
      success: (res) => {
        console.log(res);
        if(res.data === -1) {
          console.log("账户名已存在")
        } else {
          Taro.setStorageSync("aid", res.data);
          Taro.redirectTo({
            url: '/pages/index/index_view',
          })
        }
      }
    })
  }
  handleInputChange = (keyName, value) => {
    this.setState({
      [keyName]: value,
    }, () => {
      if(this.state.account !== '' && this.state.password !== '' && this.state.dc_password !== '' && this.state.nick_name !== '') {
        this.setState({
          ...this.state,
          canSubmitRegister: true,
        })
      } else {
        this.setState({
          ...this.state,
          canSubmitRegister: false,
        })
      }
    })
  };
  render(){
    return (
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
              name='nick_name'
              title='昵称'
              type='text'
              placeholder='请输入合法昵称'
              value={this.state.nick_name}
              onChange={this.handleInputChange.bind(this, 'nick_name')}
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
            <AtInput
              name='dc_password'
              title='密码'
              type='password'
              placeholder='请确认您的密码'
              value={this.state.dc_password}
              onChange={this.handleInputChange.bind(this, 'dc_password')}
              clear
            />
          </AtForm>
        </View>
        <View className='at-row at-row__justify--around '>
          <AtButton
            circle
            type='primary'
            onClick={this.handleRegisterClick}
            disabled={!this.state.canSubmitRegister}
          >
            开始娱乐
          </AtButton>
        </View>
      </View>
    )
  }
}

export default RegisterView;
