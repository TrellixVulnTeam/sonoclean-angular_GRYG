import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // title = 'SonoClean ® | Servicio de Limpieza de Piezas con Ultrasonidos';
  subscription: Subscription; 
  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
