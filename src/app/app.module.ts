import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HeaderComponent } from './header/header.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { NotesComponent } from './notes/notes.component';
import { ClientFormBasicDataComponent } from './client-form-basic-data/client-form-basic-data.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'form', component: ClientFormComponent },
  {
    path: 'home',
    component: ClientListComponent,
    data: { title: 'home List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    HeaderComponent,
    ClientFormComponent,
    NotesComponent,
    ClientFormBasicDataComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
