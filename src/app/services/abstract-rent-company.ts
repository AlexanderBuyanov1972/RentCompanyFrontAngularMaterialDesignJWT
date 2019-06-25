import {RentRecord} from '../models/rent-record';
import {Car} from '../models/car';
import {Driver} from '../models/driver';
import {ResponseFrom} from '../models/response-from';
import {Model} from '../models/model';
import {Observable} from 'rxjs';
import {DateDays} from '../models/DateDays';

export abstract class AbstractRentCompany {

  protected constructor() {
  }

  abstract addModel(model: Model): Observable<ResponseFrom>; // (OK,MODEL_EXISTS)

  abstract addCar(car: Car): Observable<ResponseFrom>; // (OK,CAR_EXISTS,NO_MODEL)

  abstract addDriver(driver: Driver): Observable<ResponseFrom>; // (OK,DRIVER_EXISTS)

  abstract getModel(modelName: string): Observable<ResponseFrom>;

  abstract getCar(regNumber: string): Observable<ResponseFrom>;

  abstract getDriver(licenseId: string): Observable<ResponseFrom>;

  abstract rentCar(record: RentRecord): Observable<ResponseFrom>; // (OK,CAR_IN_USE,NO_CAR,NO_DRIVER)

  abstract returnCar(record: RentRecord): Observable<ResponseFrom>; // (OK,CAR_NOT_RENTED,
  // RETURN_DATE_WRONG) In the case of damages up to 10% state is GOOD,
  // up to 30% state BAD more than 30% - remove car (flRemoved)

  abstract removeCar(regNumber: string): Observable<ResponseFrom>; // (OK,CAR_IN_USE,CAR_NOT_EXISTS)
  // removing car is setting flRemoved in true

  abstract clear(date: string, days: number): Observable<ResponseFrom>;  // LocalDate currentDate

  // all cars for which the returnDate before currentDate - days with
  // flRemoved=true
  // are deleted from an information model along with all related records
  // it returns list-all-drivers of the deleted cars

  abstract getCarDrivers(regNumber: string): Observable<ResponseFrom>; // returns
  // all drivers that have been renting the car

  abstract getDriverCars(licenseId: string): Observable<ResponseFrom>; // returns list-all-drivers of
  // all cars that have been rented by the driver

  abstract getAllRecords(): Observable<ResponseFrom>;

  abstract getAllCars(): Observable<ResponseFrom>;

  abstract getAllDrivers(): Observable<ResponseFrom>;

  abstract getAllModels(): Observable<ResponseFrom>;

  abstract getAllModelNames(): Observable<ResponseFrom>;

  abstract getMostPopularModels(): Observable<ResponseFrom>; // returns list-all-drivers of
  // the model names the cars of which have been rented most times

  abstract getModelProfit(modelName: string): Observable<ResponseFrom>; // returns value of money received from
  // the renting cars of a given model name

  abstract getMostProfitModels(): Observable<ResponseFrom>; // returns list-all-drivers of most
  // proftable model names
}
