import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import classes from "./table.module.css";

const PDFViewer = ({ doc }) => {
  const [tableData, setTableData] = useState([]);

  const readExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setTableData(data);
    };
    reader.readAsBinaryString(file);
  };

  const importExcelFile = () => {
    fetch(doc)
      .then((response) => response.blob())
      .then((blob) => {
        readExcelFile(blob);
      })
      .catch((error) => console.error("Error importing Excel file:", error));
  };

  useEffect(() => {
    importExcelFile();
  }, []);

  return (
    <div className={classes.table}>
      <table>
        <thead>
          <tr>
            {tableData.length > 0 &&
              tableData[0].map((header, index) => (
                <th key={index}>
                  <h3>{header}</h3>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => {
            if (row.length === 1) {
              return (
                <tr key={rowIndex} className={classes.title}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              );
            } else {
              return (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PDFViewer;
