import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import React from "react";
import IconDaya from "../../assets/icons/daya.svg";
import IconLimbah from "../../assets/icons/limbah.svg";
import IconNoKabel from "../../assets/icons/nokabel.svg";
import IconSewa from "../../assets/icons/sewa.svg";
import IconTerhubung from "../../assets/icons/terhubung.svg";
import ImgInfo from "../../assets/images/beranda_produk.png";
import "./info.css";

const Info = () => {
  return (
    <div className="container__info">
      <CContainer>
        <CRow>
          <CCol sm="auto" md="6" className="info__col-1">
            <CImage src={ImgInfo} className="info__img" />
          </CCol>
          <CCol sm="auto" md="6">
            <p className="info__title">Charge Smarter.</p>
            <p className="info__subtitle">
              Bergabunglah dengan gerakan{" "}
              <span style={{ fontWeight: "bold", color: "#F89E20" }}>
                #PowerBankKekinian
              </span>
            </p>
            <CRow className="info__list-wrap">
              <CCol xs="12" md="6" xl="5" className="info__list">
                <CImage src={IconSewa} className="info__list-icon" />
                <p className="info__list-text">Sewa saat kamu butuh</p>
              </CCol>
              <CCol xs="12" md="5" xl="4" className="info__list">
                <CImage src={IconTerhubung} className="info__list-icon" />
                <p className="info__list-text">Selalu terhubung</p>
              </CCol>
              <CCol xs="12" md="8" xl="6" xxl="7" className="info__list">
                <CImage
                  src={IconNoKabel}
                  style={{ width: 17 }}
                  className="info__list-icon"
                />
                <p className="info__list-text">
                  Tidak perlu lagi kabel pengisi daya
                </p>
              </CCol>
              <CCol xs="12" md="7" xl="5" xxl="6" className="info__list">
                <CImage src={IconLimbah} className="info__list-icon" />
                <p className="info__list-text">Mengurangi limbah elektronik</p>
              </CCol>
              <CCol xs="12" md="8" xl="7" className="info__list">
                <CImage
                  src={IconDaya}
                  style={{ width: "1.3rem" }}
                  className="info__list-icon"
                />
                <p className="info__list-text">
                  Mengisi daya saat dalam perjalanan
                </p>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Info;
