import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { TopicsComponent } from '../topics/topics.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,SideMenuComponent,TopicsComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
