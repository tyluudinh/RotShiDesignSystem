export const baseColors = {
  white: 'white',
  primary: '#437EF7',
  failure: '#F04438',
  success: '#41AE49',
  warning: '#EEA23E',
  secondary: '#574EFA',
  gray: '#2C3444',
  neutral: '#EAEBF0'
}

export const additionalColors = {}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  background: '#FAF9FA',
  secondary: '#7645D9',
  secondary80: '#7645D980',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  backgroundAlt2: 'rgba(255, 255, 255, 0.7)',
  cardBorder: '#E7E3EB',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#280D5F',
  text99: '#280D5F99',
  textDisabled: '#BDC2C4',
  textSubtle: '#7A6EAA',
  disabled: '#E9EAEB',
}


export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#9A6AFF',
  secondary80: '#9A6AFF80',
  background: '#08060B',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',
  // primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#F4EEFF',
  text99: '#F4EEFF99',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  disabled: '#524B63',
}
