
import { framer } from "framer-plugin";
import type { PlatformAdapter, PluginUIOptions, PublishInfo, ScriptInjection, SiteInfo } from "./types";

export const framerAdapter: PlatformAdapter = {
  name: "framer",

  async getSiteId(): Promise<string> {
    // Framer's project id doubles as our `siteId` in every backend call.
    try {
      const info = await framer.getProjectInfo();
      return info.id;
    } catch (err) {
      framer.notify("AccessBit could not read project info. Please try again.", { variant: "error" });
      throw err;
    }
  },

  async getSiteInfo(): Promise<SiteInfo> {
    try {
      const info = await framer.getProjectInfo();
      return {
        siteId: info.id,
        siteName: info.name ?? undefined,
      };
    } catch (err) {
      framer.notify("AccessBit could not read project info. Please try again.", { variant: "error" });
      throw err;
    }
  },

  async getPublishInfo(): Promise<PublishInfo> {
    try {
      const info = await framer.getPublishInfo();
      return {
        productionUrl: info?.production?.url ?? null,
        stagingUrl: info?.staging?.url ?? null,
      };
    } catch (err) {
      framer.notify("AccessBit could not read publish info. Please try again.", { variant: "error" });
      throw err;
    }
  },

  canInjectScript(): boolean {
    return framer.isAllowedTo("setCustomCode");
  },

  async injectScript({ html, location = "headStart" }: ScriptInjection): Promise<boolean> {
    if (!framer.isAllowedTo("setCustomCode")) {
      framer.notify("AccessBit needs Custom Code permission to install the widget. Please ask a site owner to grant it in Framer.", { variant: "error" });
      return false;
    }
    try {
      framer.setCustomCode({ html, location });
    } catch (err) {
      console.error("[platform/framer] setCustomCode failed:", err);
      return false;
    }
    return true;
  },

  showPluginUI({ width = 800, height = 600, position = "top right" }: PluginUIOptions): void {
    // framer.showUI returns a Promise; we fire-and-forget since the plugin panel
    // opens asynchronously and the caller doesn't need to await it.
    void framer.showUI({ width, height, position });
  },
};
