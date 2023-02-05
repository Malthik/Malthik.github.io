export interface IEnvironment {
  name: string;
  production: boolean;
  apiUrls: {
    v1: string;
  };
}
