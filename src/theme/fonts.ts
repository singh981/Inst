import {TextStyle} from 'react-native';

const size = {
    xs: 10,
    sm: 12,
    default: 14,
    md: 16,
    xmd: 18,
    lg: 20,
    xl: 24,
    xxl: 30,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
    light: '200',
    thin: '400',
    medium: '500',
    regular: 'normal',
    semi: '600',
    heavy: '800',
    full: '900',
    bold: 'bold',
    normal: 'normal',
};

export {size, weight};
