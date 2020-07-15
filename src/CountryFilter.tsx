import React from 'react'
import { TextInput, StyleSheet, Platform } from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export interface CountryFilterProps {
  fontSize: number,
  fontFamily: string
}

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    onBackgroundTextColor
  } = useTheme()
  const { fontSize, fontFamily } = props
  return (
    <TextInput
      testID='text-input-country-filter'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor }
      ]}
      {...props}
    />
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
  placeholder: 'Enter country name',
}
