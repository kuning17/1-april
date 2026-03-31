import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {LoadingBar} from '../components/LoadingBar';
import {TextReveal} from '../components/TextReveal';

export const MainComposition = () => {
  const frame = useCurrentFrame();

  // Animate subtle background movement to avoid static visuals.
  const gradientShift = interpolate(frame, [0, 600], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${30 + gradientShift * 0.4}% ${35 + gradientShift * 0.2}%, #1a2a6c 0%, #0a0f1f 48%, #03040a 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AbsoluteFill
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 36,
        }}
      >
        <TextReveal text="Generating Motion Graphics" />

        <LoadingBar startFrame={40} endFrame={520} width={1100} />

        <p
          style={{
            margin: 0,
            color: 'rgba(255,255,255,0.82)',
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            fontSize: 38,
            letterSpacing: 1,
          }}
        >
          Exporting MP4 · 1920×1080 · 60 FPS
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
