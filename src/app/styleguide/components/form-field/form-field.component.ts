import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @ViewChild('fieldContainer') fieldContainerElement: ElementRef;
  private inputElement: HTMLInputElement;

  @Input() invalid;
  @Input() valid;
  @Input()
  set listener(value: any) {
      if (value) {
        this.fieldContainerElement.nativeElement.classList.add('active');
      } else {
        this.fieldContainerElement.nativeElement.classList.remove('active');
      }
  }

  constructor() {}

  ngOnInit() {
    this.inputElement = this.fieldContainerElement.nativeElement.querySelector('.form-control');
    this.addingFloatingLabelTransition();

    if (this.inputElement.type === 'textarea') {
      this.textareaTypeFunctionality();
    }
  }

  addingFloatingLabelTransition() {
    if (this.inputElement.value.length > 0) {
      this.fieldContainerElement.nativeElement.classList.add('active');
    }

    this.inputElement.addEventListener('focusin', () => {
      if (this.inputElement.value.length === 0) {
        this.fieldContainerElement.nativeElement.classList.add('active');
      }
    });
    this.inputElement.addEventListener('focusout', () => {
      if (this.inputElement.value.length === 0) {
        this.fieldContainerElement.nativeElement.classList.remove('active');
      }
    });
  }

  textareaTypeFunctionality() {
    this.inputElement.style.height = (this.inputElement.scrollHeight) + 'px';

    const textAreaAdjust = (() => {
      this.inputElement.style.height = 'auto';
      this.inputElement.style.height = (this.inputElement.scrollHeight) + 'px';
    });
    this.inputElement.addEventListener('keyup', textAreaAdjust);
    this.inputElement.addEventListener('keydown', textAreaAdjust);
  }

}
