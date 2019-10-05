import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Alert } from 'react-native'
import { includes, isNumber } from 'lodash'

import Color from './src/enums/Color'
import OperationKey from './src/enums/OperationKey'
import ActionKey from './src/enums/ActionKey'

import Keyboard from './src/components/Keyboard'
import Display from './src/components/Display'

const App = () => {
  const [display, setDisplay] = useState(0)
  const [left, setLeft] = useState(null)
  const [operand, setOperand] = useState(null)
  const [shouldClean, setShouldClean] = useState(false)

  const handleKeyPress = async value => {
    if (includes([ActionKey.PERCENTAGE, ActionKey.POSITIVE_NEGATIVE], value)) {
      Alert.alert('Not Implemented :(')
      return
    }

    if (value === ActionKey.AC) {
      setDisplay(0)
      setLeft(null)
      setOperand(null)
      return
    }

    if (includes(Object.values(OperationKey), value)) {
      setLeft(display)
      setShouldClean(true)

      if (value === operand) {
        setOperand(null)
        return
      }

      setOperand(value)
      return
    }

    if (value === ActionKey.EQUAL || value === OperationKey.ADD) {
      let result

      switch (operand) {
        case OperationKey.ADD:
          result = Number(left) + Number(display)
          break
        case OperationKey.SUBTRACT:
          result = Number(left) - Number(display)
          break
        case 'x':
          result = Number(left) * Number(display)
          break
        case '/':
          result = Number(left) / Number(display)
          break
      }

      setLeft(result)
      setDisplay(result.toString())
      setOperand(null)
      setShouldClean(true)
      return
    }

    if (display === 0) {
      setDisplay(value)
      return
    }

    if (shouldClean) {
      setDisplay(value)
      setShouldClean(false)
      return
    }

    if (display.length === 9 && isNumber(value)) {
      return
    }

    setDisplay(`${display}${value}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Display value={display} />

      <Keyboard onKeyPress={handleKeyPress} selectedKey={operand} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.SCREEN_BACKGROUND,
    flex: 1,
  },
})

export default App
