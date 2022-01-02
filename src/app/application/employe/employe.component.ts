import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employe } from 'src/app/entities/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(private emplyeService:EmployeService) { }
  @Input() emp:Employe;
  @Output() notify= new EventEmitter<number>();

  ngOnInit(): void {
  }
  onSupprime(){
    this.emplyeService.delEmploye(this.emp.id)
  .subscribe (data => console.log(data)); 
  this.notify.emit(this.emp.id);
  
  }


}