import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  return (
    <>
      <Header></Header>
      <Card />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Button />
      <Food />
      <Footer />
    </>
  );
}

export default App;
