import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {smoothProgress} from '../utils/animation';

type LoadingBarProps = {
  startFrame?: number;
  endFrame?: number;
  width?: number;
};

export const LoadingBar: FC<LoadingBarProps> = ({
  startFrame = 0,
  endFrame = 360,
  width = 1200,
}) => {
  const frame = useCurrentFrame();

  // Smoothly progress from 0 to 100% between startFrame and endFrame.
  const progress = smoothProgress(frame, startFrame, endFrame);

  // Add a subtle highlight that moves across the bar for a premium look.
  const shimmerX = interpolate(frame % 90, [0, 90], [-200, width + 200], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width,
        height: 28,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.16)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: '100%',
          borderRadius: 999,
          background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
          boxShadow: '0 0 18px rgba(0, 153, 255, 0.45)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: shimmerX,
          width: 200,
          height: '100%',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)',
        }}
      />
    </div>
  );
};
