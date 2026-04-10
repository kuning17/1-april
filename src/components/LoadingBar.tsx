import type {FC} from 'react';
import {useCurrentFrame} from 'remotion';
import {smoothProgress} from '@/utils';

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

  return (
    <div
      style={{
        width,
        height: 24,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.16)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: '100%',
          borderRadius: 999,
          background: 'linear-gradient(90deg, #00D1FF 0%, #0066FF 100%)',
        }}
      />
    </div>
  );
};
