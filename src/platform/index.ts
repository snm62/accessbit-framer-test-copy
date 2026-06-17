import type { PlatformAdapter } from './types';
import { framerAdapter } from './framer';

// To target a different platform, swap this import and assignment.
export const platform: PlatformAdapter = framerAdapter;
