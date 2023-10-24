export class UserActionEntity {
  constructor(
    public userId: number,
    public activityId: number,
    public timeSpeaking: number
  ) { }
}