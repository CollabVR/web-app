import { ActivityUserEntity } from './activity-user.entity';

export class ActivityEntity {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public startTime: string,
    public endTime: string,
    public maxParticipants: number,
    public students: ActivityUserEntity[] = [],
    public moderators: ActivityUserEntity[] = [],
    public environmentId: string,
    public status: string
  ) {}
}
