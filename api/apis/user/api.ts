import { ApiRequest } from '../../models';
import { BaseApiManager, BaseApi } from '../base/api';
import { userQueries, authQueries} from './queries';
import { ApiClient } from '../../apiClient';
import { UserRequest, LoginRequest, RegisterRequest } from '../../models/user/userRequest'

export type Message = {
  text: string;
};

export interface UserApi extends BaseApi<UserRequest> {
  login(request: LoginRequest): ApiRequest;

  register(request: RegisterRequest): ApiRequest;

  logout(): ApiRequest;

  messages(): ApiRequest;

  messagesBy(userId: string): ApiRequest;
}

export class UserApiManager extends BaseApiManager<UserRequest> implements UserApi {
  
  constructor(apiClient: ApiClient) {
    super(apiClient, userQueries);
  }

  login(request: LoginRequest): ApiRequest {
    return this.apiClient.query({query:authQueries.login, variables: { input: request }});
  }

  register(request: RegisterRequest): ApiRequest {
    return this.apiClient.query({query:authQueries.login, variables: { input: request }});
  }

  logout(): ApiRequest {
    return this.apiClient.query({query:authQueries.login});
  }

  messageQuery = '  _id text createdAt creator{ _id email } receiver { _id email }';

  messages(): ApiRequest {
    return this.apiClient.subscription({
      query: 'subscription { createMessage { ' + this.messageQuery + ' } }',
      variables: {},
    });
  }

  messagesBy(userId: string): ApiRequest {
    return this.apiClient.query({
      query: '{ messages(relatedId:' + userId + '){ ' + this.messageQuery + ' } }',
    });
  }

}
