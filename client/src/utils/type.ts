export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  emailConfirmedAt: string;
  phone: string;
  lastSignInAt: string;
  appMetaData: AppMetaData;
}

interface AppMetaData {
  provider: string;
  providers: string[];
}

export interface Session {
  sessionToken: string;
  refreshToken: string;
}
