import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private playersService: PlayersService,  private router: Router) { }

  ngOnInit() {

  }

  
  loginUser(e){  
    
    
    e.preventDefault();
    
    console.log(e);

    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
        
     if (username == 'admin' && password == 'admin'){
          this.router.navigate(['players']);
     }
  }

}
