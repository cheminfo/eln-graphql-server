export class Stock {
  private stock: any;

  public history: any[];

  constructor(stock: any) {
    this.stock = stock || {};
    this.history = this.stock.history || [];
  }
}
