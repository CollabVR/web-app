export class CreateActivityDto {
  constructor(
    public name: string,
    public description: string,
    public startTime: string,
    public endTime: string,
    public maxParticipants: number,
    public environmentId: string
  ) {}
}
