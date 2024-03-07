"use client";
import { SwapWidget, SwapWidgetProps } from "@dodoex/widgets";
import { TokenList } from "@dodoex/widgets/dist/src/hooks/Token/type";
import { CssBaseline } from "@mui/material";

function Widget(props: {
  tokenList: TokenList;
  rebateAddress?: string;
  rebateRatio?: number;
  swapSlippage?: number;
  bridgeSlippage?: number;
  theme?: SwapWidgetProps["theme"];
  jsonRpcUrlMap?: SwapWidgetProps["jsonRpcUrlMap"];
  locale?: SwapWidgetProps["locale"];
  crossChain?: SwapWidgetProps["crossChain"];
  width?: SwapWidgetProps["width"];
  height?: SwapWidgetProps["height"];
  noPowerBy?: SwapWidgetProps["noPowerBy"];
  apikey?: SwapWidgetProps["apikey"];
}) {
  return (
    <>
      <CssBaseline />
      <SwapWidget colorMode="light" width="100%" height="100%" {...props} />
    </>
  );
}

export default Widget;
