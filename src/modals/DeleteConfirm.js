import { Button, Modal, Space } from "antd";
import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const DeleteConfirm = ({ isModalOpen, setIsModalOpen, okFunction }) => {
  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        icon={<ExclamationCircleOutlined />}
        title="Emin misiniz?"
        open={isModalOpen}
        onOk={okFunction}
        onCancel={hideModal}
        okText="Sil"
        cancelText="İptal"
      >
        <p className="my-4">
          Bu işlem geri alınamaz, silmek istediğinize emin misiniz?.
        </p>
      </Modal>
    </>
  );
};

export default DeleteConfirm;
