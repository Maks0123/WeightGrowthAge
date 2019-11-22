import { Component } from '@angular/core';
import { inputData, Result} from '../interfaces';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-count-weight',
  templateUrl: './count-weight.component.html',
  styleUrls: ['./count-weight.component.css']
})
export class CountWeightComponent {
  resultType = Result;
  result: Result;
  constructor(private sService: DataService) {

   }

   countResult(InputData: inputData ): void{
     this.result = this.sService.countResult(InputData);
   }
}
