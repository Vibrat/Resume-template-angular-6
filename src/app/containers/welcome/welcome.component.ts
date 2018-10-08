import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  public data = {
    title: "Lam Nguyen",
    linkedin: {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/lam-nguyen-account/"
    },
    summary: {
      UI: "UI",
      UX: "UX",
      skills: ["Angular", "Javascript", "PHP", "OpenCart"]
    }
  };

  public cv = {
     link: '/assets/files/cv-lam-nguyen.pdf'
  }

  constructor() {}

  ngOnInit() {}
}
