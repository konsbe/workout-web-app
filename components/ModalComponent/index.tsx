import { StaticImageData } from "next/image";
import styles from "./Modal.module.css";

interface IModalProps {
  hideModal: boolean;
  toggleModal: (
    image?: any,
    title?: any,
    description?: any, 
  ) => void;
  src?: string | StaticImageData;
  modalContentBody?: string;
  modalHeader?: string;
  children?: JSX.Element
}

const ModalComponent = (props: IModalProps) => {
  if (!props.hideModal) return null;
  return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3>{props.modalHeader}</h3>
          </div>
          <div className={styles.modalBody}>
            {/* <p>{props.modalContentBody}</p> */}
            {props?.children}
          </div>
        </div>
      </div>
  );
};

export default ModalComponent;
