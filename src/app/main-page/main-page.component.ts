import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  userEmail! : string

  constructor(private router: Router) {

  }

  onSubmitForm(form : NgForm) : void {
    console.log(form.value)
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps')
  }
}
