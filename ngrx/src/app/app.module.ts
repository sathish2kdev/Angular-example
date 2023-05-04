import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './counter/component/component.component';

import {StoreModule} from '@ngrx/store'

import { ComponentbuttonComponent } from './counter/componentbutton/componentbutton.component';
import { ComponentoutputComponent } from './counter/componentoutput/componentoutput.component';
import { reducerFunction } from './counter/state/conter.reducer';
import { CustominputComponent } from './counter/custominput/custominput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Home/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UpdatepostComponent } from './post/updatepost/updatepost.component';
import { SampleComponent } from './counter/sample/sample/sample.component';
import { reducerFunctions } from './counter/sample/state/sample.reducer';
import { commonReducer } from './store/samples.state';
import { SaveComponent } from './counter/sample/saveData/save/save.component';
import { SaveEffects } from './counter/sample/saveData/save/state/save.effects';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ComponentbuttonComponent,
    ComponentoutputComponent,
    CustominputComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    UpdatepostComponent,
    SampleComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(commonReducer),
    EffectsModule.forRoot([SaveEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
     // maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      //autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
