import type {FC} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

type GoldCoinSpinProps = {
  startFrame?: number;
  size?: number;
  spinSpeed?: number;
};

export const GoldCoinSpin: FC<GoldCoinSpinProps> = ({
  startFrame = 80,
  size = 180,
  spinSpeed = 16,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  // 3D-like spin (compress X when coin is edge-on).
  const spinDeg = localFrame * spinSpeed;
  const squashX = Math.abs(Math.cos((spinDeg * Math.PI) / 180));

  // Entrance animation for smooth appear.
  const opacity = interpolate(localFrame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const translateY = interpolate(localFrame, [0, 18], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 30% 28%, #fff3b0 0%, #f7d24b 26%, #d4a116 62%, #8f6200 100%)',
        border: '6px solid #f3c430',
        transform: `translateY(${translateY}px) scaleX(${Math.max(squashX, 0.12)}) rotate(${spinDeg}deg)`,
        opacity,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          color: '#7a4b00',
          fontSize: size * 0.42,
          fontWeight: 800,
          fontFamily: 'Inter, system-ui, sans-serif',
          transform: `scaleX(${1 / Math.max(squashX, 0.12)})`,
        }}
      >
        $
      </span>
    </div>
  );
};
