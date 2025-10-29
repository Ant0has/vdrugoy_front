import { FC } from 'react'
import { IconProps } from '@/shared/types/types';

const BaggageIcon: FC<IconProps> = ({ fill }) => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V8C18 6.89543 17.1046 6 16 6Z" stroke="#F7FBFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6V3M14 6V3M8 2H16M9 20V22M15 20V22M10 12.5H14" stroke="#F7FBFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export default BaggageIcon