import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversityComponent } from './add-university/add-university.component';
import { SearchUniversityComponent } from './search-university/search-university.component';

const routes: Routes = [
  
  { path: '', component: AddUniversityComponent },
  { path: 'search', component: SearchUniversityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
