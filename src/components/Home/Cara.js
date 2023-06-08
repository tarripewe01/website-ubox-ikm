import { CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
import "./cara.css";

const Cara = () => {
  return (
    <CContainer className="container__cara">
      <div className="contain__title-cara">
        <p className="title-cara">Cara menggunakan Ubox</p>
      </div>
      <CRow className="contain__cara">
        <CCol sm="auto">
          <p>Sewa Powerbank</p>
          <CRow>
            <CCol></CCol>
            <CCol className="align-self-center text-end">1</CCol>
            <CCol style={{textAlign:'start'}}>
              <p>2</p>
              <p>2</p>
            </CCol>
            <CCol></CCol>
          </CRow>
        </CCol>
        <CCol sm="auto">Pengembalian Powerbank</CCol>
      </CRow>
    </CContainer>
  );
};

export default Cara;
