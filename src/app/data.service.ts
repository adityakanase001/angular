import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private helper: HttpClient)
  {

  }

  Select()
  {
    return this.helper.get("http://localhost:9898/emps")
  }

  SelectbyNo(No)
  {
    return this.helper.get("http://localhost:9898/emps/"+No)
  }

  Insert(emp)
  {
    return this.helper.post("http://localhost:9898/emps",emp);
  }

  Update(emp)
  {
    return this.helper.put("http://localhost:9898/emps/"+emp.No,emp);
  }

  Delete(No)
  {
    return this.helper.delete("http://localhost:9898/emps/"+No)
  } 

}
