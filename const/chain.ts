import { Chain } from "@thirdweb-dev/chains";

const CustomChain: Chain = {
  chain: "Leopardkeen",
  name: "Leopardkeen",
  chainId: 1063590932,
  rpc: ["https://leopardkeen-rpc.eu-north-2.gateway.fm"], // Change this to an array
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  shortName: "custom",
  testnet: false,
  slug: "leopardkeen",
};

export default CustomChain;
