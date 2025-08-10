import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private baseUrl = 'https://osuselriadah.somee.com/api/Auction';

  constructor(private http: HttpClient) {}

  // جلب كل المزادات
  getAllAuctions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // جلب مزاد واحد حسب الـ ID
  getAuctionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetById/${id}`);
  }

  // إضافة مزاد
  addAuction(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data);
  }

  // تحديث مزاد
  updateAuction(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/update`, data);
  }

  // حذف مزاد
  deleteAuction(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Delete/${id}`, {});
  }
}
