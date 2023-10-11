export interface StateModel {
  loading: boolean;
  token: string | null;
  error: AuthErrorModel | null;
  success: boolean;
}

export interface AuthErrorModel {
  error: string;
  error_description: string;
}

export enum GRANT_TYPE {
  CLIENT_CREDENTIALS = 'client_credentials',
}

export interface BodyModel {
  grant_type: GRANT_TYPE;
  client_id: string;
  client_secret: string;
}
