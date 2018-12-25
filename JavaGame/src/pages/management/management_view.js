import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'


class ManagementView extends Component {

  config = {
    navigationBarTitleText: '管理'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

export default ManagementView;
