// Local type declarations for docusaurus-plugin-openapi-docs
// This avoids importing from the plugin's broken type chain

export interface Options {
  specPath: string;
  outputDir: string;
  sidebarOptions?: {
    groupPathsBy?: string;
    categoryLinkSource?: string;
  };
  template?: string;
  downloadUrl?: string;
  hideSendButton?: boolean;
  showExtensions?: boolean;
  proxy?: string;
}
