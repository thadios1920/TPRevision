import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {
  constructor(private emplyeService:EmployeService) { }
lesemps: Employe[] =  [];
ch:string;


onRecherche(ch:string){
  this.lesemps = this.lesemps.filter(
    e=>e.nom.toLowerCase().search(ch.toLocaleLowerCase())>=0
  );
  
   
}

onSupprime(id:number){
  console.log(id);
  this.lesemps = this.lesemps.filter(e=>e.id!=id); 
  
}
  ngOnInit(): void {
    
    this.emplyeService.getEmployes() 
    .subscribe (data =>{ this.lesemps = data;console.log(data);
    }) 
  }
  
  

}
