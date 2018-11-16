import { Stock } from './Stock';

export class Sample {
  private sample: any;

  constructor(sample: any) {
    this.sample = sample;
  }

  id() {
    return this.sample._id;
  }

  creationDate() {
    return new Date(this.sample.$creationDate).toISOString();
  }

  modificationDate() {
    return new Date(this.sample.$modificationDate).toISOString();
  }

  stock() {
    return new Stock(this.sample.stock);
  }
}
