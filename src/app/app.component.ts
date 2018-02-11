import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nb';

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.fragment.subscribe((fragment: string) => {
        console.log('My hash fragment is here => ', fragment);
    });
  }
}
