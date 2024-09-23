import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  datepickerForm!: FormGroup
  generatedDates: any = [];
  datesarray: any = [];
  startdate: any;
  enddate: any;
  formattedstartdate: any;
  formattedenddate: any;
  hidecard = false;
  constructor(private fb: FormBuilder, private date: DatePipe) { }

  ngOnInit(): void {
    this.datepickerForm = this.fb.group({
      startdate: ['', Validators.required],
      enddate: ['', Validators.required]
    })
  }
  togglecard() {
    this.hidecard = !this.hidecard
  }
  datechange(){
    this.startdate = this.datepickerForm.get('startdate')?.value;
  }

  onSubmit() {
    if (this.datepickerForm.valid) {
      this.startdate = this.datepickerForm.get('startdate')?.value;
      this.enddate = this.datepickerForm.get('enddate')?.value;

      this.generatedDates = this.getDatesBetween(this.startdate, this.enddate);
    }
  }

  getDatesBetween(startDate: Date, endDate: Date) {
    let currentDate = new Date(startDate)
    let nowendDate = new Date(endDate)
    this.formattedstartdate = this.date.transform(currentDate.toISOString(), 'yyyy-MM-dd');
    this.formattedenddate = this.date.transform(nowendDate.toISOString(), 'yyyy-MM-dd');

    while (currentDate <= nowendDate) {
      this.datesarray.push(this.date.transform(currentDate.toISOString(), 'yyyy-MM-dd'));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    // console.log(this.datesarray)
    // return this.datesarray;
  }
}