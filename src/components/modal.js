import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px'
  }
};

Modal.setAppElement('#___gatsby');

const ClearAnswerModal = props => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Clear My Answer"
    >
      <h1 className="ui header red">Chú ý !</h1>
      <p>
        Bạn chắc chắn muốn xóa tất cả các câu trả lời chứ?
      </p>
      <button className="ui button blue" onClick={props.closeModal}>Không</button>
      <button className="ui button red" onClick={props.clearAnswer}>Đúng</button>
    </Modal>
  )
}

export { ClearAnswerModal }