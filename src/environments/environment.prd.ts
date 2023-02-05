import { IEnvironment } from './environment.base';

export const environment: IEnvironment = {
  production: true,
  name: 'prod',
  apiUrls: {
    v1: 'https://api-curriculum.azurewebsites.net/',
  },
};
