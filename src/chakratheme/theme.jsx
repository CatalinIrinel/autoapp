import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    gradientBg: 'linear-gradient(180deg , #000 -40%, #334868 )',
    brand: '#334868',
    secondary: '#3a034e',
    titleLight: '#e1e1e1',
    titleDark: '#1d3a66',
    subtitleDark: '#00c96b',
    subtitleLight: '#007c42',
    textDark: '#1b1b1b',
    textLight: '#e4e4e4',
  },
  breakpoints: {
    sm: '40rem', //640px
    md: '48rem', //768px
    lg: '64rem', //1024px
    xl: '80rem', //1280px
    '2xl': '96rem', //1536px
  },
});
