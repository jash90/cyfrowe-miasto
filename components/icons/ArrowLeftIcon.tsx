import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

const ArrowLeftIcon = ({ size = 20, color = '#FFFFFF' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16666"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeftIcon;
