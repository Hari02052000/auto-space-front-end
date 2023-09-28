import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { fetchPlansResponseInterface } from '../../interfaces/admin.plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor( private http:HttpClient ) { }
  baseUrl = `${environment.baseUrl}/admin`

  getplans(){
    return this.http.get<fetchPlansResponseInterface>(`${this.baseUrl}/plans/get-plans`)
  }

  addPlan(){}

  editPlan(){}

  listPlan(){}

  unlistPlan(){}

}
