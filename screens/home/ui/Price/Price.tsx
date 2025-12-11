'use-client'

import { Prices } from "@/shared/types/enums";
import { Tabs, TabsProps } from "antd";
import { FC, useState } from "react";
import AddressSelect from "./AddressSelect/AddressSelect";
import { planLabel } from "./data";
import s from './Price.module.scss';
import PriceContent from "./PriceContent/PriceContent";

interface IProps {
  title?: string
  isMilitary?: boolean
}

const Price: FC<IProps> = ({ title, isMilitary }) => {
  const [selectedPlan, setSelectedPlan] = useState<Prices>(Prices.COMFORT)

  const tabs: TabsProps['items'] = [
    // {
    //   key: Prices.STANDARD,
    //   label: planLabel[Prices.STANDARD],
    //   children: <PriceContent isMilitary={isMilitary} type={Prices.STANDARD} />
    // },
    {
      key: Prices.COMFORT,
      label: planLabel[Prices.COMFORT],
      children: <PriceContent isMilitary={isMilitary} type={Prices.COMFORT} />
    },
    {
      key: Prices.COMFORT_PLUS,
      label: planLabel[Prices.COMFORT_PLUS],
      children: <PriceContent isMilitary={isMilitary} type={Prices.COMFORT_PLUS} />
    },
    {
      key: Prices.BUSINESS,
      label: planLabel[Prices.BUSINESS],
      children: <PriceContent isMilitary={isMilitary} type={Prices.BUSINESS} />
    },
    {
      key: Prices.MINIVAN,
      label: planLabel[Prices.MINIVAN],
      children: <PriceContent isMilitary={isMilitary} type={Prices.MINIVAN} />
    },
    // {
    //   key: Prices.DELIVERY,
    //   label: planLabel[Prices.DELIVERY],
    //   children: <PriceContent isMilitary={isMilitary} type={Prices.DELIVERY} />
    // },
  ]
  return (
    <div className='container'>
      <div className={s.content}>
        <div className={s.block}>
          <div className={s.imageContainer}>
            <div className={s.imagePlaceholder}>
              <h2 className={s.imageTitle}>Выберите тариф</h2>
              <p className={s.imageSubtitle}>Комфортные поездки по фиксированным ценам</p>
            </div>
          </div>
        </div>

        <div className={s.block}>
          <Tabs
            hideAdd
            // tabPosition="right"
            items={tabs}
            onChange={(key) => {
              setSelectedPlan(key as Prices)
            }}
            activeKey={selectedPlan}
          />
        </div>

      </div>

      <AddressSelect isMilitary={isMilitary} selectedPlan={selectedPlan} />
    </div>

  )
}

export default Price;
