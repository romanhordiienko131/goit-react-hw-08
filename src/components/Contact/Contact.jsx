import { useState } from "react";
import s from "./Contact.module.css";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/contacts/operations.js";

const Contact = ({ id, name: initialName, number: initialNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const [tempName, setTempName] = useState(name);
  const [tempNumber, setTempNumber] = useState(number);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleEditing = () => {
    if (!isEditing) {
      setTempName(name);
      setTempNumber(number);
    }
    setIsEditing((prev) => !prev);
  };

  const confirmEditing = () => {
    const body = {
      name,
      number,
    };

    dispatch(patchContact({ contactId: id, body }));
    toggleEditing();
  };

  const cancelEditing = () => {
    setName(tempName);
    setNumber(tempNumber);
    toggleEditing();
  };

  return (
    <div className={s.contact}>
      {isEditing ? (
        <>
          <div className={s.contactDetails}>
            <div className={s.contactDetail}>
              <img
                src="https://www.svgrepo.com/show/483464/person.svg"
                alt="Person"
                width="18"
                height="18"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={s.contactDetail}>
              <img
                src="https://www.svgrepo.com/show/535565/phone.svg"
                alt="Phone"
                width="18"
                height="18"
              />
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className={s.contactControls}>
            <button onClick={confirmEditing}>
              <img
                src="https://www.svgrepo.com/show/501130/check-mark.svg"
                alt="Check"
                width="18"
                height="18"
              />
            </button>
            <button onClick={cancelEditing}>
              <img
                src="https://www.svgrepo.com/show/513658/cross.svg"
                alt="X mark"
                width="18"
                height="18"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={s.contactDetails}>
            <div className={s.contactDetail}>
              <img
                src="https://www.svgrepo.com/show/483464/person.svg"
                alt="Person"
                width="18"
                height="18"
              />
              <p>{name}</p>
            </div>
            <div className={s.contactDetail}>
              <img
                src="https://www.svgrepo.com/show/535565/phone.svg"
                alt="Phone"
                width="18"
                height="18"
              />
              <p>{number}</p>
            </div>
          </div>
          <div className={s.contactControls}>
            <button onClick={openModal}>
              <img
                src="https://www.svgrepo.com/show/490254/trash-can.svg"
                alt="Trash can"
                width="18"
                height="18"
              />
            </button>
            <button onClick={toggleEditing}>
              <img
                src="https://www.svgrepo.com/show/513394/pencil.svg"
                alt="Pencil"
                width="18"
                height="18"
              />
            </button>
          </div>
        </>
      )}
      <DeleteContactModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        contactId={id}
      />
    </div>
  );
};

export default Contact;
