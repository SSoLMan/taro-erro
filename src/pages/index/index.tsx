import { Component } from 'react'
import { View, Text,Navigator } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Navigator url='/pages/aaa/aaa?aaa=1' >aaa</Navigator>
      <Navigator url='/pages/bbb/bbb?bbb=2' >bbb</Navigator>
      </View>
    )
  }
}
