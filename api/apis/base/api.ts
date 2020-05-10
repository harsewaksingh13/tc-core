import { ApiRequest } from '../../models';
import { ApiClient } from '../../apiClient';
import { BaseQueries } from './queries';

export interface BaseApi<T> {
	add(request: T): ApiRequest,
	get(id: string): ApiRequest,
	update(): ApiRequest,
	remove(id: string): ApiRequest,
	list(): ApiRequest
}

export class BaseApiManager<T> implements BaseApi<T>  {

	apiClient: ApiClient;
	queries: BaseQueries;

  constructor(apiClient: ApiClient, queries: BaseQueries) {
		this.apiClient = apiClient;
		this.queries = queries;
	}

	add(request: T): ApiRequest {
    return this.apiClient.query({
      query:this.queries.add,
      variables: { input: request }
    });
  }
	
	get(id: string): ApiRequest {
    return this.apiClient.query({
      query:this.queries.get,
			variables: { input: {_id:id} }
    });
  }
	
	update(): ApiRequest {
    return this.apiClient.query({ query: this.queries.update });
  }
	
	remove(id: string): ApiRequest {
    return this.apiClient.query({ query: this.queries.remove });
	}
	
  list(): ApiRequest {
    return this.apiClient.query({ query: this.queries.list });
  }
}