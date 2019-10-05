import React, { useCallback } from 'react'

import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'

const BUTTON_MARGIN = 5
const BUTTON_WIDTH = Math.round(Dimensions.get('window').width / 4) - BUTTON_MARGIN * 4

const Key = ({ textColor, backgroundColor, value, size, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor },
        size === Key.Size.XL && { width: (BUTTON_WIDTH + BUTTON_MARGIN) * 2 },
        selected && { backgroundColor: textColor },
      ]}
      onPress={useCallback(() => onPress(value), [value, onPress])}
    >
      <Text style={[styles.text, { color: textColor }, selected && { color: backgroundColor }]}>{value}</Text>
    </TouchableOpacity>
  )
}

Key.Size = Object.freeze({
  DEFAULT: 'DEFAULT',
  XL: 'XL',
})

const styles = StyleSheet.create({
  container: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    borderRadius: BUTTON_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: BUTTON_MARGIN,
  },

  text: {
    fontSize: 35,
    fontWeight: '500',
  },
})

export default Key
