
import { Injectable } from '@angular/core';
import { CATEGORIES } from '../data/store.data';
import { PRODUCTS } from '../data/store.data';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    // Возвращаем КОПИЮ массива, чтобы не мутировать исходные данные
    return PRODUCTS.filter((p) => p.categoryId === categoryId).map((p) => ({ ...p }));
  }
}