export class Name {
  private _first: string;
  private _second: string;

  constructor(first: string, second: string) {
    this._first = first;
    this._second = second;
  }

  get nameMessage() {
    return `Hello ${this._first} ${this._second}`;
  }
}

export class WeatherLocation {
  private _weather: string;
  private _city: string;

  constructor(weather: string, city: string) {
    this._weather = weather;
    this._city = city;
  }

  get weatherMessage() {
    return `It is ${this._weather} in ${this._city}`;
  }
}