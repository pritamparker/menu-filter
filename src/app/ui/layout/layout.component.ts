import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  items: any[] =
    [
      { 'id': 11, 'name': 'Sales and Configuration', 'src': "../../assets/hobbies.png" },
      { 'id': 22, 'name': 'Loss Preventation Report', 'src': "../../assets/bike.png" },
      { 'id': 13, 'name': 'Sales Forcasting', 'src': "../../assets/clothes.png" },
      { 'id': 11, 'name': 'Sales and Configuration', 'src': "../../assets/fridge.png" },
      { 'id': 33, 'name': 'Post and Close Labor', 'src': "../../assets/furniture.png" },
      { 'id': 32, 'name': 'Employee Detail Report', 'src': "../../assets/shoes.png" },
      { 'id': 21, 'name': 'Daily Payroll Control.', 'src': "../../assets/insurance.png" },
      { 'id': 23, 'name': 'Labor Totals by Position', 'src': "../../assets/laptop.png" },
      { 'id': 31, 'name': 'Projected Overtime.', 'src': "../../assets/travel.png" },
      { 'id': 11, 'name': 'Booking Journal', 'src': "../../assets/van.png" },
      { 'id': 12, 'name': 'Create Employees', 'src': "../../assets/watches.png" },
      { 'id': 13, 'name': 'Edit/Maintain Employees', 'src': "../../assets/kitchen.png" },
      { 'id': 21, 'name': 'Make Same Day Time', 'src': "../../assets/hotel.png" },
      { 'id': 32, 'name': 'Close Labor Weeks', 'src': "../../assets/passenger_carrier.png" },
      { 'id': 13, 'name': 'Print,Publish & Post', 'src': "../../assets/home_decor.png" },
      { 'id': 33, 'name': 'Create/Edit Schedules', 'src': "../../assets/house_helps.png" }
    ]
  selectedItems: any[];
  message: number;
  constructor(private __dataService: DataService) { }

  ngOnInit() {
    this.selectedItems = this.items;
    this.__dataService.currentMessage.subscribe(message => { this.message = message })
  }
  ngDoCheck() {
    if (this.message) {
      this.selectedItems = this.items.filter(item => {
        return item.id == this.message
      })
    } else {
      this.selectedItems = this.items;
    }
  }
}
