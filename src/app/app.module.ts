import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventModule } from './event/event.module';
import { HomeModule } from './home/home.module';
import { SpeakerModule } from './speaker/speaker.module';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    EventModule,
    CoreModule,
 
    StudentModule,
    SpeakerModule,
 
  ],

  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
