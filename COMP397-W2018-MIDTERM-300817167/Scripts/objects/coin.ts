module objects {
  export class Coin extends objects.GameObject {
    // private instance variables
    private _level: number;
    // public properties

    // constructors
    constructor(level:number) {
      super("coin");
      this._level = level;
      if(this._level == 2) {
        this.rotation = 90;
      }
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds():void {
      if(this._level == 1) {
        if(this.y > (480 + this.height)) {
          this.alpha = 1;
        }
      } else if(this._level == 2) {
        if(this.x < (-this.width)) {
          this.alpha = 1;
        }
      }
    }
  }
}
