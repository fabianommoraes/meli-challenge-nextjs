import type { Preview } from "@storybook/react";
import "../styles/storybookGlobal.css";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/i
    //   }
    // },
    // viewport: {
    //   viewports: {
    //     mobile: {
    //       name: "mobile",
    //       type: "mobile",
    //       styles: { width: 0, height: 0 }
    //     },
    //     desktop: {
    //       name: "desktop",
    //       type: "desktop"
    //     }
    //   }
    // }
  }
};

export default preview;
