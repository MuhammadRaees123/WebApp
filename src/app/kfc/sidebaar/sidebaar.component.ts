import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebaar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebaar.component.html',
  styleUrl: './sidebaar.component.css'
})
export class SidebaarComponent {

  constructor(private router: Router) {}

  isActive(route: string): boolean {
      return this.router.isActive(route, true);
  }  

  // Side Baar Hide And Show Functionality 

  // currentTab: string = ''; // Default to empty string

  // openPage(pageName: string, event: MouseEvent) {
  //     if (this.currentTab === pageName) {
  //         // Toggle visibility if clicking the same tab again
  //         this.currentTab = '';
  //     } else {
  //         this.currentTab = pageName;
  //     }
  //     this.activateTab(event.target as HTMLElement);
  // }

  // activateTab(elmnt: HTMLElement) {
  //     const tablinks = document.querySelectorAll('.tablink.nav-link');
  //     tablinks.forEach(tab => tab.classList.remove('active'));
  //     elmnt.classList.add('active');
  // }
  
}
