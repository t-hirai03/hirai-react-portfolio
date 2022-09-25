import React from "react";
import HeaderSection from "./components/header";
import Top from "./page/top";
import Loading from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  function loading() {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  window.onload = loading;
  return (
    <div>
      {/* ヘッダー */}
      <HeaderSection />
      {/* コンテンツ */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="index-contents">
          <Top />
        </div>
      )}
    </div>
  );
}

export default App;
