import {Composition} from 'remotion';
import {MainComposition} from './compositions/MainComposition';

export const Root = () => {
  return (
    <>
      <Composition
        id="MainComposition"
        component={MainComposition}
        durationInFrames={600} // 10s * 60fps
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
