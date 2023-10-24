export class ActivityActionEntity {
  constructor(
    public id: number,
    public activityId: number,
    public userId: number,
    public action: string,
    public timestamp: string,
    public amountParticipants: number
  ) { }
}