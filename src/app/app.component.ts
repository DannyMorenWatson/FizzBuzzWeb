import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FizzBuzz';
  add: boolean = true;
  disponible: boolean = true;
  nombre: any;
  activo : any = '';
  pasivo : any = '';
  totalp : any = 0;
  totala : any = 0 ;
  total : any = 0;
  cuentas =  [];

  ngOnInit() {
    this.FizzBuzz();
      
     }

  /*getDatos(){
      this.cuentas = [];
      for (var i =  this.cuentas.length -1; i >= 0 ; i--) {
        this.cuentas.push( this.cuentas[i]);
      }

   
  }*/

  addD(){
    this.add = false;
  }
    

    FizzBuzz(){
      let tipo=''
      for (let  i = 1; i<=100; i++) {
       this.nombre = i
       if(i % 3 == 0 && i % 5 == 0 ){
   
        tipo = 'FizzBuzz';
      }
      else{
    
        if(i % 3 == 0){
          tipo = 'Fizz';
        }
       
        if(i % 5 == 0){
    
          tipo = 'Buzz';
        }
       
      }
      this.cuentas.push({'number': i, 'full': tipo});

      tipo = '';
      }
    
    }
}
