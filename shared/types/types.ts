export interface IconProps {
  fill?: string
  className?: string
  onClick?: () => void
}

export interface IPriceOptions {
  id: number
  label: string
  value: string
}

export interface IReviewData {
  id: number
  avatar: string
  username: string
  city: string
  rate: number,
  date: number
  route?: string
  review: string
}

export interface IRegion {
  ID: number;
  post_id: number;
  meta_key: string;
  meta_id: number;
  meta_value: string;
  region_value: string;
  url: string | null;
  address: string | null;
  phone_number: string | null;
}

export interface IMailRequest {
  name?: string;
  phone?: string;
  block?: string;
  trip_type?: string;
  device_info?: string;
  trip_date?: string;
  additional_info?: string;
  auto_class?: string;
  order_from?: string;
  order_to?: string;
  trip_price_from?: string;

  status?: boolean
}

// Хабы (категории направлений)
export interface IHub {
  id: number;
  name: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  heroImage?: string;
  features?: string;
  faq?: string;
  sortOrder: number;
  isActive: boolean;
  destinations?: IDestination[];
  _count?: {
    destinations: number;
  };
}

// Направления (маршруты внутри хаба)
export interface IDestination {
  id: number;
  hubId: number;
  hub?: IHub;
  name: string;
  slug: string;
  title: string;
  subtitle?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  heroImage?: string;
  description?: string;
  content?: string;
  fromCity?: string;
  toCity?: string;
  distance?: number;
  duration?: string;
  price?: number;
  priceNote?: string;
  features?: string;
  gallery?: string;
  faq?: string;
  tariffs?: string;
  targetAudience?: string;
  sortOrder: number;
  isActive: boolean;
  isFeatured: boolean;
}