import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivityActionEntity } from '../dtos/activity-action.entity';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private domain: string | undefined;

  constructor(private readonly http: HttpClient,) {
    this.domain = environment.domain;
  }

  getAllActivityActions() {
    return this.http.get<ActivityActionEntity[]>(`${this.domain}/analytics/activity-action`).pipe(
      catchError((error) => {
        console.log('error', error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  getAllUserActions() {

  }

}
