import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./../app/app.routing.module";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { welcomeScreenComponent } from "./../app/components/welcome-screen.component";
import { HomeComponent } from "./../app/home/home.component";

@NgModule({
  declarations: [AppComponent, welcomeScreenComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}