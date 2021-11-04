import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(private changeDetector: ChangeDetectorRef) { }

  
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
