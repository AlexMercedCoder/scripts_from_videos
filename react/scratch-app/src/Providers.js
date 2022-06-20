import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

function Providers(props) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <Router>{props.children}</Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default Providers