import { useState } from "react";
import s from "./Contact.module.css";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.contact}>
      <div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/483464/person.svg"
            alt="person"
            width="18px"
            height="18px"
          />
          <p>{name}</p>
        </div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/535565/phone.svg"
            alt="phone"
            width="18px"
            height="18px"
          />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={openModal} type="button">
        Delete
      </button>
      <DeleteContactModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        contactToDelete={id}
      />
    </div>
  );
};

export default Contact;
