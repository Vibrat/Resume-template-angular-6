import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.scss"]
})
export class MenuBarComponent implements OnInit {
  public menuItems = [
    { name: "About", tag: "#about", active: true, hideMobile: false },
    { name: "Experience", tag: "#skills", active: false, hideMobile: false },
    { name: "Journey", tag: "#myStory", active: false, hideMobile: false },
    {
      name: "Download CV",
      data: "/assets/files/cv-lam-nguyen.pdf",
      action: "download",
      active: false,
      hideMobile: true
    }
  ];

  constructor() {}

  ngOnInit() {}

  public onClick(key: string) {
    switch (key) {
      case "download": {
        console.log("download triggered");
        break;
      }
    }
  }
}
