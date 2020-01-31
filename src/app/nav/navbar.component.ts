import { Component, OnInit, Input } from '@angular/core';
import { Alerts } from '../Models/alerts';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() public alerts: Array<Alerts> = [];
  message = '';
  public globalResponse: any;
  cartItemCount: Number = 0;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

}
