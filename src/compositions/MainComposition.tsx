import {AbsoluteFill} from 'remotion';
import {LoadingBar, SearchBarMotion, TextReveal} from '@/components';

export const MainComposition = () => {
  return (
    <AbsoluteFill
      style={{
        // Static gradient is cheaper to render than frame-by-frame animated background.
        background: 'radial-gradient(circle at 40% 38%, #1a2a6c 0%, #0a0f1f 48%, #03040a 100%)',
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

        <SearchBarMotion
          query="How to build animated videos with Remotion"
          startFrame={110}
          typingDuration={250}
          width={1200}
        />

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
