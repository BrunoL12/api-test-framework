import type { HttpClient } from "../../../core/http/httpClient";
import { clients } from "../../../config/clients";
import type { HttpRequestOptions } from "../../../core/http/httpTypes";
import type { ReqResUsersupdateResponse } from "../models/reqresUsersupdate.model";
import { type HttpRequestBypass, withBypass } from "../../../core/http/httpRequestBypass";

export class FakeStoreUserService {

  constructor(private readonly http: HttpClient = clients.fakestore) {}

  updateUser(id: string, body: unknown, opts?: HttpRequestOptions) {
    return this.http.put<ReqResUsersupdateResponse>(`/users/${id}`,body,opts)}

  getUser(id: string, opts?: HttpRequestOptions) {
    return this.http.get(`/users/${id}`, opts);
  }
}
