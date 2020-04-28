import React from 'react';
import { Text } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = (props) => {
    const { fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    const style = props.fontStyle || {
        fontFamily,
        fontSize,
        color: onBackgroundTextColor,
    };
    return React.createElement(Text, Object.assign({ style: style }, props));
};
//# sourceMappingURL=CountryText.js.map