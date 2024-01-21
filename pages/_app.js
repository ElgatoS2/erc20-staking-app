import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import CustomChain from "../const/chain";

const activeChain = "Leopardkeen";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={Leopardkeen}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
