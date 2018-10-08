import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  public pageX: number;
  public margin: number = 0;

  public data = {
    angular: {
      title: "Angular",
      description:
        "I'm currently using this frameworks. Can apply MVC, Redux Model,...",
      rate: "A+",
      skills: [
        { name: "typescript", rate: 4 },
        { name: "ngrx", rate: 4 },
        { name: "UX/ UI", rate: 4 },
        { name: "rxjs", rate: 4 },
        { name: "Karma", rate: 3 }
      ],
      keyNote: [
        "Apply Redux, MVC, modeling",
        "Build singleton and reusable module",
        "Unit testing with Karma"
      ]
    },
    js: {
      title: "Javascript",
      description: "Current usage, use it mostly with Angular",
      rate: "B+",
      skills: [
        { name: "OOP", rate: 4 },
        { name: "Basics & Core", rate: 3.5 },
        { name: "lodash", rate: 3 },
        { name: "Jquery", rate: 3 }
      ],
      keyNote: [
        "Create template with JS, HTML & CSS/ SCSS",
        "Build singleton and packaged module",
        "Debug, traver down to root cause of errors"
      ]
    },
    php: {
      title: "PHP",
      description: "First language learnt, used with Opencart",
      rate: "B",
      skills: [
        { name: "OOP", rate: 3.5 },
        { name: "Basics & Core", rate: 3 },
        { name: "MVC", rate: 4 },
        { name: "Opencart", rate: 4 }
      ],
      keyNote: [
        "Building additional features in OpenCart.",
        "Extend MVC model, if necessary",
        "Create API using MVC model"
      ]
    },
    makeup: {
      title: "Makeup Language and Skills",
      description: "Create template, design UI/ UX responsively",
      rate: "A",
      skills: [
        { name: "HTML", rate: 5 },
        { name: "CSS/ SCSS", rate: 5 },
        { name: "Bootstrap", rate: 4.5 },
        { name: "Photoshop/ Figma", rate: 3.5 }
      ],
      keyNote: [
        "Create custom template from scratch (responsively)",
        "Design sketch, UI/ UX",
        "Build UI/ UX Components based on requirements"
      ]
    }
  };

  public keys = Object.keys(this.data);

  public sl;

  constructor(private renderer: Renderer2) {
    this.sl = this.data.angular;
  }

  ngOnInit() {}

  select(name: string) {
    this.sl = this.data[name];
  }

  onDrag(event: DragEvent) {
    this.margin = this.ceilDrag(
      event.pageX - this.pageX,
      (event.target as HTMLElement).offsetWidth,
      80
    );
    this.renderer.setStyle(event.target, "margin-left", `${this.margin}px`);
  }

  dragStart(event: DragEvent) {
    event.dataTransfer.setDragImage(new Image(), 0, 0);
    this.pageX = event.pageX - this.margin;
  }

  onDragEnd(event: DragEvent) {
    this.margin = this.ceilDrag(
      event.pageX - this.pageX,
      (event.target as HTMLElement).offsetWidth,
      80
    );
    this.renderer.setStyle(event.target, "margin-left", `${this.margin}px`);
  }

  private ceilDrag(margin: number, ceilling: number, additional: number) {
    switch (margin < 0) {
      case true: {
        return Math.abs(margin) < ceilling ? margin : -ceilling + additional;
      }
      case false: {
        return Math.abs(margin) < ceilling ? margin : ceilling - additional;
      }
    }
  }

  toArray(rate: number) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(i < rate ? "true" : "false");
    }
    return arr;
  }
}
