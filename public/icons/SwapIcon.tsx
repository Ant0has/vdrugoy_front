import { FC } from 'react'
import { IconProps } from '@/shared/types/types';

const SwapIcon: FC<IconProps> = ({ fill }) => {
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" fill="#FBFBFB" stroke="#C7E0FF" />
    <g clipPath="url(#clip0_370_134)">
      <path d="M21.9719 10.6937C20.5094 9.04375 18.3813 8 16 8C11.5813 8 8 11.5813 8 16H10C10 12.6844 12.6844 10 16 10C17.8281 10 19.45 10.8281 20.5469 12.1188L18.6656 14H24V8.66562L21.9719 10.6937ZM16 22C14.1719 22 12.55 21.1719 11.4531 19.8813L13.3344 18H8V23.3344L10.0281 21.3062C11.4906 22.9562 13.6219 24 16 24C20.4187 24 24 20.4187 24 16H22C22 19.3156 19.3156 22 16 22ZM17.3344 16C17.3344 15.2625 16.7375 14.6656 16 14.6656C15.2625 14.6656 14.6656 15.2625 14.6656 16C14.6656 16.7375 15.2625 17.3344 16 17.3344C16.7375 17.3344 17.3344 16.7375 17.3344 16Z" fill="#224193" />
    </g>
    <defs>
      <clipPath id="clip0_370_134">
        <rect width="16" height="16" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
}

export default SwapIcon