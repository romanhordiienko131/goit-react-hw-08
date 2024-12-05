import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const DeleteContactModal = ({ isModalOpen, closeModal, contactToDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactToDelete));
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      <p>Are you sure you want to delete this contact?</p>
      <ul>
        <li>
          <button onClick={handleDelete}>Confirm</button>
        </li>
        <li>
          <button onClick={closeModal}>Cancel</button>
        </li>
      </ul>
    </Modal>
  );
};

export default DeleteContactModal;
