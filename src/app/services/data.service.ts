import { Injectable } from '@angular/core';
import { inputData, Result} from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {
    
  
    constructor() {
    }
    
    
  
    countResult( InputData: inputData) {
      const height = InputData.height / 100;
      const bmi = InputData.weight / (Math.pow(height, 2)); 
      if(InputData.age >= 19 && InputData.age <= 30){
        if(bmi >= 19.5 && bmi <= 22.9) {
          return Result.NORMAL;
      } else {
        return Result.NOT_NORMAL;
      }
    } else if(InputData.age > 30){
      if(bmi >= 20 && bmi <= 25.9){
        return Result.NORMAL
      } else {
        return Result.NOT_NORMAL;
      }
    }
  }
}
