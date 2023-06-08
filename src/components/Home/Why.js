import React from "react";
import "./why.css";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CImage,
  CRow,
} from "@coreui/react";
import ImgPraktis from "../../assets/icons/praktis.svg";
import ImgPortabel from "../../assets/icons/portable.svg";
import ImgFlexibel from "../../assets/icons/fleksible.svg";
import ImgKompetibilitas from "../../assets/icons/kompatibilitas.svg";

const Why = () => {
  return (
    <CContainer className="container__why">
      <div className="contain__title">
        <p className="title">Mengapa Ubox ?</p>
      </div>
      <CRow className="contain__card">
        <CCol xs="6" md="3">
          <CCard className="card">
            <CCardBody className="card__body">
              <CImage src={ImgPraktis} className="card__image" />
              <CCardText className="card__text">
                Praktis dan Mudah Digunakan
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="6" md="3">
          <CCard className="card">
            <CCardBody className="card__body">
              <CImage src={ImgFlexibel} className="card__image" />
              <CCardText className="card__text">Flexibel</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="6" md="3">
          <CCard className="card">
            <CCardBody className="card__body">
              <CImage src={ImgPortabel} className="card__image" />
              <CCardText className="card__text">Portabel</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="6" md="3">
          <CCard className="card">
            <CCardBody className="card__body">
              <CImage src={ImgKompetibilitas} className="card__image" />
              <CCardText className="card__text">Kompetibilitas Universal</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Why;
