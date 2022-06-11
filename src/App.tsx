import HomePage from "@pages/Home/HomePage";
import Navbar from "@components/Layout/Navbar";
import Footer from "@components/Layout/Footer";

function App() {
  return (
    <>
      <div id="header">
        <Navbar />
      </div>
      <div id="content">
        <HomePage />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
