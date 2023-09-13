import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateActivityDto } from '../dtos/create-activity.dto';
import { catchError, throwError } from 'rxjs';
import { ActivityEntity } from '../dtos/activity.entity';
import { ActivityUserEntity } from '../dtos/activity-user.entity';
import { ActivityUserRole } from '../dtos/activity-user-role.enum';

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

  registerToActivity(
    activity: ActivityEntity,
    activityUserEntity: ActivityUserEntity,
    role: ActivityUserRole
  ) {
    if (
      activity.maxParticipants <=
      activity.students.length + activity.moderators.length
    ) {
      alert('Activity is full');
      return throwError(() => new Error('Activity is full'));
    }

    switch (role) {
      case ActivityUserRole.STUDENT:
        activity.students.push(activityUserEntity);
        break;
      case ActivityUserRole.MODERATOR:
        activity.moderators.push(activityUserEntity);
        break;
    }

    return this.http
      .put<ActivityEntity>(`${this.domain}/activities/${activity.id}`, activity)
      .pipe(
        catchError((error) => {
          console.log('error', error);
          return throwError(() => new Error(error.message));
        })
      );
  }

  leaveActivity(
    activity: ActivityEntity,
    activityUserId: number,
    role: ActivityUserRole
  ) {
    switch (role) {
      case ActivityUserRole.STUDENT:
        activity.students = activity.students.filter(
          (student) => student.userId !== activityUserId
        );
        break;
      case ActivityUserRole.MODERATOR:
        activity.moderators = activity.moderators.filter(
          (moderator) => moderator.userId !== activityUserId
        );
        break;
    }
    console.log(activity);
    return this.http
      .put<ActivityEntity>(`${this.domain}/activities/${activity.id}`, activity)
      .pipe(
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
