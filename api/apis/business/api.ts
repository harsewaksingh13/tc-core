import { ApiRequest } from '../../models';
import BaseApiImpl from '../base/api';
import BusinessQueries from './queries';
import { ApiClient } from '../../apiClient';

interface BusinessRequest {

}

export default class BusinessApiImpl extends BaseApiImpl<BusinessRequest> {
  
  constructor(apiClient: ApiClient) {
    super(apiClient, BusinessQueries);
  }

}
