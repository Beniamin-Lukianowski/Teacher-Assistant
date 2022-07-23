
import { Component, OnInit, Input } from "@angular/core";
import { welcomeAnimationType } from "./welcome-animation-type";

@Component({
  selector: "welcome-screen",
  templateUrl: "./welcome-screen.component.html",
  styleUrls: ["./welcome-screen.component.css"]
})
export class welcomeScreenComponent implements OnInit {
  windowWidth: string;
  welcomeTransition: string;
  opacityChange: number = 1;
  showwelcome = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: welcomeAnimationType = welcomeAnimationType.SlideLeft;

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case welcomeAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case welcomeAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case welcomeAnimationType.FadeOut:
          transitionStyle = "opacity " + this.animationDuration + "s";
          this.opacityChange = 0;
      }

      this.welcomeTransition = transitionStyle;

      setTimeout(() => {
        this.showwelcome = !this.showwelcome;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }
}