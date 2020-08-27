import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { MinValidatorDirective } from './directives/min-validator.directive';
import { MaxValidatorDirective } from './directives/max-validator.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MustMatchDirective,
        MinValidatorDirective,
        MaxValidatorDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }