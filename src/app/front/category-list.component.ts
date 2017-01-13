import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FrontService } from './front.service';

import { Category, DynamicForm } from '../model';

@Component({
  selector: 'category',
  templateUrl: './category-list.component.html' 
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  // filtered: Category[];

  constructor(private frontService: FrontService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Retorna a lista de categorias de acordo com o parâmetro.
    this.route.queryParams
      .switchMap((params: Params) => {
        if (params['category']) {
          return this.frontService.getCategories()
              .map(res => this.filterCategories(res, params['category']));
        } else {
          return this.frontService.getCategories()
              .map(res => this.filterCategories(res));
        }
      })
      .subscribe(res => { this.categories = res; });
  }

  /**
   * Filtra as categorias de acordo com o parentId.
   * Caso seja nulo, traz todas as categorias da raiz.
   */
  private filterCategories(categories: Category[], parentId?: number) {
    if (!parentId) {
      // Retorna somente as categorias da raiz.
      return categories.filter((category) => category.parentId == undefined);
    } else {
      // Ou somente as filhas da categoria do parâmetro.
      return categories.filter(category => category.parentId == parentId);
    }
  }

  categorySelected(category) {
    // Verifica se tem formulário associado, ou é uma categoria pai.
    if (category.formId) {
      this.router.navigate(['/form', category.formId]);
    } else {
      this.router.navigate(['/category'], { queryParams: { category: category.id } });
    }

    return false; // Prevent href to be called.
  }

  // searchCategory(value) {
  //   if (!value || value == "") {
  //     this.filtered = this.categories;
  //   } else {
  //     this.filtered = this.filtered.filter(function(category) {
  //       return category.name.toLowerCase().indexOf(value.toLowerCase()) > 0;
  //     });
  //   }
  // }

}
