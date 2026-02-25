import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './types';

const CheckIcon = ({ size = 20, color = '#08891D' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M16.6667 5L7.50001 14.1667L3.33334 10"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckIcon;
