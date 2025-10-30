import { IOrderModalData } from "@/app/providers";
import { mailService } from "@/shared/services/mail.service";
import { ButtonTypes, Prices } from "@/shared/types/enums";
import { IMailRequest } from "@/shared/types/types";
import { DatePicker, Form, FormInstance, Input, Radio, notification } from "antd";
import ru_RU from 'antd/es/date-picker/locale/ru_RU';
import TextArea from "antd/es/input/TextArea";
import 'dayjs/locale/ru';
import Link from "next/link";
import { FC, useState } from "react";
import { planLabel } from "../../../screens/home/ui/Price/data";
import Button from "../../../shared/components/ui/Button/Button";
import s from './OrderForm.module.scss';

interface IProps {
  orderModalData: IOrderModalData
  form?: FormInstance
  handleClickLink: () => void
  handleClose?: (isResetForm?: boolean) => void
}

const OrderForm: FC<IProps> = ({ form, orderModalData, handleClickLink, handleClose }) => {
  const [api, contextHolder] = notification.useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async () => {
    try {
      setIsSubmitting(true);
      const requestBody: IMailRequest = {
        ...form?.getFieldsValue(),
        ...orderModalData,
        trip_date: form?.getFieldValue('trip_date')?.format('DD.MM.YYYY HH:mm'),
        auto_class: orderModalData.auto_class ? planLabel[orderModalData.auto_class as Prices] : undefined
      }

      delete requestBody.status

      await mailService.sendMail(requestBody);

      api.success({
        message: 'Заказ успешно оформлен',
        description: 'Мы свяжемся с вами в ближайшее время',
        placement: 'topRight',
      });

      if (handleClose) {
        handleClose(true);
      }
    } catch (error: unknown) {
      api.error({
        message: 'Ошибка при оформлении заказа',
        description: 'Пожалуйста, попробуйте позже или свяжитесь с нами по телефону',
        placement: 'topRight',
      });

      if (handleClose) {
        handleClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        name="orrdeForm"
        layout="vertical"
        onFinish={handleSubmitForm}
        onFinishFailed={() => undefined}
        requiredMark={false}
      >
        <Form.Item
          label={<span className="font-14-normal">Введите ваше ФИО<span className="font-14-normal red-color" >*</span></span>}
          name="name"
          rules={[
            {
              required: true,
              message: <span className="font-14-normal red-color">Пожалуйста, введите ваше полное имя</span>
            },
          ]}
        >
          <Input placeholder="Ваше имя" />
        </Form.Item>

        <Form.Item
          label={<span className="font-14-normal">Ваш номер телефона<span className="font-14-normal red-color" >*</span></span>}
          name="phone"
          rules={[
            {
              required: true,
              message: <span className="font-14-normal red-color">Пожалуйста, введите ваш номер телефона</span>
            },
            {
              pattern: /^[0-9+()]+$/,
              message: <span className="font-14-normal red-color">Введите корректный номер телефона</span>
            },
          ]}
        >
          <Input
            placeholder="Номер телефона" />
        </Form.Item>

        <Form.Item
          label={<span className="font-14-normal">Тип поездки<span className="font-14-normal red-color" >*</span></span>}
          name="trip_type"
          rules={[
            {
              required: true,
              message: <span className="font-14-normal red-color">Пожалуйста, введите тип поездки</span>
            }
          ]}
        >
          <Radio.Group
            options={[
              { value: 'Сейчас', label: 'Сейчас' },
              { value: 'Предзаказ', label: 'Предзаказ' },
            ]}
          />
        </Form.Item>

        <Form.Item
          label={<span className="font-14-normal">Дата поездки<span className="font-14-normal red-color" >*</span></span>}
          name="trip_date"
          rules={[
            {
              required: true,
              message: <span className="font-14-normal red-color">Пожалуйста, введите дату поездки</span>
            }
          ]}
        >
          <DatePicker
            format={'DD.MM.YYYY : HH.mm'}
            locale={ru_RU}
            showTime={{
              showSecond: false
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span className="font-14-normal">Дополнительная информация</span>}
          name="additional_info"
        >
          <TextArea
            placeholder="Адресс выезда, количество пассажиров, дети до 7 лет и другие особенности поездки"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>

        <div className={s.bottom}>
          <Button
            type={ButtonTypes.PRIMARY}
            text={'Заказать поездку'}
            loading={isSubmitting}
          />
          <p className="font-14-normal">Нажимая на кнопку, вы соглашаетесь на обработку <Link onClick={handleClickLink} className="font-14-normal red-color" href="privacy-policy">персональных данных</Link></p>
        </div>
      </Form>
    </>
  )
}

export default OrderForm;