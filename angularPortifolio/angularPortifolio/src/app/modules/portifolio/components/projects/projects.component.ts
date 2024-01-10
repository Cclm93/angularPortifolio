import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: 'assets/img/projects/gear.png',
      alt:"",
      titlulo: 'projetos',
      width: '100px',
      height: '100px',
      description:'',
      links:[
        {
          name: 'Conheça meu portifolio com htm , js e css puros',
          href: ' https://cclm93.github.io/Portifolio/'
        }

      ]
    }
  ])
}
