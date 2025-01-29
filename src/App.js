import PdfCard from "./PdfCard";
import Invoice from "./Invoice";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  const cards = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gap: "1rem",
    padding: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <Invoice />
      </PDFViewer>
    </div>
  );
}

export default App;
