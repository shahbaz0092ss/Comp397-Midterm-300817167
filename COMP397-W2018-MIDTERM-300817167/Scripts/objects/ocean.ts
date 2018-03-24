module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;
    private _level: number;

    // public properties

    // Constructor
    constructor(level:number) {
      super(managers.Game.assetManager.getResult("ocean"));
      this._level = level;
      if(this._level == 2) {
        this.rotation = 90;
      }
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
      if(this._level == 1) {
        this.y = -960;
      } else if(this._level == 2) {
        this.x = 1420;
      }
    }

    // move the object to some new location
    private _move():void {
      if(this._level == 1) {
        this.y += this._dy;
      } else if(this._level == 2) {
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      if(this._level == 1) {
        if(this.y >= 0) {
          this._reset();
        }
      } else if(this._level == 2) {
        if(this.x <= 640) {
          this._reset();
        }
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dx = 5;
      this._dy = 5;
      this._reset();
    }

    // updates the game object every frame
    public Update():void {
      this._move();
      this._checkBounds();
    }
  }
}
