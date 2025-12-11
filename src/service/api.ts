import { WORKER_BASE_URL } from '../util/constants';
import { ScriptCategory, SaveCategoriesResponse, AppData } from '../types/types';
import { ScriptRegistrationRequest, CodeApplication } from "../types/types";


export const customCodeApi = {
  // Legacy methods for compatibility (mapped to new worker)
  registerScript: async (params: ScriptRegistrationRequest, token: string) => {
    // This method is no longer used - scripts are handled by the worker directly
    return { success: true, message: 'Script registration handled by worker' };
  },

  registerAnalyticsBlockingScript: async (token: string) => {
    // This method is no longer used - scripts are handled by the worker directly
    return { success: true, message: 'Script registration handled by worker' };
  },

  getScripts: async (siteId: string, token: string) => {
    // This method is no longer used - scripts are handled by the worker directly
    return { success: true, scripts: [] };
  },

  applyScript: async (params: CodeApplication, token: string) => {
    // This method is no longer used - scripts are handled by the worker directly
    return { success: true, message: 'Script application handled by worker' };
  },
};