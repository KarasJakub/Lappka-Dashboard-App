import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div>Hello World</div>;
    </>
  );
}

export default App;
