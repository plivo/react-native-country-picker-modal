import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { useTheme } from './CountryTheme'

export const CountryText = (props: any & { children: ReactNode }) => {
  const { fontFamily, fontSize, onBackgroundTextColor } = useTheme()
  const style = props.fontStyle || {
    fontFamily,
    fontSize,
    color: onBackgroundTextColor,
  }
  return <Text style={style} {...props} />
}
