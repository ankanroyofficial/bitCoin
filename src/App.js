import React from 'react'
import { registerRootComponent } from "expo"
import StackNavi from "./navigation/StackNavi"
function App() {
  return (
    <StackNavi />
  )
}
export default registerRootComponent(App)