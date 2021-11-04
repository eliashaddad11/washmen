import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';


describe('Component: App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should display the navigation bar correctly for guests', () => {
    const de = fixture.debugElement.queryAll(By.css('a'));
    expect(de.length).toBe(2);
    expect(de[0].nativeElement.textContent).toContain('Home');
    expect(de[1].nativeElement.textContent).toContain('Partners');
    expect(de[0].attributes.routerLink).toBe('/');
    expect(de[1].attributes.routerLink).toBe('/partners');
  });


});
