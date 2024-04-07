import { Chain } from "@thirdweb-dev/chains";

const CustomChain = {
  chain: "Bitrock",
  name: "Bitrock",
  chainId: 7171,
  rpc: ["https://connect.bit-rock.io"],
  nativeCurrency: {
    name: "Bitrock",
    symbol: "BROCK",
    decimals: 18,
  },
  shortName: "custom",
  testnet: false,
  slug: "Bitrock",
};

export default CustomChain;
