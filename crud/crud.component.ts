import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor( private http:Http) { }
  confirmationString:string="New user has been added";
  isAdded: boolean=false;
  userObj:object={};
  IP_ADDRESS = "http://10.150.69.152/"
  addNewUser=function(user){
    this.userObj={
      "name":user.name,
      "email":user.email,
      "gender":user.gender
    }
    this.http.post(this.IP_ADDRESS+"api/v1/user",this.userObj).subscribe((res:Response)=>{
     this.isAdded=true;                 // console.log(res);
  })
}

  ngOnInit() {
  }

}
