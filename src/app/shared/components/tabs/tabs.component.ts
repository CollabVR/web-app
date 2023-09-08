import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input()
  tabs!: string[];

  @Output()
  selectedTabEmitter = new EventEmitter<string>();
  selectedTab! : string;
  
  ngOnInit(): void {
    this.selectedTab = this.tabs[0];
  }

  onSelectTab(tab: string) {
    this.selectedTab = tab;
    this.selectedTabEmitter.emit(tab);
  }
}