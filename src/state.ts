import { PMT } from './utilities/functions';

export interface IState {
  monthlyRent: number;
  annualRent: number;
  vacancy: number;
  vacancyPercentage: number;
  grossRent: number;

  sqFootage: number;
  comps: number; // cost per foot
  propertyTaxes: number;
  insurance: number;
  maintenance: number;
  propertyManagement: boolean;
  propertyManagementCost: number;
  leasingFee: number;
  operatingExpenses: number;

  netOperatingIncome: number;
  capRate: number; // percentage
  interestRate: number; // percentage
  mortgageLength: number; // in months
  mortgagePayment: number;
  annualDebt: number;
  purchasePrice: number;
  updates: number;
  areUpdatesCash: boolean;
  closingCosts: number;
  areClosingCostsCash: boolean;
  originationFee: number;
  isOriginationFeeCash: boolean;

  downPayment: number;
  totalLoanAmount: number;
  afterRepairValue: number;
  cashFlow: number;
  netRevenue: number;

  ninetyPercentRule: number;
  eightyPercentRule: number;

  totalInvestment: number;
  cashOnCashReturn: number;
  percentageRule: number;
  percentageRuleGoal: number;
}

export class CalculatorState implements IState {
  private _monthlyRent: number = 0;
  public annualRent: number = 0;
  public vacancy: number = 0;
  public vacancyPercentage: number = 8;
  public grossRent: number = 0;

  public _sqFootage: number = 0;
  public _comps: number = 0; // cost per foo
  public _propertyTaxes: number = 0;
  public insurance: number = 0;
  public maintenance: number = 0;
  public propertyManagement: boolean = false;
  public propertyManagementCost: number = 0;
  public leasingFee: number = 0;
  public operatingExpenses: number = 0;

  public netOperatingIncome: number = 0;
  public capRate: number = 0; // percentage
  public _interestRate: number = 0; // percentage
  public _mortgageLength: number = 0; // in months
  public mortgagePayment: number = 0;
  public annualDebt: number = 0;
  public _purchasePrice: number = 0;
  public _updates: number = 0;
  public _areUpdatesCash: boolean = false;
  public _closingCosts: number = 0;
  public _areClosingCostsCash: boolean = false;
  public _originationFee: number = 0;
  public _isOriginationFeeCash: boolean = false;

  public downPayment: number = 0;
  public totalLoanAmount: number = 0;
  public afterRepairValue: number = 0;
  public cashFlow: number = 0;
  public netRevenue: number = 0;

  public ninetyPercentRule: number = 0;
  public eightyPercentRule: number = 0;

  public totalInvestment: number = 0;
  public cashOnCashReturn: number = 0;
  public percentageRule: number = 0;
  public percentageRuleGoal: number = 1.25;

  calcValues() {
    this.annualRent = this.monthlyRent * 12;
    this.vacancy = this.annualRent * (this.vacancyPercentage / 100);
    this.grossRent = this.annualRent - this.vacancy;
    this.propertyManagementCost = this.monthlyRent * 0.1;
    this.leasingFee = this.monthlyRent / 2;
    this.afterRepairValue = this.comps * this.sqFootage;
    this.maintenance = 0.015 * this.afterRepairValue;
    this.operatingExpenses =
      this.propertyTaxes + this.insurance + this.maintenance + this.leasingFee;
    if (this.propertyManagement) {
      this.operatingExpenses += this.propertyManagementCost * 12;
    }
    this.netOperatingIncome = this.grossRent - this.operatingExpenses;
    this.capRate = (this.netOperatingIncome / this.purchasePrice) * 100;
    this.mortgagePayment = PMT(
      this.interestRate / 12,
      this.mortgageLength,
      this.purchasePrice
    );
    this.annualDebt = this.mortgagePayment * 12;
    this.totalLoanAmount = this.purchasePrice;
    if (!this.areUpdatesCash) {
      this.totalLoanAmount += this.updates;
    }
    if (!this.areClosingCostsCash) {
      this.totalLoanAmount += this.closingCosts;
    }
    if (!this.isOriginationFeeCash) {
      this.totalLoanAmount += this.originationFee;
    }
  }

  get monthlyRent(): number {
    return this._monthlyRent;
  }

  set monthlyRent(rent: number) {
    console.log('setting monthly rent', typeof rent);
    this._monthlyRent = rent;
    this.calcValues();
  }

  get sqFootage(): number {
    return this._sqFootage;
  }

  set sqFootage(sqft: number) {
    this._sqFootage = sqft;
  }

  get comps(): number {
    return this._comps;
  }

  set comps(comps: number) {
    this._comps = comps;
  }
  get propertyTaxes(): number {
    return this._propertyTaxes;
  }

  set propertyTaxes(taxes: number) {
    this._propertyTaxes = taxes;
    this.insurance = taxes;
    this.calcValues();
  }

  get interestRate(): number {
    return this._interestRate;
  }

  set interestRate(rate: number) {
    this._interestRate = rate;
  }

  get mortgageLength(): number {
    return this._mortgageLength;
  }

  set mortgageLength(length: number) {
    this._mortgageLength = length;
  }

  get purchasePrice(): number {
    return this._purchasePrice;
  }

  set purchasePrice(price: number) {
    this._purchasePrice = price;
    this.calcValues();
  }

  get updates(): number {
    return this._updates;
  }

  set updates(total: number) {
    this._updates = total;
    this.calcValues();
  }

  get areUpdatesCash(): boolean {
    return this._areUpdatesCash;
  }

  set areUpdatesCash(trueOrFalse: boolean) {
    this._areUpdatesCash = trueOrFalse;
    this.calcValues();
  }

  get closingCosts(): number {
    return this._updates;
  }

  set closingCosts(total: number) {
    this._closingCosts = total;
    this.calcValues();
  }
  get areClosingCostsCash(): boolean {
    return this._areClosingCostsCash;
  }

  set areClosingCostsCash(trueOrFalse: boolean) {
    this._areClosingCostsCash = trueOrFalse;
    this.calcValues();
  }

  get originationFee(): number {
    return this._originationFee;
  }

  set originationFee(total: number) {
    this._originationFee = total;
    this.calcValues();
  }

  get isOriginationFeeCash(): boolean {
    return this._isOriginationFeeCash;
  }

  set isOriginationFeeCash(trueOrFalse: boolean) {
    this._isOriginationFeeCash = trueOrFalse;
    this.calcValues();
  }

  constructor(data?: IState) {
    if (data) {
      Object.assign(this, data);
      this.monthlyRent = data.monthlyRent;
    }
  }

  // modified from https://github.com/Microsoft/TypeScript/issues/16858#issuecomment-384715673
  toJSON() {
    const jsonObj: any = {};

    // get enumerable properties
    Object.entries(this).forEach(([key, val]) => {
      if (key[0] !== '_') {
        jsonObj[key] = val;
      }
    });

    // get getters
    const proto = Object.getPrototypeOf(this);
    Object.entries(Object.getOwnPropertyDescriptors(proto))
      .filter(([key, descriptor]) => typeof descriptor.get === 'function')
      .forEach(([key, descriptor]) => {
        if (descriptor && key[0] !== '_') {
          try {
            const val = (this as any)[key];
            jsonObj[key] = val;
          } catch (error) {
            console.error(`Error calling getter ${key}`, error);
          }
        }
      });

    return jsonObj;
  }
}

export class StateBuilder {
  private readonly _state: CalculatorState;
  constructor(calculatorState?: CalculatorState) {
    this._state = calculatorState || new CalculatorState();
  }

  setMonthlyRent(rent: number) {
    this._state.monthlyRent = rent;
    return this;
  }

  build() {
    return new Proxy(this._state, {
      set(obj, prop, value) {
        console.log(' proxy set ', prop, value);
        if (typeof value === 'number') {
          value = value.toFixed(2);
        }
        obj.calcValues();
        return Reflect.set(obj, prop, value);
      },
    });
  }
}
