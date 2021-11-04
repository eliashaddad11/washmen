import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { PartnerService } from '../services/partner.service';
import { PartnersComponent } from './partners.component';
import { of, Observable } from 'rxjs';

class PartnerServiceMock {
  mockPartners = [
    { organization: 'Partner 1'},
    { organization: 'Partner 2'},
  ];
  getPartnersByDistance(lat:number,lon:number,maxdistance:number): Observable<object[]> {
    return of(this.mockPartners);
  }
}

describe('Component: Partners', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ PartnersComponent ],
      providers: [
        ToastComponent, FormBuilder,
        { provide: PartnerService, useClass: PartnerServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header text', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Current partners (0)');
  });

  it('should display the text for no partners near you', () => {
    component.partners = [];
    fixture.detectChanges();
    const headerEl = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(headerEl.textContent).toContain('Current partners (0)');
    const tdEl = fixture.debugElement.query(By.css('td')).nativeElement;
    expect(tdEl.textContent).toContain('There are no partner near you.');
  });



});
