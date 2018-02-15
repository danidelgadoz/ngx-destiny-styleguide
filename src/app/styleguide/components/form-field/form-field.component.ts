import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @ViewChild('fieldContainer') fieldContainerElement: ElementRef;
  @Input() invalid;
  @Input() valid;
  inputElement: HTMLInputElement;

  constructor() {}

  ngOnInit() {
    this.inputElement = this.fieldContainerElement.nativeElement.querySelector('.form-control');
    this.addingFloatingLabelTransition();
    this.watchingNgModalChange();

    if (this.inputElement.type === 'textarea') {
      this.textareaTypeFunctionality();
    }
  }

  addingFloatingLabelTransition() {
    const floatingLabelTransition = (() => {
      if (this.inputElement.value.length === 0) {
        this.fieldContainerElement.nativeElement.classList.toggle('active');
      }
    });

    this.inputElement.addEventListener('focusin', floatingLabelTransition);
    this.inputElement.addEventListener('focusout', floatingLabelTransition);
  }

  watchingNgModalChange() {
    const watching = (() => {
      if (this.inputElement.value.length > 0) {
        this.fieldContainerElement.nativeElement.classList.add('active');
      }
    });

    watching();
    setInterval(() => { watching(); }, 100);
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
