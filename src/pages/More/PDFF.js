import React, { useState } from "react";

const PDFViewer = () => {
  const [pdfUrl, setPdfUrl] = useState("/more.pdf");

  return (
    <div>
      <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PDFViewer;
