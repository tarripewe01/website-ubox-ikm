import React from "react";
import "./action.css";
import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import ImgAppStore from "../../assets/images/appstore.png";
import ImgGooglePlay from "../../assets/images/googleplay.png";
import CTA from '../../assets/images/cta.png'

const Action = () => {
  return (
    <CContainer className="container__action">
      <CRow>
        <CCol xs="12" sm='6'>
            <CImage src={CTA} className="CTA" />
        </CCol>
        <CCol className="contain__text">
          <p className="title">SEWA MELALUI APLIKASI IOS & ANDROID</p>
          <p className="tagline">A rental experience to the next level.</p>
          <p className="description">
            Unduh aplikasi Ubox untuk mendapatkan hasil maksimal dari pengalaman
            Ubox. Simpan semua metode pembayaran Anda, telusuri riwayat sewa
            Anda, dapatkan kupon promo, dan banyak lagi.
          </p>
          <CRow className="contain__CTA">
            <CCol>
              <CImage src={ImgGooglePlay} className="img_CTA" />
            </CCol>
            <CCol>
              <CImage src={ImgAppStore} className="img_CTA" />
            </CCol>
            <CCol></CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Action;
