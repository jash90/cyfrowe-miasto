import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const NextIcon = ({ size = 12, color = '#686C76' }: IconProps) => (
  <Svg width={(size * 7) / 12} height={size} viewBox="0 0 7 12" fill="none">
    <Path
      d="M0.75 10.75L5.75 5.75L0.75 0.75"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NextIcon;
