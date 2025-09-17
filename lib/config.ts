export const config = {
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://app.blaym.io',
    loginUrl: process.env.NEXT_PUBLIC_APP_LOGIN_URL || 'https://app.blaym.io/sign-in',
    signupUrl: process.env.NEXT_PUBLIC_APP_SIGNUP_URL || 'https://app.blaym.io/sign-up',
    dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://app.blaym.io/u/dashboard',
  },
  clerk: {
    domain: process.env.NEXT_PUBLIC_CLERK_DOMAIN || 'clerk.blaym.io',
  },
  waitlist: {
    apiUrl: process.env.NEXT_PUBLIC_WAITLIST_API_URL || 'https://dev.extapi.blaym.io/waitlist',
  },
} as const;
