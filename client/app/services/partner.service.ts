import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Partner } from '../shared/models/partner.model';

@Injectable()
export class PartnerService {

  constructor(private http: HttpClient) { }

  getPartnersByDistance(lat:number,lon:number,maxdistance:number): Observable<Partner[]> {
    return this.http.get<Partner[]>(`/api/partners/list/${maxdistance}/${lat}/${lon}`);
  }

}
