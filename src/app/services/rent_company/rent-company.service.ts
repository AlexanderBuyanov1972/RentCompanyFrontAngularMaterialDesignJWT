import {Injectable} from '@angular/core';
import {AbstractRentCompany} from './abstract-rent-company';
import {Observable} from 'rxjs';
import {ResponseFrom} from '../../models/response-from';
import {Driver} from '../../models/driver';
import {Car} from '../../models/car';
import {Model} from '../../models/model';
import {RentRecord} from '../../models/rent-record';
import {PathHttps} from '../../models/constants/path-https';
import {TokenService} from '../token.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const urlHeroku = 'https://rentcarscompany.herokuapp.com';
const urlLocalHost = 'http://localhost:8080';
const url = urlLocalHost;

@Injectable({
  providedIn: 'root'
})
export class RentCompanyService extends AbstractRentCompany {
  private httpOptions = {
    headers: new HttpHeaders({ Authorization: this.tokenService.getToken(),
      'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'})
  };

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
    super();
  }

// **************************************************addModel, addCar, addDriver*********************************************
  addModel(model: Model): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_MODEL, model, this.httpOptions);
  }

  addCar(car: Car): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_CAR, car, this.httpOptions);
  }

  addDriver(driver: Driver): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.ADD_DRIVER, driver, this.httpOptions);
  }

  // **************************************** getModel, getCar, getDriver, getModelProfit ************************

  getModel(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_MODEL + '/' + `${modelName}`);
  }

  getCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_CAR + '/' + `${regNumber}`, this.httpOptions);
  }


  getDriver(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_DRIVER + '/' + `${licenseId}`, this.httpOptions);
  }

  getModelProfit(modelName: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_PROFIT_MODEL + '/' + `${modelName}`, this.httpOptions);
  }

  // ******************** getAllModelNames, getAllModels, getAllCars,  getAllDrivers, getAllRecords ***************
  getAllModelNames(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_MODEL_NAMES);
  }

  getAllModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_MODELS);
  }

  getAllCars(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_CARS, this.httpOptions);
  }

  getAllDrivers(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_DRIVERS, this.httpOptions);
  }

  getAllRecords(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_ALL_RECORDS, this.httpOptions);
  }

  // ************************** getMostPopularModelNames, getMostProfitModelNames ************************************
  getMostPopularModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.MOST_POPULAR_MODELS, this.httpOptions);
  }

  getMostProfitModels(): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.MOST_PROFIT_MODELS, this.httpOptions);
  }

// ********************************** rentCar, returnCar *************************************************************
  rentCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.RENT_CAR, record, this.httpOptions);
  }

  returnCar(record: RentRecord): Observable<ResponseFrom> {
    return this.httpClient.post<ResponseFrom>(url + PathHttps.RETURN_CAR, record, this.httpOptions);
  }


// *************************************************** clear , removeCar **********************************************
  clear(date: string, days: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.CLEAR_CARS + '/' + `${date}` + '/' + `${days}`, this.httpOptions);
  }

  removeCar(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.delete<ResponseFrom>(url + PathHttps.REMOVE_CAR + '/' + `${regNumber}`, this.httpOptions);
  }


  // *********************************** getDriverCars, getCarDrivers ************************************************
  getDriverCars(licenseId: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_DRIVER_CARS + '/' + `${licenseId}`, this.httpOptions);
  }


  getCarDrivers(regNumber: string): Observable<ResponseFrom> {
    return this.httpClient.get<ResponseFrom>(url + PathHttps.GET_CAR_DRIVERS + '/' + `${regNumber}`, this.httpOptions);
  }

}
