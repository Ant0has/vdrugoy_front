import { FC } from 'react'
import { IconProps } from '@/shared/types/types';

const TimeIcon: FC<IconProps> = ({ fill }) => {
  return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 41C33.3888 41 41 33.3888 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 33.3888 14.6112 41 24 41Z" stroke="#0B1839" />
    <path d="M33 24H24.5C24.3674 24 24.2402 23.9473 24.1464 23.8536C24.0527 23.7598 24 23.6326 24 23.5V17" stroke="#0B1839" strokeLinecap="round" />
    <path d="M24 41C33.3888 41 41 33.3888 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 33.3888 14.6112 41 24 41Z" stroke="#0B1839" />
    <path d="M33 24H24.5C24.3674 24 24.2402 23.9473 24.1464 23.8536C24.0527 23.7598 24 23.6326 24 23.5V17" stroke="#0B1839" strokeLinecap="round" />
  </svg>
}

export default TimeIcon