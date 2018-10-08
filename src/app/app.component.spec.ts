import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MenuBarComponent } from "./containers/menu-bar/menu-bar.component";
import { WelcomeComponent } from "./containers/welcome/welcome.component";
import { FooterComponent } from "./containers/footer/footer.component";
import { DetailsComponent } from "./containers/details/details.component";

describe("AppComponent", () => {
  let fixture;
  let compElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuBarComponent,
        WelcomeComponent,
        FooterComponent, DetailsComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compElement = fixture.debugElement.nativeElement;
  }));
  it("should include <app-menu-bar></app-menu-bar>", () => {
    expect(
      compElement.getElementsByTagName("app-menu-bar").length
    ).toBeGreaterThan(0);
  });
  it("should include <app-welcome></app-welcome>", () => {
    // Checking if <app-welcome></app-welcome> exists
    expect(
      compElement.getElementsByTagName("app-welcome").length
    ).toBeGreaterThan(0);
  });
});
