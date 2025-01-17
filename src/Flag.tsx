import React, { memo } from 'react'
import { Emoji } from './Emoji'
import { CountryCode } from './types'
import { useContext } from './CountryContext'
import { useAsync } from 'react-async-hook'
import {
  Image,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import flags from './Flags'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  imageFlag: {
    resizeMode: 'contain',
    width: 28,
    height: 18,
  },
})

interface FlagType {
  countryCode: CountryCode
  withEmoji?: boolean
  withFlagButton?: boolean
  flagSize: number
}

const ImageFlag = memo(({ countryCode, flagSize }: FlagType) => {
  // const { getImageFlagAsync } = useContext()
  // const asyncResult = useAsync(getImageFlagAsync, [countryCode])
  // if (asyncResult.loading) {
  //   return <ActivityIndicator size={'small'} />
  // }
  if (flags[countryCode]) {
    return (
      <Image
        style={[
          {
            borderWidth: 0.5,
            borderColor: '#e7ecf2',
            resizeMode: 'cover',
            height: flagSize,
            width: flagSize * 1.5,
          },
        ]}
        source={flags[countryCode]}
      />
    )
  } else {
    return <EmojiFlag {...{ countryCode, flagSize }} />
  }
})

const EmojiFlag = memo(({ countryCode, flagSize }: FlagType) => {
  const { getEmojiFlagAsync } = useContext()
  const asyncResult = useAsync(getEmojiFlagAsync, [countryCode])

  if (asyncResult.loading) {
    return <ActivityIndicator size={'small'} />
  }
  return (
    <Text
      style={[styles.emojiFlag, { fontSize: flagSize }]}
      allowFontScaling={false}
    >
      <Emoji {...{ name: asyncResult.result! }} />
    </Text>
  )
})

export const Flag = ({
  countryCode,
  withEmoji,
  withFlagButton,
  flagSize,
}: FlagType) =>
  withFlagButton ? (
    <View style={styles.container}>
      {withEmoji ? (
        <EmojiFlag {...{ countryCode, flagSize }} />
      ) : (
        <ImageFlag {...{ countryCode, flagSize }} />
      )}
    </View>
  ) : null

Flag.defaultProps = {
  withEmoji: true,
  withFlagButton: true,
}
