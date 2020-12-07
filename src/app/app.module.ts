import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { L1c1Component } from './l1c1/l1c1.component';
import { L1c2Component } from './l1c2/l1c2.component';
import { L1L2c1Component } from './l1-l2c1/l1-l2c1.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendServiceService } from './backend-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from 'src/cache/request-cache.service';
import { L1L2c1L3c1Component } from './l1-l2c1/l1-l2c1-l3c1/l1-l2c1-l3c1.component';
import { FormsModule } from '@angular/forms';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StackingcontextComponent } from './stackingcontext/stackingcontext.component';
import { Stackingcontext2Component } from './stackingcontext2/stackingcontext2.component';
import { CustomattrsampleComponent } from './attributePrac/customattrsample/customattrsample.component';
import { SvgPracticeModule } from './svg-practice/svg-practice.module';
import { ImScSvgspriteComponent } from './im-sc-svgsprite/im-sc-svgsprite.component';
import { JavaScriptFeaturesModule } from './java-script-features/java-script-features.module';
import { ChangedetectionpracModule } from './changedetectionprac/changedetectionprac.module';
import { TemplatedrivenformsModule } from './templatedrivenforms/templatedrivenforms.module';
import { CodeDrivenFormsModule } from './code-driven-forms/code-driven-forms.module';
import { DirectivePracModule } from './directive-prac/directive-prac.module';
import { DIPracModule } from './diprac/diprac.module';
import { SharedModule } from './shared/shared.module';
import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
    L1c1Component,
    L1c2Component,
    L1L2c1Component,
    ContactListComponent,
    ContactDetailComponent,
    L1L2c1L3c1Component,
    TemperatureConverterComponent,
    StackingcontextComponent,
    Stackingcontext2Component,
    CustomattrsampleComponent,
    ImScSvgspriteComponent,
    EagerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SvgPracticeModule,
    JavaScriptFeaturesModule,
    ChangedetectionpracModule,
    TemplatedrivenformsModule,
    CodeDrivenFormsModule,
    DirectivePracModule,
    DIPracModule,
    SharedModule.forRoot()
    //InMemoryWebApiModule.forRoot(BackendServiceService)

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
