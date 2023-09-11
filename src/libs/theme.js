import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
          },
        }}
        componentSize={"default"}
      >
        {node}
      </ConfigProvider>
    </>
)

export default withTheme;