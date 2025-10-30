'use client'

import { ModalContext } from "@/app/providers";
import { Form, Modal } from "antd";
import { FC, useContext } from "react";
import ModalTitle from "../ModalTitle/ModalTitle";
import QuestionForm from "@/entities/forms/QuestionForm/QuestionForm";

interface IProps {
  title?: unknown
}

const QuestionModal: FC<IProps> = () => {
  const { questionModalData, setQuestionModalData } = useContext(ModalContext)

  const [form] = Form.useForm();

  return (
    <Modal
      centered
      forceRender
      destroyOnClose
      open={questionModalData.status}
      onCancel={() => {
        setQuestionModalData({
          status: false,
          blockFrom: null
        })
        form.resetFields()
      }}
      title={<ModalTitle title="Получить консультацию" />}
      footer={false}
      width={588}
    >
      <QuestionForm
        blockFrom={questionModalData.blockFrom}
        handleClickLink={() => {
          setQuestionModalData({
            status: false,
            blockFrom: null
          })
        }}
        form={form}
        buttonText='Получить консультацию'
        handleClose={(isResetForm?: boolean) => {
          setQuestionModalData({ status: false, blockFrom: null })
          isResetForm && form.resetFields()
        }}
      />
    </Modal>
  )
}

export default QuestionModal;