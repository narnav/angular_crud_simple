import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    myProds:Product[] = []
    constructor(private prodSrv: ProductService) {
        prodSrv.getItems().subscribe(res => this.myProds = res)
    }
    onSubmit(price:number,desc:string){
        this.prodSrv.addItem({desc,price}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
        console.log(price , desc)
    }
    delProd(id:any){
        console.log(id)
        this.prodSrv.deleteItem(id).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
    }
    updProd(id:any,desc:string,price:number){
        console.log(id)
        this.prodSrv.updateItem({id,desc,price}).subscribe(res => this.prodSrv.getItems().subscribe(res => this.myProds = res))
    }
}
