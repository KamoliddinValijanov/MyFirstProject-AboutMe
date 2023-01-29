import Footer from "../modules/Footer";
import Header from "../modules/Header";
import MainPart from "../modules/MainPart";
import MiddlePart from "../modules/MiddlePart";
import Navbar from "../modules/Navbar";

export default function Index() {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <Header />
      <MiddlePart />
      <MainPart />
      <Footer />
    </div>
  );
}
