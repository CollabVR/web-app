import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AnalyticsService } from '../../services/analytics.service';
import { ActivityActionEntity } from '../../dtos/activity-action.entity';
import { SeriesOptionsType, TitleObject, TitleOptions } from 'highcharts';
import { UserActionEntity } from '../../dtos/user-action.entity';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  activityActions: ActivityActionEntity[] = [];
  userActions: UserActionEntity[] = [];

  activityActionsChart = new Chart({
    chart: { type: 'line' },
    title: { text: 'User Connection by Activity' },
    subtitle: { text: 'Source: Collab VR' },
    yAxis: { title: { text: 'Users Connected', }, },
    credits: { enabled: false },
  });

  maximumUsersConnectedPerActivityChart = new Chart();

  userSpeakingTimeChart = new Chart();
  userSpeakingTimeByACtivityChart = new Chart();


  constructor(
    private analyticsService: AnalyticsService,
  ) { }

  ngOnInit(): void {
    this.analyticsService.getAllActivityActions()
      .subscribe((data: ActivityActionEntity[]) => {
        this.activityActions = data;
        this.configureActivityAnalyticsChart();
        this.configureMaximumUserPerActivityChart();
      });

    this.analyticsService.getAllUserActions().subscribe((data) => {
      this.userActions = data;
      this.configureUserSpeakingTimeChart();
      this.configureUserSpeakingTimeByActivityChart();
    });
  }

  /**
   * Configure the line chart with the data from the activity actions
   * series:
   * - type: line
   * - name: Activity {activityId} as string
   * - data: amountParticipants as [number, number, number, ...]
   */
  configureActivityAnalyticsChart(): void {
    const series: { [key: number]: { activityId: number, amountParticipants: number[] } } = {};

    this.activityActions.forEach((activityAction: ActivityActionEntity) => {
      const { activityId, amountParticipants } = activityAction;
      if (!series[activityId]) {
        series[activityId] = {
          activityId,
          amountParticipants: []
        };
      }
      series[activityId].amountParticipants.push(amountParticipants);
    });

    const seriesArray: SeriesOptionsType[] = Object.values(series).map((s) => ({
      type: 'line',
      name: `Activity ${s.activityId}`,
      data: s.amountParticipants.flat(),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }));

    seriesArray.forEach(series => this.activityActionsChart.addSeries(series, true, true));
  }

  /**
   * Configure the bar chart with the data from the activity actions
   * series:
   * - type: bar
   * - name: Activity {activityId} as string
   * - data: maximum number of connected users as [number, number, number, ...]
   */
  configureMaximumUserPerActivityChart(): void {
    const series: { [key: number]: { activityId: number, amountParticipants: number[] } } = {};

    this.activityActions.forEach((activityAction: ActivityActionEntity) => {
      const { activityId, amountParticipants } = activityAction;
      if (!series[activityId]) {
        series[activityId] = {
          activityId,
          amountParticipants: []
        };
      }
      series[activityId].amountParticipants.push(amountParticipants);
    });

    const seriesArray = Object.values(series);

    seriesArray.forEach((s) => {
      s.amountParticipants = [Math.max(...s.amountParticipants.flat())];
    });

    this.maximumUsersConnectedPerActivityChart = new Chart({
      chart: { type: 'bar' },
      title: { text: 'Maximum Users Connected by Activity' },
      subtitle: { text: 'Source: Collab VR' },
      xAxis: {
        categories: seriesArray.map(s => `Activity ${s.activityId}`),
        title: { text: 'Environments' },
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: { text: 'Users Connected', },
        gridLineWidth: 1
      },
      credits: { enabled: false },
      series: [
        {
          name: 'Users Connected',
          data: seriesArray.map(s => s.amountParticipants[0]),
        }
      ] as SeriesOptionsType[]
    });
  }

  configureUserSpeakingTimeChart(): void {
    const series: { [key: number]: { userId: number, timeSpeaking: number } } = {};

    this.userActions.forEach((userAction: UserActionEntity) => {
      const { userId, timeSpeaking } = userAction;
      if (!series[userId]) {
        series[userId] = {
          userId,
          timeSpeaking: 0
        };
      }
      series[userId].timeSpeaking += timeSpeaking;
    });

    const seriesArray = Object.values(series);

    this.userSpeakingTimeChart = new Chart({
      chart: { type: 'bar' },
      title: { text: 'User Speaking Time' },
      subtitle: { text: 'Source: Collab VR' },
      xAxis: {
        categories: seriesArray.map(s => `User ${s.userId}`),
        title: { text: 'Users' },
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: { text: 'Time Speaking', },
        gridLineWidth: 1
      },
      credits: { enabled: false },
      series: [
        {
          name: 'Time Speaking',
          data: seriesArray.map(s => s.timeSpeaking),
        }
      ] as SeriesOptionsType[]
    });
  }

  configureUserSpeakingTimeByActivityChart(): void {
    const activityIds = [...new Set(this.userActions.map((userAction) => userAction.activityId))];
    activityIds.sort((a, b) => a - b);
    // const usersIds = [...new Set(this.userActions.map((userAction) => userAction.userId))];

    const userDict: Record<number, Record<number, number>> = {};
    const allActivities: Set<number> = new Set();

    for (const record of this.userActions) {
      if (!userDict[record.userId]) {
        userDict[record.userId] = {};
      }
      userDict[record.userId][record.activityId] = record.timeSpeaking;
      allActivities.add(record.activityId);
    }

    const sortedActivities = [...allActivities].sort((a, b) => a - b);

    const result: Record<number, number[]> = {};
    for (const userId in userDict) {
      result[userId] = sortedActivities.map(activityId => userDict[userId][activityId] || 0);
    }

    console.log(result);


    this.userSpeakingTimeByACtivityChart = new Chart({
      credits: { enabled: false },
      chart: { type: 'bar' },
      title: { text: 'User Speaking Time by Activity' },
      xAxis: { categories: activityIds.map((activityId) => `Activity ${activityId}`) },
      yAxis: {
        min: 0,
        title: { text: 'Speaking Time (seconds)' }
      },
      legend: { reversed: true },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: { enabled: true }
        }
      },
      series: Object.entries(result).map(([userId, data]) => ({
        name: `User ${userId}`,
        data,
      })) as SeriesOptionsType[]
    });





  }






}
