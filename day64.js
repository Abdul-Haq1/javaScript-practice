class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  
  get temperature() {
    return this._celsius;
  }
  
  set temperature(celsius) {
    return this._celsius = celsius;
  }
}
