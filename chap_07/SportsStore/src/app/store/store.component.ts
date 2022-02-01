import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public selectedCategory: string | undefined | null = null;

  constructor(private repository: ProductRepository) { }

  get products() : Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories() : (string | undefined)[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string ) {
    this.selectedCategory = newCategory;
  }
}