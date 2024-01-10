import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences =signal([
    {
      summary:{
        strong:"Estagiário",
        p:"abril 2023 - agosto 2023"
      },
      text:"Estágio na Secretaria da Fazenda de Pernambuco, onde participei na modernização do sistema, utilizando a framework Angular e as linguagens Typescript, HTML e CSS"
    },
    {
      summary:{
        strong:"Desenvolvedor full-stack Júnior",
        p:"Setembro 2023 - Presente"
      },
      text:" Responsável pela manutenção dos subsistemas que compõe o sistema efisco. Forte utilização das linguagens Java EE, Javascript, SQL e ferramentas como: ecplipse, DBeaver , Angular ,VScode"
    },





  ])

}
