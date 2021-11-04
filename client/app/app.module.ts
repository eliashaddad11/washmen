// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Services
import { PartnerService } from './services/partner.service';

// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartnersComponent} from './partners/partners.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    PartnerService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
