import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-journey",
  templateUrl: "./journey.component.html",
  styleUrls: ["./journey.component.scss"]
})
export class JourneyComponent implements OnInit {
  public data = {
    title: {
      column1: {
        name: "Employment",
        description: "Economics Bachelor, Work in Sales & Management"
      },
      column2: {
        name: "Another Story",
        description: "Coder, using Angular, Js, PHP"
      }
    },
    tree: [
      {
        year: "2012",
        text: "Study Economics at Foreign Trade University",
        parent: "column1"
      },
      {
        year: "2014",
        text: "Start learning how to code, with HTML/ CSS/ Javascript",
        parent: "column2"
      },
      { year: "2015", text: "Learn PHP/ Opencart", parent: "column2" },
      {
        year: "Jan 2016 - Coding & learning part-time",
        text: "Graduated, Bachelor of Economics",
        parent: "column1"
      },
      {
        year: "August, 2016 - Coding & learning part-time",
        text: "Join Sales Management Associates Program of Prudential",
        parent: "column1"
      },
      {
        year: "April, 2017 - Coding & learning part-time",
        text: "Work for Prudential as Bancassurance Sales Manager ",
        parent: "column1"
      },
      { year: "Dec, 2017", text: "Left Prudential", parent: "column1" },
      { year: "Jan, 2018", text: "Start using Angular", parent: "column2" },
      {
        year: "February, 2018",
        text: "Start create a tool to draw template with Angular 6",
        parent: "column2"
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
