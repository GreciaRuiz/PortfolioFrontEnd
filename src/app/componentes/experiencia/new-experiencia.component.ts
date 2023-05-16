import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE: string = '';
  periodoE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.periodoE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló.");
        this.router.navigate(['']);
      }
    )
  }

}
