import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl:  './product-card.css' ,
})
export class ProductCard {

  @Input() product!: Product;

  share() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check this product: ${url}`, '_blank');
  }

}
