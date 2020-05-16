import { ApiRequest } from '../../models';
import {BaseApiManager, BaseApi} from '../base/api';
import {businessQueries} from './queries';
import { ApiClient } from '../../apiClient';
import { BusinessRequest } from '../../models/business/businessRequest'

export interface BusinessApi extends BaseApi<BusinessRequest> {
  
}

export class BusinessApiManager extends BaseApiManager<BusinessRequest> implements BusinessApi {
  
  constructor(apiClient: ApiClient) {
    super(apiClient, businessQueries);
  }

}
