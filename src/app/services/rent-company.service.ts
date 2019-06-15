import {Injectable} from '@angular/core';
import {AbstractAPIRentCompany} from './AbstractAPIRentCompany';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {Driver} from '../models/driver';
import {Car} from '../models/car';
import {Model} from '../models/model';
import {RentRecord} from '../models/rent-record';
import {HttpClient} from '@angular/common/http';
import {Path} from '../models/path';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;

@Injectable({
  providedIn: 'root'
})
export class RentCompanyService extends AbstractAPIRentCompany {
  constructor(private httpClient: HttpClient) {
    super();
  }

// **************************************************addModel, addCar, addDriver*********************************************
  addModel(model: Model): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + Path.ADD_MODEL, model);
  }

  addCar(car: Car): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + Path.ADD_CAR, car);
  }

  addDriver(driver: Driver): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + Path.ADD_DRIVER, driver);
  }

  // **************************************** getModel, getCar, getDriver, getModelProfit ************************

  getModel(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_MODEL + '/' + `${modelName}`);
  }

  getCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_CAR + '/' + `${regNumber}`);
  }


  getDriver(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_DRIVER + '/' + `${licenseId}`);
  }

  getModelProfit(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_PROFIT_MODEL + '/' + `${modelName}`);
  }

  // ******************** getAllModelNames, getAllModels, getAllCars,  getAllDrivers, getAllRecords ***************
  getAllModelNames(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_ALL_MODEL_NAMES);
  }

  getAllModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_ALL_MODELS);
  }

  getAllCars(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_ALL_CARS);
  }

  getAllDrivers(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_ALL_DRIVERS);
  }

  getAllRecords(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_ALL_RECORDS);
  }

  // ************************** getMostPopularModelNames, getMostProfitModelNames ************************************
  getMostPopularModelNames(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.MOST_POPULAR_MODELS);
  }

  getMostProfitModelNames(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.MOST_PROFIT_MODELS);
  }

// ********************************** rentCar, returnCar *************************************************************
  rentCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + Path.RENT_CAR, record);
  }

  returnCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + Path.RETURN_CAR, record);
  }


// *************************************************** clear , removeCar *******************************************************************

  clear(date: string, days: number): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.CLEAR_CARS + '/' + `${date}` + '/' + `${days}`);
  }

  removeCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + Path.REMOVE_CAR + '/' + `${regNumber}`);
  }


  // *********************************** getDriverCars, getCarDrivers ************************************************
  getDriverCars(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_DRIVER_CARS + '/' + `${licenseId}`);
  }


  getCarDrivers(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + Path.GET_CAR_DRIVERS + '/' + `${regNumber}`);
  }

}
