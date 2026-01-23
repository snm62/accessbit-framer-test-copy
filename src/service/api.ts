import { ScriptCategory, SaveCategoriesResponse, AppData } from '../types/types';
import { ScriptRegistrationRequest, CodeApplication } from '../types/types';

// Legacy stub: script registration is handled by the worker now.
export const customCodeApi = {
  registerScript: async (_params: ScriptRegistrationRequest, _token: string) => {
    return { success: true, message: 'Script registration handled by worker' };
  },
  registerAnalyticsBlockingScript: async (_token: string) => {
    return { success: true, message: 'Script registration handled by worker' };
  },
  getScripts: async (_siteId: string, _token: string) => {
    return { success: true, scripts: [] };
  },
  applyScript: async (_params: CodeApplication, _token: string) => {
    return { success: true, message: 'Script application handled by worker' };
  },
};
