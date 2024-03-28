import React  from "react";

const PDFViewer = ({ doc }) => {
  return (
    <div>
      <embed src={doc} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PDFViewer;
