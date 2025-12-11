// API URL configuration
// На сервере используем внутренний адрес, в браузере - относительный путь
export const API_URL = typeof window === 'undefined'
  ? (process.env.INTERNAL_API_URL || 'http://localhost:3003/api')
  : '/api';
