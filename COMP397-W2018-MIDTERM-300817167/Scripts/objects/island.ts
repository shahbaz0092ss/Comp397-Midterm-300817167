module objects {
  export class Island extends objects.GameObject {
    // private instance variables
    private _level: number;

    // public properties

    // Constructor
    constructor(level:number) {
      super("island");
      this._level = level;
      if(this._level == 2) {
        this.rotation = 90;
      }
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._dx = 5;
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

   
    public Reset():void {
      if(this._level == 1) {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
      } else if(this._level == 2) {
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this.x = this.width + 640;
      }
    }

   
    public Move():void {
      if(this._level == 1) {
        this.y += this._dy;
      } else if(this._level == 2) {
        this.x -= this._dx;
      }
    }

  
    public CheckBounds():void {
      
      if(this._level == 1) {
        if(this.y >= 480 + this.height) {
          this.Reset();
        }
      } else if(this._level == 2) {
        if(this.x <= 0 - this.width) {
          this.Reset();
        }
      }
    }
  }
}
