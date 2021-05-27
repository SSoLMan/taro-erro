import { Component } from 'react'
import { View } from '@tarojs/components'


export default class Index extends Component {

  componentWillMount () {
    console.log("componentWillMount bbb", this.props)
   }

  componentDidMount () {
    console.log("componentDidMount nbbb")
   }
   onLoad(opt){
     console.log("bbb onload",opt,this.props)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        bbbbbbbbbb
      </View>
    )
  }
}

Index.defaultProps = {
dA:1,
dB:2
}