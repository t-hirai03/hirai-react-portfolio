import React from "react";
import HeaderSection from "./components/header";
import Top from "./page/top";
import AudioLoading from "./components/audioLoading";
// import { useSelector } from "./store/store";
// import { Provider } from "react-redux";
// import RevolvingDotLoading from "./components/revolvingDotLoading";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  // const count = useSelector((state) => state.counter.count);

  return (
    <div>
      {/* <h1>Count: {count}</h1> */}
      {/* ヘッダー */}
      <HeaderSection />
      {/* コンテンツ */}
      {isLoading ? (
        <AudioLoading />
      ) : (
        <div className="index-contents">
          <Top />
        </div>
      )}
    </div>
  );
}

export default App;
