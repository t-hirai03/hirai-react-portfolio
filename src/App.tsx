import React from "react";
import HeaderSection from "./components/header";
import Top from "./page/top";
import Loading from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

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
