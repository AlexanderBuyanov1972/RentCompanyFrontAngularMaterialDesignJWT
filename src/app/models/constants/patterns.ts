export class Patterns {
  // ---------------------characters----------------------------
  static COLOR = '[A-Z][a-z]{1,50}';
  static NAME_USER = '[A-Z][a-z\-]{1,50}';
  static COMPANY = '[A-Z][a-z\-]{1,50}';
  static COUNTRY = '[A-Z][a-zA-Z\-]{1,50}';
  static ROLE = 'ROLE_[A-Z]+';
  // -------------digits-characters----------------------------
  static MODEL_NAME = '[A-Z][a-zA-Z0-9\-]{1,50}';
  static EMAIL = '[_a-zA-Z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)?';
  static PASSWORD = '[a-zA-Z0-9#$&]{6,}';
  // -------------digits---------------------------------------
  static DATA = '\\d{4}\-\\d{2}\-\\d{2}';
  static REG_NUMBER = '\\d{8}';
  static LICENSE_ID = '\\d{10}';
  static YEAR = '(19|20)\\d{2}';
  static PHONE_NUMBER = '[0]\\d{9}';
  static TWO_DIGITS = '[1-9]\\d?';
  static DAYS = '\\d{1,3}';
  static THREE_DIGITS = '\\d{1,3}';
  static PRICE_DAY = '\\d{2,4}';
  static GAS_TANK_PERCENT = '\\d|[1-9]\\d|100';
  static DAMAGES_PERCENT = '\\d|[1-9]\\d|100';
}
