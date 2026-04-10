import {Easing, interpolate} from 'remotion';

/**
 * Reusable helper to map a frame range to a smooth 0..1 progress value.
 */
export const smoothProgress = (
  frame: number,
  startFrame: number,
  endFrame: number,
  easing: ((input: number) => number) = Easing.bezier(0.22, 1, 0.36, 1)
): number => {
  return interpolate(frame, [startFrame, endFrame], [0, 1], {
    easing,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

/**
 * Simple fade utility with configurable range.
 */
export const fadeInOut = (
  frame: number,
  fadeInEnd: number,
  fadeOutStart: number,
  totalFrames: number
): number => {
  if (frame <= fadeInEnd) {
    return interpolate(frame, [0, fadeInEnd], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  }

  if (frame >= fadeOutStart) {
    return interpolate(frame, [fadeOutStart, totalFrames], [1, 0], {
      easing: Easing.in(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  }

  return 1;
};
