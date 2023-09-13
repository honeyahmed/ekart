import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string=""
//1- Create an event
@Output()
searchTextChange:EventEmitter<string>=new EventEmitter<string>();
//2- Fire event function
onSearchTextChange=()=>{
}
// first matching input wwith ref var

@ViewChild("searchInput") searchInputEl:ElementRef;

updateSearchText=()=>{
  // this.searchText=event.target.value
  this.searchText=this.searchInputEl.nativeElement.value;
  this.searchTextChange.emit(this.searchText)
 
}

}
