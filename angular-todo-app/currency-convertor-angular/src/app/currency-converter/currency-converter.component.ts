import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'CAD', 'JPY'];
  loading: boolean = false;
  error: string | null = null;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  convertCurrency(): void {
       this.loading = true;
       this.error = null;
       this.currencyService.getCurrencies(this.fromCurrency).subscribe({
         next: (data) => {
  const rate = data.rates[this.toCurrency];
  this.convertedAmount = this.amount * rate;
  this.loading = false;
},
         error: (err) => {
           this.error = 'Failed to fetch exchange rates. Please try again later.';
           this.loading = false;
           setTimeout(() => this.convertCurrency(), 5000); // Retry after 5 seconds
         }
       });
     }
}