import React from "react";
import "./footer.css";
import { CCol, CImage, CRow } from "@coreui/react";
import LOGO from "../assets/images/logo_putih.png";
import CS from "../assets/icons/cs.svg";

const Footer = () => {
  return (
    <div className="container__footer">
      <CImage src={LOGO} className="footer__logo" />
      {/* <CRow className="contain__list-footer">
        <CCol xs="12" className="list__footer">Beranda</CCol>
        <CCol xs="12" className="list__footer">Tentang Kami</CCol>
        <CCol xs="12" className="list__footer">Lokasi</CCol>
        <CCol xs="12" className="list__footer">Produk</CCol>
        <CCol xs="12" className="list__footer">Bisnis</CCol>
      </CRow> */}
      <CRow>
        <CCol></CCol>
        <CCol xs={6} className="help_center">
          <CImage src={CS} className="cs_footer" />
          <p className="text_footer">HELP CENTER</p>
        </CCol>
        <CCol></CCol>
      </CRow>
    </div>
  );
};

export default Footer;
