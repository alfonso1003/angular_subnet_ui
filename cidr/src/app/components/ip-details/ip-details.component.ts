import { getImportClauses } from '@angular/cli/utilities/get-dependent-files';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// Service
import { AppService } from '../../app.service';
// Interface
import { ICidr } from '../../../api/cidr';

@Component({
  selector: 'app-ip-details',
  templateUrl: './ip-details.component.html',
  styleUrls: ['./ip-details.component.css']
})
export class IpDetailsComponent implements OnInit, OnDestroy {

  ipClass: string;
  ipAddress: string;
  cidrInfo: ICidr;
  private sub: Subscription;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get Single IP Details
    this.sub = this.route.params.subscribe(
      (params: any) => {
        this.ipClass = params['ip-class'];
        this.ipAddress = params['ip-address'];
        if (this.ipClass && this.ipAddress) {
          this.appService.getIpDetails(this.ipClass, this.ipAddress).subscribe(detail => {
            this.cidrInfo = detail;
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
