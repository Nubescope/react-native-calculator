import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Color from '../enums/Color'

const formatInteger = value => {
  const parts = value.toString().split('.')

  const natural = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const decimal = parts[1] ? `.${parts[1]}` : ''
  return `${natural}${decimal}`
}

const Display = ({ value }) => (
  <View style={styles.container}>
    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
      {formatInteger(value)}
    </Text>
  </View>
)

export default Display

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 40,
  },

  text: {
    fontSize: 80,
    color: Color.RESULT_TEXT,
  },
})
