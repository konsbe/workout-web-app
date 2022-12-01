import { Button } from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Courses from "../../../components/Cards/cardHeigh";
import CourseForm from "../../../components/Forms/CourseForm";
import ModalComponent from "../../../components/ModalComponent";

export const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleOpenModal = () => {
    if (showModal) setShowModal(!showModal);
  };

  return (
    <>
      <div>MyProducts</div>
      <Button onClick={toggleModal}>Add Course</Button>
      <ModalComponent
        hideModal={showModal}
        toggleModal={toggleModal}
        modalHeader={"add new personal course"}>
        <CourseForm toggleModal={toggleModal} />
      </ModalComponent>
      <Courses toggleOpenModal={toggleOpenModal} />
    </>
  );
};
export default Products;
