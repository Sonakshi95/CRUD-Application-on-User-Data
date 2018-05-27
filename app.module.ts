import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UpdateUserComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: UserComponent},
      {path: "crud",component: CrudComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
