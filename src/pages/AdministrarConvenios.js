import React, { useState } from "react";
import DropDown from "../componentsConvenio1/DropDown";
import Hero from "../componentsConvenio1/Hero";
import InfoSection from "../componentsConvenio/InfoSection";
import Navbar from "../componentsAdministrador/Navbar/Navbar";  
import { InfoData, InfoDataTwo } from "../componentsConvenio1/dataConvenios/InfoData";
import { SliderData } from "../componentsConvenio1/dataConvenios/SliderData";
import GlobalStyle from "../globalStyles";
import AdministrarConvenios from "../componentsAdministrarConv/componentsAdmintrarConv/AdministrarConvenios";

function ConveniosPage1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <AdministrarConvenios/>
  
    </>
  );
}

export default ConveniosPage1;