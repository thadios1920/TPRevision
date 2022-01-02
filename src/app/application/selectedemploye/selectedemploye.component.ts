import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selectedemploye',
  templateUrl: './selectedemploye.component.html',
  styleUrls: ['./selectedemploye.component.css']
})
export class SelectedemployeComponent implements OnInit {
  identfiant:number = 0;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
  onEmploye() 
  { 
     this.router.navigate(['/lesemployes']); 
  } 

  ngOnInit(): void {
    this.identfiant = this.activatedRoute.snapshot.params['id'];
  }

}
