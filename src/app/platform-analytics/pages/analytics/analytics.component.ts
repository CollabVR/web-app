import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AnalyticsService } from '../../services/analytics.service';
import { ActivityActionEntity } from '../../dtos/activity-action.entity';
import { SeriesOptionsType, TitleObject, TitleOptions } from 'highcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  activityActions: ActivityActionEntity[] = [];

  activityActionsChart = new Chart({
    chart: { type: 'line' },
    title: { text: 'User Connection by Activity' },
    credits: { enabled: false },
  });

  maximumUsersConnectedPerActivityChart = new Chart();

  constructor(
    private analyticsService: AnalyticsService,
  ) { }

  ngOnInit(): void {
    this.analyticsService.getAllActivityActions()
      .subscribe((data: ActivityActionEntity[]) => {
        this.activityActions = data;
        console.log(data);
        this.configureActivityAnalyticsChart();
        this.configureMaximumUserPerActivityChart();
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



}
