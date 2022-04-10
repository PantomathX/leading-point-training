import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: string[] = ['home', 'about', 'contact', 'todo'];
  title = 'Angular Search Using ng2-search-filter';

  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'},
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 12, name: 'Narco' , country: 'USA'},
  ];
  filteredValues = this.heroes;
  filter(str : string){
    this.filteredValues= [];
    for(let i=0; i<this.heroes.length; i++){
      if(this.heroes[i].name.toLowerCase().indexOf(str.toLowerCase())!=-1){
        this.filteredValues.push(this.heroes[i]);
      }
    }
  }
  

}
