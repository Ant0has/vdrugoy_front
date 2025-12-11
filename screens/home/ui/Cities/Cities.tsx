'use client';

import { getPaginatedList } from "@/shared/services/get-paginated-list";
import { IHub, IDestination } from "@/shared/types/types";
import { Input, Pagination } from "antd";
import clsx from "clsx";
import Link from "next/link";
import { FC, useMemo, useState } from "react";
import s from './Cities.module.scss';
import { Empty } from 'antd';

interface IProps {
  hubs?: IHub[]
}

// Формат цены
const formatPrice = (price?: number) => {
  if (!price) return null;
  return new Intl.NumberFormat('ru-RU').format(price);
};

const Cities: FC<IProps> = ({ hubs = [] }) => {
  const [page, setPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  // Собираем все направления из всех хабов с информацией о хабе
  const allDestinations = useMemo(() => {
    const destinations: Array<IDestination & { hub: IHub }> = [];
    hubs.forEach(hub => {
      if (hub.destinations) {
        hub.destinations.forEach(dest => {
          destinations.push({ ...dest, hub });
        });
      }
    });
    return destinations;
  }, [hubs]);

  // Фильтруем по поисковому запросу
  const filteredDestinations = useMemo(() => {
    if (!searchValue.trim()) return allDestinations;

    const query = searchValue.toLowerCase();
    return allDestinations.filter(dest =>
      dest.name.toLowerCase().includes(query) ||
      dest.hub.name.toLowerCase().includes(query) ||
      dest.fromCity?.toLowerCase().includes(query) ||
      dest.toCity?.toLowerCase().includes(query)
    );
  }, [allDestinations, searchValue]);

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
    setPage(0); // Сброс на первую страницу при поиске
  };

  if (hubs.length === 0) {
    return null;
  }

  return (
    <div id="cities" className={s.wrapper}>
      <div className="container container-40">
        <div className="title white-color">Популярные направления</div>
        <p className={clsx(s.subtitle, 'font-14-normal')}>
          Выберите направление или воспользуйтесь поиском
        </p>

        <div className={s.search}>
          <Input
            value={searchValue}
            onChange={(e) => handleChangeSearchValue(e.target.value)}
            placeholder="Поиск по городам и направлениям"
          />
        </div>

        <div className={s.slide}>
          {filteredDestinations.length === 0 ? (
            <Empty description="Направления не найдены" />
          ) : (
            <>
              {getPaginatedList<IDestination & { hub: IHub }>(filteredDestinations, page, 12).map((dest) => (
                <Link
                  href={`/${dest.hub.slug}/${dest.slug}`}
                  key={dest.id}
                  className={clsx(s.region, 'font-16-normal')}
                >
                  <span className={s.destName}>{dest.name}</span>
                  {dest.price && (
                    <span className={s.destPrice}>от {formatPrice(dest.price)} ₽</span>
                  )}
                </Link>
              ))}
            </>
          )}
        </div>

        <Pagination
          align="center"
          pageSize={12}
          current={page + 1}
          defaultPageSize={12}
          defaultCurrent={1}
          total={filteredDestinations.length}
          onChange={(p) => setPage(p - 1)}
          hideOnSinglePage={true}
          showTitle={false}
          itemRender={(page, type, originalElement) => {
            if (type === 'jump-prev' || type === 'jump-next') {
              return null;
            }
            return originalElement;
          }}
        />

        {/* Секция с хабами */}
        <div className={s.hubsSection}>
          <div className={clsx(s.hubsTitle, 'font-16-normal')}>Направления по категориям:</div>
          <div className={s.hubsList}>
            {hubs.map(hub => (
              <Link
                href={`/${hub.slug}`}
                key={hub.id}
                className={clsx(s.hubLink, 'font-14-normal')}
              >
                {hub.name}
                {hub._count?.destinations && (
                  <span className={s.hubCount}>({hub._count.destinations})</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cities;
