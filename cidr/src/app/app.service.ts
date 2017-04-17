import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Interface
import { ICidr, ICidrData } from '../api/cidr';

@Injectable()
export class AppService {

  // Path to JSON data
  private cidrDataUrl = 'src/api/cidr.json';

  // Dependency Injection
  constructor(private http: Http) { }

  // Get All data from JSON
  getCidrs(): Observable<ICidrData[]> {
    return this.http.get(this.cidrDataUrl)
      .map((response: any) => <ICidrData[]>response.json().cidrData);
  }

  // Get IP Details by IP Class (CIDR Block)
  getIpDetails(ipClass: string, ipAddress: string): Observable<ICidr> {
    return this.getCidrs()
      .map(ips => {
        const the_class = ips.find(ipa => ipa.ip_class === ipClass);
        if (the_class) {
          return the_class.cidr_info.find(p => p.ip_address === ipAddress);
        }
        return null;
      });
  }

}
