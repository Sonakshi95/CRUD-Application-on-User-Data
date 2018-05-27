import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import {FormsModule} from '@angular/forms'
// import { fromPromise } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  users=[];
  IP_ADDRESS = "http://10.150.69.152/"

  fetchData= function() {
    this.http.get(this.IP_ADDRESS+"api/v1/users").subscribe(                     //http://localhost:5555/users
      (res:Response)=>{
        this.users=res.json();
      }
    )
  }
  deleteUser= function(userId) {
    if(confirm("Are you sure?")){
      const url=this.IP_ADDRESS+"api/v1/deleteuser";      //http://localhost:5555/users/
      return this.http.post(url, {  "uid": userId }).toPromise()
        .then(()  =>{
          this.fetchData();
        })

    }

  }

  ngOnInit() {
    this.fetchData();
  }

}
