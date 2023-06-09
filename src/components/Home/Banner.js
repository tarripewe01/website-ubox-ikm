import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import React from "react";
import ImgAppStore from "../../assets/images/appstore.png";
import ImgGooglePlay from "../../assets/images/googleplay.png";
import BannerImage from "../../assets/images/banner2.png";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container__banner">
      <CContainer>
        <CRow style={{ justifyContent: "space-between" }}>
          <CCol sm="auto" md="6">
            <p className="text__hastag">#PowerBankKekinian</p>
            <p className="text__tagline">
              Daya Tanpa Batas Untuk Gadget Kamu !
            </p>
            <p className="text__description">
              Ubox adalah layanan sewa powerbank yang dirancang khusus untuk
              memenuhi kebutuhan mobilitas dan konektivitas modern. Kami
              menghadirkan powerbank berkualitas tinggi dengan kapasitas baterai
              yang besar, sehingga Anda tidak perlu khawatir tentang kehabisan
              daya saat bepergian, bekerja, atau bersantai.
            </p>
            <p className="text__CTA">
              Unduh aplikasinya dan temukan stasiun UBOX terdekat !
            </p>
            <CRow>
              <CCol>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.nusantech.ubox&hl=en"
                  target="blank_page"
                >
                  <CImage src={ImgGooglePlay} className="img_CTA" />
                </Link>
              </CCol>
              <CCol>
                <Link
                  to="https://apps.apple.com/id/app/ubox/id6444171407?l=id"
                  target="blank_page"
                >
                  <CImage src={ImgAppStore} className="img_CTA" />
                </Link>
              </CCol>
              <CCol></CCol>
            </CRow>
          </CCol>
          <CCol sm="auto" md="6" className="center-image">
            <CImage src={BannerImage} className="image__banner" />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Banner;
