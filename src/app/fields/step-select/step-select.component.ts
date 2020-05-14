import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../fields';
import { FieldsService } from 'src/app/shared/fields.service';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-step-select',
  templateUrl: './step-select.component.html',
  styleUrls: ['./step-select.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class StepSelectComponent implements OnInit {
  dataOptions: any;

  @Input() field: Field;

  @Input() customClass: string;

  @Input() formData: any;

  @Input() row: any;

  @Input() index: any = 0;

  @Input() fullFormData: any;

  constructor(private service: FieldsService) { }

  ngOnInit(): void {
    this.formData[this.field.fieldID] = {};
    this.service.getFieldData(this.field).subscribe((data)=> {
      this.dataOptions = data;
    })
  }

  getFieldName(name: string, index: any) {
    return `${name}`;
  }
}