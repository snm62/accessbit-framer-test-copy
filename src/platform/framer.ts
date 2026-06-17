/* =============================================================================
 *  platform/framer.ts  —  FRAMER IMPLEMENTATION OF `PlatformAdapter`
 * =============================================================================
 *
 *  This is the ONLY file in the codebase that imports `framer-plugin`. Every
 *  Framer-specific call lives here. The rest of the app talks to the
 *  `PlatformAdapter` interface — so swapping to Webflow / WordPress / Wix /
 *  Shopify is "write a sibling file with the same shape, change the import
 *  in `platform/index.ts`".
 *
 *  Mapping (Framer SDK → adapter method)
 *  --------------------------------------
 *    framer.getProjectInfo()              → getSiteId() / getSiteInfo()
 *    framer.getPublishInfo()              → getPublishInfo() / getProductionUrl() / getStagingUrl()
 *    framer.isAllowedTo("setCustomCode")  → canInjectScript()
 *    framer.setCustomCode(...)            → injectScript(...)
 *    framer.showUI(...)                   → showPluginUI(...)
 *
 *  Do NOT add product/business logic here — this file is the platform shim.
 * ===========================================================================*/

import { framer } from "framer-plugin";
import type { PlatformAdapter, PluginUIOptions, PublishInfo, ScriptInjection, SiteInfo } from "./types";

export const framerAdapter: PlatformAdapter = {
  name: "framer",

  async getSiteId(): Promise<string> {
    // Framer's project id doubles as our `siteId` in every backend call.
    const info = await framer.getProjectInfo();
    return info.id;
  },

  async getSiteInfo(): Promise<SiteInfo> {
    const info = await framer.getProjectInfo();
    return {
      siteId: info.id,
      siteName: info.name ?? undefined,
    };
  },

  async getPublishInfo(): Promise<PublishInfo> {
    const info = await framer.getPublishInfo();
    return {
      productionUrl: info?.production?.url ?? null,
      stagingUrl: info?.staging?.url ?? null,
    };
  },

  async getProductionUrl(): Promise<string | null> {
    const info = await framer.getPublishInfo();
    return info?.production?.url ?? null;
  },

  async getStagingUrl(): Promise<string | null> {
    const info = await framer.getPublishInfo();
    return info?.staging?.url ?? null;
  },

  canInjectScript(): boolean {
    return framer.isAllowedTo("setCustomCode");
  },

  async injectScript({ html, location = "headStart" }: ScriptInjection): Promise<boolean> {
    if (!framer.isAllowedTo("setCustomCode")) {
      console.warn(
        "[platform/framer] setCustomCode not allowed for this user — script not injected."
      );
      return false;
    }
    await framer.setCustomCode({ html, location });
    return true;
  },

  showPluginUI({ width = 800, height = 600, position = "top right" }: PluginUIOptions): void {
    // framer.showUI returns a Promise; we fire-and-forget since the plugin panel
    // opens asynchronously and the caller doesn't need to await it.
    void framer.showUI({ width, height, position });
  },
};
