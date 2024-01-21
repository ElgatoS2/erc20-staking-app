import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import CustomChain from "../const/chain";

// This is the chain your dApp will work on.
const activeChain = "CustomChain";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
