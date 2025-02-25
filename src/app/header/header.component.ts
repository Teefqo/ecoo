import { Component,Input,inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

count$:Observable<number>;
countervalue:number | null =0;
constructor(private store: Store<{ counter: number }>) {
  this.count$ = this.store.select('counter');
 
}


@Input() setcounter:string="";
 count:number=0;
 email="sama@example.com";
 phone="2132132456465";
 name="متجر سما للمنتجات المتنوعة"


 ngoninit()
{
  this.countervalue=Number(sessionStorage.getItem('counter'))||0;
  console.log("ypppp" )
  
}
}
