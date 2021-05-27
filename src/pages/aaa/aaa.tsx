/* eslint-disable react/sort-comp */
import { Component } from 'react'
import { View } from '@tarojs/components'


export default class Index extends Component {
  onLoad(){

    console.log("load aaa", asd)
  }

  componentWillMount () {
    console.log("componentWillMount aaa", this.props)
   }

  componentDidMount () {
    console.log("componentDidMount aaa")
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        aaaaaaaaaaaaaa
      </View>
    )
  }
}
