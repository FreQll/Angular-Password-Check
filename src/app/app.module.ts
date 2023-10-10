import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordScaleComponent } from './password-scale/password-scale.component';
import { PasswordCheckFormComponent } from './password-check-form/password-check-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordScaleComponent,
    PasswordCheckFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
