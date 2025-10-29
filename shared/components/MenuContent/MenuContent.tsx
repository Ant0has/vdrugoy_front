'use client'

import { Popover } from "antd";
import { FC, useContext, useMemo, useState, useEffect } from "react";
import s from './MenuContent.module.scss'
import MarkerIcon from "@/public/icons/MarkerIcon";
import { RegionsContext, RouteContext } from "@/app/providers";
import { IRegion } from "@/shared/types/types";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import clsx from "clsx";
import { usePathname } from 'next/navigation'

const getValidName = (region: IRegion) => {
  return region.region_value || region.meta_value || region.url || ''
}

const MenuContent: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const regionsFull = useContext(RegionsContext)
  const { route } = useContext(RouteContext)


  const { regions, moscow, piter, krym } = useMemo(() => {
    const regionsCopy = [...regionsFull]
    let moscow: IRegion = {} as IRegion
    let piter: IRegion = {} as IRegion
    let krym: IRegion = {} as IRegion
    const updatedRegions = regionsCopy.reduce((acc: IRegion[], region) => {
      if (region.url === 'taxi777-mezhgorod-moscow') {
        moscow = region
        return acc;
      }

      if (region.url === 'taxi78-mezhgorod-piter') {
        piter = region
        return acc;
      }

      if (region.url === '82-mezhgorod-krym') {
        krym = region
        return acc;
      }
      acc.push(region);
      return acc;
    }, []);
    return {
      regions: updatedRegions,
      moscow,
      piter,
      krym
    }
  }, [regionsFull])

  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 700)
      }
    }

    checkMobile()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Группировка по первой букве region_value
  const groupByFirstLetter = (data: IRegion[]): Record<string, IRegion[]> => {
    return data
      .sort((a, b) => getValidName(a).localeCompare(getValidName(b)))
      .reduce((acc: Record<string, IRegion[]>, item) => {
        const firstLetter = getValidName(item)[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      }, {});
  };

  const groupedData = useMemo(() => {
    return groupByFirstLetter(regions)
  }, [regions])

  // Разделение групп на страницы с учетом количества элементов
  const splitIntoPages = (groups: Record<string, IRegion[]>) => {
    const letters = Object.keys(groups);
    let totalItems = 0;
    const itemsPerGroup = letters.map(letter => ({
      letter,
      count: groups[letter].length
    }));

    // Считаем общее количество элементов
    totalItems = itemsPerGroup.reduce((sum, group) => sum + group.count, 0);
    const pagesCount = isMobile ? 7 : 3;
    const targetItemsPerPage = Math.ceil(totalItems / pagesCount);

    const pages: string[][] = [[]];
    let currentPage = 0;
    let currentPageItems = 0;

    itemsPerGroup.forEach(({ letter, count }) => {
      // Если текущая страница уже близка к целевому количеству и не последняя, начинаем новую
      if (currentPageItems > targetItemsPerPage && currentPage < (pagesCount - 1)) {
        currentPage++;
        currentPageItems = 0;
        pages[currentPage] = [];
      }

      pages[currentPage].push(letter);
      currentPageItems += count;
    });

    return pages;
  }

  const pages = useMemo(() => {
    return splitIntoPages(groupedData)
  }, [groupedData, isMobile])

  const renderPage = (letters: string[]) => (
    <div className={clsx(s.content, { [s.contentMobile]: isMobile })}>
      {letters.map((letter) => (
        <div className={s.group} key={letter}>
          <h2>{letter}</h2>
          <ul className={s.list}>
            {groupedData[letter].map((region) => (
              <Link
                onClick={() => setIsOpenMenu(false)}
                className={clsx('black-color', { ['orange-color']: region.url === route?.regions_data?.url })}
                href={`/${region.url || ''}`}
                key={region.meta_id}
              >
                {getValidName(region)}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )

  return (
    <Popover
      content={
        <>
          <div className={s.block}>
            <Link
              onClick={() => setIsOpenMenu(false)}
              className={clsx('black-color', { ['orange-color']: moscow.url === route?.regions_data?.url })}
              href={`/${moscow.url || ''}`}
            >
              {getValidName(moscow)}
            </Link>
            <Link
              onClick={() => setIsOpenMenu(false)}
              className={clsx('black-color', { ['orange-color']: piter.url === route?.regions_data?.url })}
              href={`/${piter.url || ''}`}
            >
              {getValidName(piter)}
            </Link>
            <Link
              onClick={() => setIsOpenMenu(false)}
              className={clsx('black-color', { ['orange-color']: krym.url === route?.regions_data?.url })}
              href={`/${krym.url || ''}`}
            >
              {getValidName(krym)}
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            style={{ maxWidth: isMobile ? '300px' : '620px' }}
            className={s.swiper}
          >
            {pages.map((page, index) => (
              <SwiperSlide key={index}>
                {renderPage(page)}
              </SwiperSlide>
            ))}
          </Swiper>
        </>

      }
      trigger="click"
      open={isOpenMenu}
      onOpenChange={(value) => setIsOpenMenu(value)}
      placement={isMobile ? 'bottomRight' : 'bottom'}
      className={s.icon}
    >
      <div>
        <MarkerIcon />
      </div>
    </Popover>
  )
}

export default MenuContent;