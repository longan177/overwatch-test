import Article from "./Component/Article";
import Header from "./Component/Header";
import Instruments from "./Component/Instruments";
import UserProvider from "./context";

function App() {
  return (
    <UserProvider>
      <Header />
      <Article />
      <Instruments />
    </UserProvider>
  );
}

export default App;
