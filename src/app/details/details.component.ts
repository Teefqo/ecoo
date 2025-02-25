import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment ,decrement} from '../state/counter/counter.actions';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  countervalue:number | null =0;

id:any
counter:number=0;
  data:any
  private store=inject(Store);
  count$?:Observable<number>;
  private cartService = inject(CartService); 
  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.count$=this.store.select('counter');
  }
  decrement()
  {
    this.store.dispatch(decrement());
  }
  increment() {
    this.store.dispatch(increment());
    if (this.data) {
      this.cartService.addToCart(this.data);
    }
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    Toast.fire({
      icon: "success",
      title: "تمت الإضافة إلى السلة بنجاح"
    });
  }
  

  ngOnInit() {
  
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then(response => response.json())
      .then(result => {
        this.data = result;
        console.log(this.data.title);
      });
  
   
    this.count$?.subscribe(value => {
      this.countervalue = value;
      sessionStorage.setItem('counter', value.toString()); 
    });
  
    
    this.countervalue = Number(sessionStorage.getItem('counter')) || 0;
  }
  buyNow() {
    if (this.data) {
      this.cartService.addToCart(this.data); // إضافة المنتج إلى السلة
    }
  
    // إظهار تنبيه نجاح العملية
    Swal.fire({
      icon: "success",
      title: "تمت الإضافة إلى السلة",
      text: "سيتم نقلك إلى صفحة الدفع الآن",
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      // توجيه المستخدم إلى صفحة الدفع بعد نجاح الإضافة
      window.location.href = "/checkout"; 
    });
  }
  
  
  }

