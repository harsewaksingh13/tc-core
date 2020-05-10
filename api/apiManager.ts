import apiClient, { ApiClient } from './apiClient';
import { UserApiManager, UserApi } from './apis/user/api';
import { BusinessApiManager, BusinessApi } from './apis/business/api';

interface ApiManager {
  user(): UserApi;
  business(): BusinessApi;
}

class ServiceManagerImpl implements ApiManager {
  userApi: UserApi;
  businessApi: BusinessApi;

  constructor(apiClient: ApiClient) {
    this.userApi = new UserApiManager(apiClient);
    this.businessApi = new BusinessApiManager(apiClient);
  }

  user(): UserApi {
    return this.userApi;
  }

  business(): BusinessApi {
    return this.businessApi;
  }
}

const apiManager: ApiManager = new ServiceManagerImpl(apiClient);

export default apiManager;
