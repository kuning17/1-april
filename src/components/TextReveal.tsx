import type {FC} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {fadeInOut} from '@/utils';

type TextRevealProps = {
  text: string;
  startFrame?: number;
  inDuration?: number;
  outStart?: number;
  totalFrames?: number;
};

export const TextReveal: FC<TextRevealProps> = ({
  text,
  startFrame = 30,
  inDuration = 70,
  outStart = 500,
  totalFrames = 600,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  // Fade + slide from below with smooth easing.
  const opacity = fadeInOut(localFrame, inDuration, outStart - startFrame, totalFrames - startFrame);
  const translateY = interpolate(localFrame, [0, inDuration], [60, 0], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <h1
      style={{
        margin: 0,
        color: '#ffffff',
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        fontSize: 94,
        letterSpacing: 1,
        fontWeight: 700,
        opacity,
        transform: `translateY(${translateY}px)`,
        textShadow: '0 10px 35px rgba(0,0,0,0.35)',
      }}
    >
      {text}
    </h1>
  );
};
