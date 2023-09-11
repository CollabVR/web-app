export class ActivityEntity {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public startTime: string,
    public endTime: string,
    public maxParticipants: number,
    public participants: number[],
    public moderators: number[],
    public environmentId: number,
    public status: string
  ) {}
}
