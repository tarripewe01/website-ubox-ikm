import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import React from "react";
import "./cara.css";
import Download from "../../assets/icons/sewa1.svg";

const Cara = () => {
  return (
    <CContainer className="container__cara">
      <div className="contain__title-cara">
        <p className="title-cara">Cara menggunakan Ubox</p>
      </div>
      <CRow className="contain__cara">
        <CCol sm="auto" style={{ marginTop: 30 }}>
          <p className="title__sewa">Sewa Powerbank</p>
          <CRow className="card__sewa">
            <CCol xs='12' className="card__sewa-list">
              <CRow >
                <CCol>Icon</CCol>
                <CCol>TITLE</CCol>
              </CRow>
            </CCol>
            <CCol>1</CCol>
            <CCol>1</CCol>
            <CCol>1</CCol>
          </CRow>
        
        </CCol>
        {/* <CCol sm="auto">Pengembalian Powerbank</CCol> */}
      </CRow>
    </CContainer>
  );
};

export default Cara;
