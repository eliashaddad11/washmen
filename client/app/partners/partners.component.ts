import { Component, OnInit } from '@angular/core';

import { PartnerService } from '../services/partner.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Partner } from '../shared/models/partner.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partner = new Partner();
  partners: Partner[] = [];
  isLoading = false;

  partnerForm:FormGroup;
  
  constructor(private formbuilder:FormBuilder,private partnerService: PartnerService,
              public toast: ToastComponent) { }

  get f() {
    return this.partnerForm.controls;
  } 
            

  ngOnInit(): void {

      this.partnerForm = this.formbuilder.group({
        maxdistance:['',[Validators.required,Validators.pattern("^(0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*)$")]]
      });
  }

  getPartnersBydistance(maxdistance:number,lat:number,lon:number): void {
    this.isLoading = true;
    this.partnerService.getPartnersByDistance(lat,lon,maxdistance).subscribe(
      data => this.partners = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  onSubmit()
  {
     if (this.partnerForm.value.maxdistance)
        this.getPartnersBydistance(this.partnerForm.value.maxdistance,51.5144636,-0.142571);
  }

  reset()
  {
      this.isLoading=false;
      this.partnerForm.reset();
      this.partners=[];
  }
  
}
