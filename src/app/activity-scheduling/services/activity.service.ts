import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateActivityDto } from '../dtos/create-activity.dto';
import { catchError, throwError } from 'rxjs';
import { ActivityEntity } from '../dtos/activity.entity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private domain: string | undefined;
  constructor(private readonly http: HttpClient) {
    this.domain = environment.domain;
  }

  getAllActivities() {
    return this.http.get<ActivityEntity[]>(`${this.domain}/activities`).pipe(
      catchError((error) => {
        console.log('error', error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  getActivityById(id: number) {
    return this.http
      .get<ActivityEntity>(`${this.domain}/activities/${id}`)
      .pipe(
        catchError((error) => {
          console.log('error', error);
          return throwError(() => new Error(error.message));
        })
      );
  }

  createActivity(createActivityDto: CreateActivityDto) {
    return this.http.post(`${this.domain}/activities`, createActivityDto).pipe(
      catchError((error) => {
        console.log('error', error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
