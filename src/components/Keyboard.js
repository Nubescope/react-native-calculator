import React from 'react'
import { StyleSheet, View } from 'react-native'
import { times, flatten } from 'lodash'

import Color from '../enums/Color'
import Key from './Key'

const COMPLEX_STYLE = { textColor: Color.COMPLEX_OPERATOR_TEXT, backgroundColor: Color.COMPLEX_OPERATOR_BACKGROUND }
const OPERATOR_STYLE = { textColor: Color.OPERATOR_TEXT, backgroundColor: Color.OPERATOR_BACKGROUND }
const DIGIT_STYLE = { textColor: Color.DIGIT_TEXT, backgroundColor: Color.DIGIT_BACKGROUND }

const KEYS = flatten([
  { value: 'AC', ...COMPLEX_STYLE },
  { value: '+/-', ...COMPLEX_STYLE },
  { value: '%', ...COMPLEX_STYLE },
  { ...OPERATOR_STYLE, value: '/' },

  ...times(3).map(value => ({ value: value + 7, ...DIGIT_STYLE })),
  { value: 'x', ...OPERATOR_STYLE },

  ...times(3).map(value => ({ value: value + 4, ...DIGIT_STYLE })),
  { value: '-', ...OPERATOR_STYLE },

  ...times(3).map(value => ({ value: value + 1, ...DIGIT_STYLE })),
  { value: '+', ...OPERATOR_STYLE },

  { value: '0', size: Key.Size.XL, ...DIGIT_STYLE },
  { value: '.', ...DIGIT_STYLE },
  { value: '=', ...OPERATOR_STYLE },
])

const Keyboard = ({ onKeyPress, selectedKey }) => (
  <View style={styles.keyboard}>
    {KEYS.map(props => (
      <Key {...props} key={props.value} onPress={onKeyPress} selected={props.value === selectedKey} />
    ))}
  </View>
)

export default Keyboard

const styles = StyleSheet.create({
  keyboard: {
    flex: 1.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
