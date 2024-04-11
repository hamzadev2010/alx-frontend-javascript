class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class Building cannot be instantiated directly.');
    }
    this.sqft = sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;  
