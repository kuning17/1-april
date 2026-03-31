import {Config} from '@remotion/cli/config';

// Central place for project-wide video / rendering defaults.
Config.setVideoImageFormat('jpeg');
Config.setCodec('h264');
Config.setPixelFormat('yuv420p');
