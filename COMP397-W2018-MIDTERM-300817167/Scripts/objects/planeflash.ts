module objects {
  export class PlaneFlash extends objects.GameObject {
    // private instance variables
    private _lvl:number;
    // public properties

    // constructors
    constructor(lvl:number) {
      super("planeflash");
      this._lvl = lvl;
      if(this._lvl == 2) {
        this.rotation = 90;
      }
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {

    }
  }
}
