
import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../src/store/index'

interface Props {
  children: any
}

const StoreWrapper: React.SFC<Props> = (props) => {
  return <Provider store={store} >{props.children}</Provider>
}

export default StoreWrapper
