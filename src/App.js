import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="pb-10 bg-gray-800  gap-6 flex flex-col min-h-screen justify-between">

      {/* header  */}
      <Header />



      {/* selection for the type of words  */}
      <Body />



      {/* the text you need to type  */}
      <Footer />




    </div>
  );
}

export default App;
