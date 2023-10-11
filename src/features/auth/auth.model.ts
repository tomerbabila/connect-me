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
