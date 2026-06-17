export interface TokenResponse {
  sessionToken: string;
}

export interface DecodedToken {
  user: User;
  exp: number;
  iat?: number;
  iss?: string;
}

export interface User {
  firstName: string;
  email: string;
  siteId?: string;
}

export interface StoredUser extends User {
  sessionToken: string;
  exp: number;
}

export type ScriptLocation = "header" | "footer";
export type ScriptTargetType = "site" | "page";
