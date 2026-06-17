export interface SiteInfo {
  siteId: string;
  siteName?: string;
  shortName?: string;
  url?: string;
}

export interface PublishInfo {
  productionUrl: string | null;
  stagingUrl: string | null;
}

export interface ScriptInjection {
  html: string;
  /** Maps to the platform's injection-point vocabulary. Default: "headStart". */
  location?: "headStart" | "headEnd" | "bodyStart" | "bodyEnd";
}

export interface PluginUIOptions {
  width: number;
  height: number;
  position?: "top left" | "top right" | "bottom left" | "bottom right" | "center";
}

export interface PlatformAdapter {
  readonly name: string;

  /** Return the unique site/project identifier for this host. */
  getSiteId(): Promise<string>;

  /** Return full site metadata (name, shortName, etc.). */
  getSiteInfo(): Promise<SiteInfo>;

  /** Return both the production and staging URLs. */
  getPublishInfo(): Promise<PublishInfo>;

  /** Return the live production URL, or null. */
  getProductionUrl(): Promise<string | null>;

  /** Return the staging/preview URL, or null. */
  getStagingUrl(): Promise<string | null>;

  /** True if the current user may inject a <script> into the site. */
  canInjectScript(): boolean | Promise<boolean>;

  /**
   * Inject HTML into the site head/body.
   * Returns true on success, false when the permission is not granted.
   */
  injectScript(opts: ScriptInjection): Promise<boolean>;

  /** Resize / show the plugin panel. */
  showPluginUI(opts: PluginUIOptions): void;
}
