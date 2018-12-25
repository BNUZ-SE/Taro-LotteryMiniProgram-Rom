import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtInput, AtForm, AtButton, } from 'taro-ui'
import PropTypes from 'prop-types'
import '../../styles/widgets/Adswiper.scss'
class AdSwiper extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }
  render() {
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          interval={3000}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='swiper-text'>
              <Text>
                广告招租 +vx:Q8164856
              </Text>

            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-text'>
              <Text>
                售卖CZJ +vx:Q8164856
              </Text>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-text'>
              <Text>
                广告位出租！！！！！大甩卖！！团购打折 +vx:Q8164856
              </Text>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default AdSwiper;
