import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;
  errorMessage: string | null = null;

  private ValidateInputs():boolean {
    if(this.num1 === null || this.num2 === null || isNaN(this.num1) || isNaN(this.num2))
    {
      this.errorMessage = 'please enter a valid in both nums';
      this.result = null;
      return false;
    }
    this.errorMessage = null;
    return true;
  }

  //Addition()
  add(): void{
    if(this.ValidateInputs())
    {
      this.result = (this.num1 as number)+(this.num2 as number);
    }
  }

  //subtraction
  subtract(): void{
    if(this.ValidateInputs())
    {
      this.result = (this.num1 as number)-(this.num2 as number);
    }
  }

  multiply(): void{
    if(this.ValidateInputs())
    {
      this.result = (this.num1 as number)*(this.num2 as number);
    }
  }

  divide(): void{
    if(this.ValidateInputs()){
      if(this.num2 === 0){
        this.errorMessage = 'Cannot divide by zero error';
        this.result = null;
      }
      else
      {
        this.result = (this.num1 as number)/(this.num2 as number);
      }
    }
  }
}
