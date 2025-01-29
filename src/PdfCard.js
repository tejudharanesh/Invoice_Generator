import React from "react";
import { HiOutlineDownload, HiOutlinePrinter } from "react-icons/hi";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import { saveAs } from "file-saver";

const PdfCard = ({ title }) => {
  const styles = {
    container: {
      width: "220px",
      borderRadius: "5px",
      padding: "15px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    },
    flex: { width: "100%", display: "flex", gap: "5px", alignItems: "center" },
    bold: { fontSize: "13px", fontWeight: 600 },
    thin: { fontSize: "11px", color: "#6f6f6f", fontWeight: 500 },
    btn: {
      borderRadius: "3px",
      border: "1px solid gray",
      display: "flex",
      alignItems: "center",
      gap: "2px",
      padding: "3px",
      fontSize: "11px",
      color: "#4f4f4f",
      fontWeight: 600,
      cursor: "pointer",
      userSelect: "none",
    },
  };

  const handleShare = async (blob) => {
    await saveAs(blob, `invoice.pdf`);
    window.location.href = `mailto:?subject=${encodeURIComponent(
      `Invoice`
    )}&body=${encodeURIComponent(`Kindly find attached invoice`)}`;
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.flex, ...{ justifyContent: "space-between" } }}>
        <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
          <div style={styles.btn}>
            <HiOutlineDownload size={14} />
            <span>Download</span>
          </div>
        </PDFDownloadLink>

        <BlobProvider document={<Invoice />}>
          {({ url, blob }) => (
            <a href={url} target="_blank" style={styles.btn}>
              <HiOutlinePrinter size={14} />
              <span>Print</span>
            </a>
          )}
        </BlobProvider>
      </div>
    </div>
  );
};

export default PdfCard;
