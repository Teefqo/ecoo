import { Component } from '@angular/core';

@Component({
  selector: 'app-electronics',
  standalone: false,
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {

  str:string="ABCD";
  
  data:any
  ngOnInit()
  {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(response=>response.json())
    .then(result => {
      this.data = result; 
     
    })
  
  }
}
