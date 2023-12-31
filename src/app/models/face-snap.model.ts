export class FaceSnap {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location?: string;

  //we can  also do:
  //   title: string;
  //   description: string;
  //   createdDate: Date;
  //   snaps: number;
  //   imageUrl: string;

  // this.title = title;
  // this.description = description;
  // this.createdDate = createdDate;
  // this.snaps = snaps;
  // this.imageUrl = imageUrl;

  //or we can do:
  // constructor(
  //   public title: string,
  //   public description: string,
  //   public createdDate: Date,
  //   public snaps: number,
  //   public imageUrl: string,
  //   public location?: string
  // ) {
  // }
}
