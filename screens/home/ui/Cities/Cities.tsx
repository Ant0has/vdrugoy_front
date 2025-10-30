'use client';

import { RegionsContext } from "@/app/providers";
import { getPaginatedList } from "@/shared/services/get-paginated-list";
import { IRoute } from "@/shared/types/route.interface";
import { IRegion } from "@/shared/types/types";
import { Input, Pagination } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FC, useContext, useState } from "react";
import s from './Cities.module.scss';
import { generateMockRoutes } from "./data";
import { Empty } from 'antd';

interface IProps {
  routes?: IRoute[]
}

const Cities: FC<IProps> = ({ routes = generateMockRoutes() }) => {


  const [page, setPage] = useState<number>(0);
  const regions = useContext(RegionsContext)
  const router = useRouter()

  const defaultRoutes = routes ?? regions
  const [sortedRoutes, setSortedRoutes] = useState<any>(defaultRoutes)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleRegionClick = (region: IRegion | IRoute) => {
    router.push(`/${region.url}`)
  }

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value)

    setSortedRoutes(defaultRoutes.filter((el: any) => {
      const currentField: string = routes ? el?.title : el.meta_value
      return currentField.toLowerCase().includes(value.toLocaleLowerCase())
    }))
  }

  return (
    <div id="cities" className={s.wrapper}>
      <div className="container container-40 ">
        <div className="title white-color">Другие города</div>

        <div className={s.search}>
          <Input value={searchValue} onChange={(e) => handleChangeSearchValue(e.target.value)} placeholder="Поиск" />
        </div>


        <div className={s.slide}>
          {sortedRoutes.length === 0 ? <Empty /> : (
            <>
              {
                routes ? getPaginatedList<IRoute>(sortedRoutes, page, 10).map((region) => (
                  <Link
                    href={region.url || ''}
                    key={region.ID}
                    className={clsx(s.region, 'font-16-normal')}
                    onClick={() => handleRegionClick(region)}
                    style={{ cursor: 'pointer' }}
                  >
                    {region?.title}
                  </Link>
                )) : getPaginatedList<IRegion>(sortedRoutes, page, 10).map((region) => (
                  <Link
                    href={region.url || ''}
                    key={region.ID}
                    className={clsx(s.region, 'font-16-normal')}
                    onClick={() => handleRegionClick(region)}
                    style={{ cursor: 'pointer' }}
                  >
                    {`Такси ${region?.meta_value}`}
                  </Link>
                ))
              }
            </>
          )}


        </div>

        <Pagination
          align="center"
          pageSize={10}
          current={page + 1}
          defaultPageSize={10}
          defaultCurrent={1}
          total={sortedRoutes.length}
          onChange={(qqq) => setPage(qqq - 1)}
          hideOnSinglePage={true}
          showTitle={false}
          itemRender={(page, type, originalElement) => {
            if (type === 'jump-prev' || type === 'jump-next') {
              return null; // не рендерим точки
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  )
}

export default Cities;