import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'amx-userinfo',
  standalone: true,
  imports: [CommonModule],
  template: `
     <section class="content">
        <article class="tile"></article>
        <article class="tile">
          <img src="/assets/noun-pie-chart-6331100-C462DD.png" height="300" />
        </article>
        <article class="tile">
          <img src="/assets/noun-bar-chart-1092111-FF824A.png" height="300" />
        </article>
      </section>
  `,
  styles: ``
})
export class UserinfoComponent {

}
