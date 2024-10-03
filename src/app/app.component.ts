import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCardComponent} from "./component/product-card/product-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ObjectOrientedCSS';
  protected readonly String = String;
}
