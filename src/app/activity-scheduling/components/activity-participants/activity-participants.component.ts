import { Component, Input } from '@angular/core';
import { ActivityEntity } from '../../dtos/activity.entity';

@Component({
  selector: 'app-activity-participants',
  templateUrl: './activity-participants.component.html',
  styleUrls: ['./activity-participants.component.css'],
})
export class ActivityParticipantsComponent {
  @Input() activity?: ActivityEntity;
}
