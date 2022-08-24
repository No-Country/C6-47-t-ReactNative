// Se deteminan las dimensiones del movil
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const CARD = {
  WIDTH: width * 0.2,
  HEIGHT: height * 0.1,
  BORDER_RADIUS: 5,
  OUT_OF_SCREEN: width + 0.4 * width
}

export const COLORS = {
  like: '#00eda6',
  nope: '#ff006f'
}

export const ACTION_OFFSET = 200
