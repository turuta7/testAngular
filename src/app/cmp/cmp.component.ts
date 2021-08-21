import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {

  public items: object[] = [];
  public textArea: string = '';
  public isEmojiPickerVisible: boolean | undefined;
  value: string = '';
  visibility: boolean = false;
  icon: string = "sentiment_very_satisfied";
  keyboardIcon: string = "";
  keyboardIcon2: string = "sentiment_very_satisfied";

  constructor() {
  }

  returnData() {
    const datePipe = new DatePipe("en-US");
    return datePipe.transform(new Date(), 'h:mm a | MMM d, y');
  }

  public addMessage() {
    if (this.value !== '') {
      this.items.push({
        date: this.returnData(),
        message: this.value
      })
      this.value = '';
      if (this.isEmojiPickerVisible) {
        this.isEmojiPickerVisible = !this.isEmojiPickerVisible;

        this.visibility = !this.visibility;
        this.icon = this.keyboardIcon2;
      }
    }
  }

  public addEmoji($event: any) {
    this.textArea = `${this.textArea}${$event.emoji.native}`;
    this.value = this.value + this.textArea;
    this.textArea = ''
    // this.isEmojiPickerVisible = false;
  }


  ngOnInit(): void {
  }

  inputHeandler(value: string) {
    this.textArea = ''
    this.value = value
  }

  emojiValue() {
    this.visibility = !this.visibility;
    this.isEmojiPickerVisible ? this.icon = this.keyboardIcon2
      : this.icon = this.keyboardIcon;
    setTimeout(()=>{
      this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
    },500)

  }
}
