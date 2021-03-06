import { Images } from '../../models/placeholder.model';
import { Images2 } from '../../models/placeholder.model';
import { Images3 } from '../../models/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: any;
  images2: any;
  images3: any;
  erro: any;
  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit() {}

  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
      this.images = data;
      console.log ("o data que recebemos", data);
      console.log("a variavel que preenchemos", this.images);
      }, 
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      });
      this.crudService.getFotos().subscribe(
        (data: Images2) => {
        this.images2 = data;
        console.log ("o data que recebemos", data);
        console.log("a variavel que preenchemos", this.images2);
        }, 
        (error: any) => {
          this.erro = error;
          console.error('ERROR: ', error);
        });
        this.crudService.getFotos().subscribe(
          (data: Images3) => {
          this.images3 = data;
          console.log ("o data que recebemos", data);
          console.log("a variavel que preenchemos", this.images3);
          }, 
          (error: any) => {
            this.erro = error;
            console.error('ERROR: ', error);
          });
  }

}
