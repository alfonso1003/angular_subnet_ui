import { Component, OnInit } from '@angular/core';
// Service
import { AppService } from '../../app.service';
// Interface
import { ICidrData } from '../../../api/cidr';

@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.css']
})
export class IpListComponent implements OnInit {

  cidrs: ICidrData[];

  // Dependency Injection
  constructor(private appService: AppService) { }

  ngOnInit() {
    // Get the data via AppService
    this.appService.getCidrs()
      .subscribe(
      cidrs => this.cidrs = cidrs,
    );

  }

  toggleIps(item: ICidrData) {
    item.isShowDetails = !item.isShowDetails;
  }

}
