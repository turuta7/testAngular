import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {

  public items: string[] = []
  value: string = '';
  public test = 7;


  constructor() {
  }

  public add() {
    this.items = [...this.items, this.value]
    this.value=''
  }

  public textArea: string = '';
  public isEmojiPickerVisible: boolean | undefined;

  public addEmoji($event: any) {
    // this.value = [...this.value, `${this.textArea}${$event.emoji.native}`]
    this.textArea = `${this.textArea}${$event.emoji.native}`;
    this.value = this.value + this.textArea;
    this.textArea = ''
    // this.isEmojiPickerVisible = false;
  }


  ngOnInit(): void {
  }

  inputHeandler(value: string) {
    console.log(value)
    console.log(this.textArea)
    this.textArea = ''
    // if(this.textArea) value = "lll";
    this.value = value
  }

}
