import Container from "./component/Container/Container";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Products from "./component/Products/Products"

function App() {
  return (
       
        <div className="flex flex-col w-full h-screen">
          <Navbar/>
          <Container><Products/></Container>
          <Footer/>
        </div>
      

  );
}

export default App;
