import type {FC} from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {smoothProgress} from '@/utils';

type SearchBarMotionProps = {
  query?: string;
  startFrame?: number;
  typingDuration?: number;
  width?: number;
};

export const SearchBarMotion: FC<SearchBarMotionProps> = ({
  query = 'Remotion animated search bar',
  startFrame = 120,
  typingDuration = 180,
  width = 980,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  // Entrance animation (fade + slide).
  const opacity = interpolate(localFrame, [0, 24], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(localFrame, [0, 24], [20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Typing progress controls how many characters are visible.
  const typingProgress = smoothProgress(localFrame, 12, typingDuration, Easing.linear);
  const visibleChars = Math.floor(query.length * typingProgress);
  const typedText = query.slice(0, visibleChars);

  // Cursor blink effect.
  const cursorOn = Math.floor(frame / 20) % 2 === 0;

  return (
    <div
      style={{
        width,
        height: 88,
        borderRadius: 44,
        border: '1px solid rgba(255,255,255,0.25)',
        backgroundColor: 'rgba(9, 14, 30, 0.72)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 30px',
        boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(8px)',
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <span
        style={{
          fontSize: 34,
          marginRight: 18,
          opacity: 0.9,
        }}
      >
        🔎
      </span>

      <p
        style={{
          margin: 0,
          color: '#ffffff',
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          fontSize: 38,
          letterSpacing: 0.4,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'clip',
          flex: 1,
        }}
      >
        {typedText}
        <span style={{opacity: cursorOn ? 1 : 0}}>|</span>
      </p>
    </div>
  );
};
