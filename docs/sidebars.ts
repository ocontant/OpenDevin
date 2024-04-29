import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [{ type: "autogenerated", dirName: "usage" }],
  apiSidebar: [require("./modules/python/sidebar.json")],
};

export default sidebars;