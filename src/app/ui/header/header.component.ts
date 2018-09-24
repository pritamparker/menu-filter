import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showPanel: string = 'show';
  showMenu: string = '';
  showTopMenu: string = '';
  show: boolean = false;
  hideAll: boolean = true;
  message: number;
  menuItems: any[] = [
    {
      'id': 1,
      'mainCategory': 'Category',
      'subCategory': [{ 'id': 11, 'name': 'Cash Management' }, { 'id': 12, 'name': 'Labor Management' }, { 'id': 13, 'name': 'Inventory Management' }]
    }, {
      'id': 2,
      'mainCategory': 'Type',
      'subCategory': [{ 'id': 21, 'name': 'Tasks' }, { 'id': 22, 'name': 'Reports' }, { 'id': 23, 'name': 'Setup & Config' }]
    }, {
      'id': 3,
      'mainCategory': 'Time',
      'subCategory': [{ 'id': 31, 'name': 'Daily' }, { 'id': 32, 'name': 'Weekly' }, { 'id': 33, 'name': 'Monthly' }]
    },
    {
      'id': 4,
      'mainCategory': 'Color',
      'subCategory': [{ 'id': 11, 'name': 'Cash Management' }, { 'id': 12, 'name': 'Labor Management' }, { 'id': 13, 'name': 'Inventory Management' }]
    }, {
      'id': 5,
      'mainCategory': 'Price',
      'subCategory': [{ 'id': 21, 'name': 'Tasks' }, { 'id': 22, 'name': 'Reports' }, { 'id': 23, 'name': 'Setup & Config' }]
    }, {
      'id': 6,
      'mainCategory': 'Rate',
      'subCategory': [{ 'id': 31, 'name': 'Daily' }, { 'id': 32, 'name': 'Weekly' }, { 'id': 33, 'name': 'Monthly' }]
    },
    {
      'id': 7,
      'mainCategory': 'All',
      'subCategory': [{ 'id': null, 'name': 'All Show' }]
    }
  ]
  constructor(private __dataService: DataService) { }

  ngOnInit() {
    this.__dataService.currentMessage.subscribe(message => this.message = message)
  }
  expandProfile(id) {
    console.log(id)
    this.showTopMenu = 'show';
    this.menuItems.forEach(item => {
      this[this.showPanel + item.id] = false;
    })
    this[this.showPanel + id] = true;
    setTimeout(() => {
      this.hideAll = true;
    }, 0)
  }
  selectSubCategory(id) {
    this.__dataService.changeMessage(id)
  }
  close($event) {
    if ($event == null) {
      this.hideAll = false;
    }
  }
  opneMenu() {
    this.show = !this.show;
    if (this.show) {
      this.showMenu = 'show';
    } else {
      this.showMenu = 'hide';
    }
  }

}
