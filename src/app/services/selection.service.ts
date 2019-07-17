import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  constructor() {
  }
  countries: string[] = ['Japan', 'Korea', 'France', 'Germany', 'China', 'Swedish', 'USA', 'Italy', 'USSR'];
  colors: string[] = ['Red', 'Orange', 'Green', 'White', 'Black', 'Yellow', 'Blue', 'Brown', 'Pink', 'Gray',
  'Beige', 'Golden', 'Purple', 'Silver', 'Khaki'];
  companies: string[] = ['Toyota', 'Mazda', 'Suzuki', 'Ford', 'BMW', 'AUDI', 'Reno', 'Citroen', 'KIA', 'Mersedess',
    'Volswagen', 'Volvo', 'GAS'];
  roles: string[] = ['ROLE_ADMIN', 'ROLE_CLERC', 'ROLE_MANAGER', 'ROLE_DRIVER', 'ROLE_STATIST'];
}
