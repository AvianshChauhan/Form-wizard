import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm: FormGroup;
  addressForm: FormGroup;
  paymentForm: FormGroup;
  currentModel: any;
  pivotIndex: any;
  arr: any = []
  constructor(
    private fb: FormBuilder
  ) {
    

    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    })

    this.addressForm = this.fb.group({
      city:['',Validators.required],
      pincode:['',[Validators.required, Validators.pattern('^[0-9]+$')]]
    })

    this.paymentForm = this.fb.group({
      bnk_number: ['',Validators.required],
      ifsc_code: ['',Validators.required]
    })
  }

  ngOnInit() {
    this.currentModel = 'userForm';
  }
  
  onNext(data) {
    this.currentModel = data
  }


  back(data) {
    this.currentModel = data
  }


  // onSubmit() {
  //   // You can now access all the form data and display the summary or take any other action here.
  //   console.log('Form Data:', {
  //     personalInfo: this.userForm.value,
  //     address: this.addressForm.value,
  //     paymentDetail: this.paymentForm.value,
  //   });
  // }


  getProgressValue(): number {
    const totalSteps = 3; // Total number of form steps (Personal Information, Address, Payment Detail)
    let completedSteps = 0;

    // Check the currentModel to determine the number of completed steps
    if (this.currentModel === 'addressForm') {
      completedSteps = 1;
    } else if (this.currentModel === 'paymentForm') {
      completedSteps = 2;
    } else if (this.currentModel === 'summary') {
      completedSteps = 3;
    }

    return (completedSteps / totalSteps) * 100;
  }

}
