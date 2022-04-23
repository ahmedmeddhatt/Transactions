import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  data: any;
 arr : any =[]
  constructor(public http: HttpClient , ) {
    this.data ={
      labels: ['Fri', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thu'],
      datasets: [
        {
          label: 'First Dataset',
          borderColor: '#42A5F5',
              data: [50,76,180,100, 150, 200, 150, 300, 250, 90]
          }

      ]
  }
    localStorage.setItem('token', 'ABC')
    const token: any = localStorage.getItem('token')
const headers = new HttpHeaders
    // console.log(token);
    // console.log(header);
    
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    this.http.get<any>(`http://localhost:3000/api/seller/transactions/6/2022-04-22`, {headers}).subscribe({
       next: (res)=>{
        console.log(res.data.num)},
      error: (err)=> {
        console.log(err);
        
      },
      complete: ()=>{}
    })
   }
  
 

  ngOnInit(): void {
  }

}
