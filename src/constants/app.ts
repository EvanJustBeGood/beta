export const APP_CONFIG = {
  NAME: 'LunaPC',
  DESCRIPTION: 'Ваш персональный путь к высокопроизводительным играм',
  VERSION: '1.0.0'
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CART: '/cart',
  FAVORITES: '/favorites'
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
} as const;
