import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './CRUD/create/create.component';
import { userReducer } from './CRUD/state/user.reducer';
import { ViewComponent } from './CRUD/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({userreducer:userReducer}),
    StoreDevtoolsModule.instrument({
     // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      //autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
