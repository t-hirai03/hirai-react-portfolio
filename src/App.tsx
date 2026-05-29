import Header from "./components/header";
import Top from "./page/top";
import Footer from "./components/footer";
import Loading from "./components/loading";
import { useLoading } from "./context/LoadingContext";

const App = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <Top />
      <Footer />
    </>
  );
};

export default App;
