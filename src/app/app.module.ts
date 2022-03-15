import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Erro404Component } from './core/component/erro404/erro404.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';





@NgModule({
  declarations: [
    AppComponent,
    Erro404Component,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      

    ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
