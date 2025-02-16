import React from "react";
import { Document } from "@react-pdf/renderer";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

const Invoice = () => (
  <Document>
    <Page1 />
    <Page2 />
    <Page4 />
    <Page3 />
  </Document>
);

export default Invoice;
