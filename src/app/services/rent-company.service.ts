import {Injectable} from '@angular/core';
import {AbstractRentCompany} from './abstract-rent-company';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../models/response-from';
import {Driver} from '../models/driver';
import {Car} from '../models/car';
import {Model} from '../models/model';
import {RentRecord} from '../models/rent-record';
import {HttpClient} from '@angular/common/http';
import {PathHttps} from '../models/constants/path-https';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlHeroku;

@Injectable({
  providedIn: 'root'
})
export class RentCompanyService extends AbstractRentCompany {
  constructor(private httpClient: HttpClient) {
    super();
  }

// **************************************************addModel, addCar, addDriver*********************************************
  addModel(model: Model): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_MODEL, model);
  }

  addCar(car: Car): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_CAR, car);
  }

  addDriver(driver: Driver): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_DRIVER, driver);
  }

  // **************************************** getModel, getCar, getDriver, getModelProfit ************************

  getModel(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_MODEL + '/' + `${modelName}`);
  }

  getCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_CAR + '/' + `${regNumber}`);
  }


  getDriver(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_DRIVER + '/' + `${licenseId}`);
  }

  getModelProfit(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_PROFIT_MODEL + '/' + `${modelName}`);
  }

  // ******************** getAllModelNames, getAllModels, getAllCars,  getAllDrivers, getAllRecords ***************
  getAllModelNames(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_MODEL_NAMES);
  }

  getAllModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_MODELS);
  }

  getAllCars(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_CARS);
  }

  getAllDrivers(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_DRIVERS);
  }

  getAllRecords(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_RECORDS);
  }

  // ************************** getMostPopularModelNames, getMostProfitModelNames ************************************
  getMostPopularModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.MOST_POPULAR_MODELS);
  }

  getMostProfitModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.MOST_PROFIT_MODELS);
  }

// ********************************** rentCar, returnCar *************************************************************
  rentCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.RENT_CAR, record);
  }

  returnCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.RETURN_CAR, record);
  }


// *************************************************** clear , removeCar *******************************************************************

  clear(date: string, days: number): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.CLEAR_CARS + '/' + `${date}` + '/' + `${days}`);
  }

  removeCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + PathHttps.REMOVE_CAR + '/' + `${regNumber}`);
  }


  // *********************************** getDriverCars, getCarDrivers ************************************************
  getDriverCars(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_DRIVER_CARS + '/' + `${licenseId}`);
  }


  getCarDrivers(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_CAR_DRIVERS + '/' + `${regNumber}`);
  }

}
