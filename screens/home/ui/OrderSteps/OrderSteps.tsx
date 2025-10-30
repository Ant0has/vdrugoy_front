"use-client";

import { ModalContext } from "@/app/providers";
import { PHONE_NUMBER_FIRST } from "@/shared/constants";
import { formatPhoneNumber } from "@/shared/services/formate-phone-number";
import { Blocks, ButtonTypes } from "@/shared/types/enums";
import clsx from "clsx";
import { FC, useContext } from "react";
import s from "./OrderSteps.module.scss";
import OrderStepsContent from "./OrderStepsContent/OrderStepsContent";
import Button from "@/shared/components/ui/Button/Button";

interface IProps {
  isMilitary?: boolean;
}

const OrderSteps: FC<IProps> = ({ isMilitary }) => {
  const { setQuestionModalData } = useContext(ModalContext);

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.container, "container-100 container")}>
        <OrderStepsContent />

        <div className={s.actions}>
          <Button
            type={ButtonTypes.PRIMARY}
            text="Заказать поездку"
            handleClick={() =>
              setQuestionModalData({
                status: true,
                blockFrom: Blocks.ORDER_STEPS,
              })
            }
          />
          <div className={s.contacts}>
            <span className="font-14-normal">
              Закажите такси онлайн или по телефону{" "}
            </span>{" "}
            <a
              href={`tel:+${PHONE_NUMBER_FIRST}`}
              className="font-14-normal orange-color"
            >
              {formatPhoneNumber(PHONE_NUMBER_FIRST)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
