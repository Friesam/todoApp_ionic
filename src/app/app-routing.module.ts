import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'todo-items', loadChildren: './pages/todo-items/todo-items.module#TodoItemsPageModule' },
  { path: 'todo-items/:id', loadChildren: './pages/todo-items/todo-items.module#TodoItemsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
