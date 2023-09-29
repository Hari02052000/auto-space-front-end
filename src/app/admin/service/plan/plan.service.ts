import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { addplanResponseInterface, editplanResponseInterface, fetchPlansResponseInterface } from '../../interfaces/admin.plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor( private http:HttpClient ) { }
  baseUrl = `${environment.baseUrl}/admin`

  getplans(){
    return this.http.get<fetchPlansResponseInterface>(`${this.baseUrl}/plans/get-plans`)
  }

  getSubscriptionDetails(data:FormData){

    return this.http.post(`${this.baseUrl}/plans/get-subscription-details`,data,{ responseType: 'blob' })

  }

  addPlan(data:FormData){
    return this.http.post<addplanResponseInterface>(`${this.baseUrl}/plans/add-plan`,data)
  }

  editPlan(data:FormData){

    return this.http.post<editplanResponseInterface>(`${this.baseUrl}/plans/edit-plan`,data)


  }

  listPlan(){}

  unlistPlan(){}

}
