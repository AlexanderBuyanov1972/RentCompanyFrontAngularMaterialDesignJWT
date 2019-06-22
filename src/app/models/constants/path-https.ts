export class PathHttps {
// -------------------------------------
  static ADD_CAR = '/car'; // MANAGER
  static ADD_MODEL = '/model'; // MANAGER
  static ADD_DRIVER = '/driver'; // CLERK
  // ---------------------------------------
  static RENT_CAR = '/car/rent'; // CLERK
  static RETURN_CAR = '/car/return'; // CLERK
// ---------------------------------
  static GET_MODEL = '/model'; // ALL with not authentication
  static GET_CAR = '/car'; // authenticated
  static GET_DRIVER = '/driver'; // MANAGER,CLERK
// ---------------------------------

  static REMOVE_CAR = '/car/remove'; // MANAGER
  static CLEAR_CARS = '/cars/clear'; // MANAGER
// --------------------------------------
  static GET_DRIVER_CARS = '/driver/cars'; // DRIVER
  static GET_CAR_DRIVERS = '/car/drivers'; // DRIVER
// --------------------------------------
  static GET_ALL_MODEL_NAMES = '/model_names'; // ALL with not authentication
  static GET_ALL_MODELS = '/models'; // ALL with not authentication
  static GET_ALL_CARS = '/cars'; // authenticated
  static GET_ALL_DRIVERS = '/drivers'; // DRIVER,CLERK
  static GET_ALL_RECORDS = '/records'; // TECHNICIAN
// -----------------------------------------
  static MOST_POPULAR_MODELS = '/models/popular'; // STATIST
  static MOST_PROFIT_MODELS = '/models/profit'; // STATIST
  static GET_PROFIT_MODEL = '/model/profit'; // MANAGER,STATIST
  // ------------------------------------------
  static SHUTDOWN = '/actuator/shutdown'; // ADMIN
// --------------------------------------------

}
