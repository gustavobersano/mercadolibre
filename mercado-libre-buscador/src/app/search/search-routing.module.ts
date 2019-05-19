import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SearchingListComponent } from './components/searching-list/searching-list.component';

const routes: Routes = [{
    path: '',
    component: SearchingListComponent
}, {
    path: ':id',
    loadChildren: '../product/product.module#ProductModule'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingSearchModule { }