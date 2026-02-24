import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  liked = false;

  onLike(): void {
    this.product.likes++;
    this.liked = true;
    setTimeout(() => (this.liked = false), 300);
  }

  onDelete(): void {
    if (confirm(`Удалить "${this.product.name}"?`)) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.kaspiUrl);
    const text = encodeURIComponent(`${this.product.name} — ${this.product.price} ₸`);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.kaspiUrl);
    const text = encodeURIComponent(`${this.product.name} — ${this.product.price} ₸`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  get stars(): string {
    return '⭐'.repeat(Math.round(this.product.rating));
  }

  get formattedPrice(): string {
    return this.product.price.toLocaleString('ru-RU') + ' ₸';
  }
}