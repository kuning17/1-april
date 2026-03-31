import path from 'node:path';
import {Config} from '@remotion/cli/config';

// Central place for project-wide video / rendering defaults.
Config.setVideoImageFormat('jpeg');
Config.setCodec('h264');
Config.setPixelFormat('yuv420p');

// Enable absolute imports like "@/components" in Remotion bundling.
Config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...currentConfiguration.resolve?.alias,
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
  };
});
