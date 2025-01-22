import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MenuComponent {

  toggleMenu($event: MouseEvent) {
throw new Error('Method not implemented.');
}


public items: MenuItem[] | undefined = [];

    ngOnInit() {
        this.items = [
            { label: 'Pipes de Angular', 
              icon: 'pi pi-desktop',
            items: [
                { label: 'Textos y fechas',
                  icon: 'pi pi-align-left',
                 },
                 { label: 'Números',
                  icon: 'pi pi-dollar',
                 },
                 { label: 'No comunes',
                  icon: 'pi pi-globe',
                 }
            ] 
          },
            { 
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
              items: [
                  {
                  label: 'Otro elemento',
                  icon: 'pi pi-sort-alpha-up',
                  }
              ]
            }
        ];
      }
}