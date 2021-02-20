import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  servicio: Array<any>=[
    {
      nombre:"Desarrollo Web", 
      desc:"PORTALES; La ventana directa a tus futuros clientes. Desarrollaremos la programación web de su portal para que pueda ofrecer a sus usuarios, de la forma más fácil e intuitiva posible.   INTRANET-EXTRANET; queremos ayudarle a organizar y gestionar la información y comunicación de su empresa."
    },
    {
      nombre:"Gestion de Sistemas", 
      desc:"Estudio de las necesidades del cliente, diseño de su infraestructura tecnológica, implantación y posterior soporte, mantenimiento informático de sus sistemas. Brindamos todas las soluciones posibles para su modelo de negocio, montandolo en sus instalaciones o en cloud, según sus necesidades y requisitos."
    },
    {
      nombre:"Software a Medida", 
      desc:"La calidad de las tecnologías utilizadas es tan importante como su adecuada elección, implantación y uso. Factores esenciales para aumentar la productividad y reducir costes. Nuestros especialistas analizarán las características de su empresa, le asesorarán, orientarán y recomendarán el desarrollo del software a medida más adecuado a su caso."
    },
    {
      nombre:"Aplicaciones Moviles", 
      desc:"Aprovecha la oportunidad de llegar a las millones de personas que ya usan dispositivos móviles en todo el mundo, ofrecemos soluciones profesionales desarrolladas a medida para estos dispositivos, con los que podrá acceder a un mercado en constante crecimiento."
    },
    {
      nombre:"Gestion Empresarial", 
      desc:"Es un conjunto de herramientas tecnológicas ERP que permitirá a las empresas disponer de un sistema totalmente integrado con las últimas tecnologías, así como la planificación y optimización de los recursos físicos, técnicos y humanos."
    },
    {
      nombre:"Marketing Online", 
      desc:"SEO & SEM Conseguimos posicionar tu página web y te proporcionamos las estrategias necesarias para trabajar esa relevancia en las redes sociales y contenidos. Ofreciendo el control, la rapidez y la amplitud que su estrategia necesite."
    },
    {      nombre:"Redes y Sistemas", 
      desc:"Soluciones completas de diseño, configuración e integración de toda la infraestructura de IT, evaluando “desde cero” las necesidades de recursos y tiempos de respuesta para llegar a una solución óptima."
    },
    {
      nombre:"Consultoria Informatica", 
      desc:"Una buena elección y asesoramiento sobre los sistemas y herramientas informáticas que han de dar soporte a una organización es esencial para que ésta se mantenga en constante rendimiento"
    },
  ]
  ngOnInit(): void {
  }

}
