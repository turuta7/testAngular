import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {

  public items: string[] = []
  value: string = '';
  visibility: boolean = false;

  icon: string = "sentiment_very_satisfied";
  keyboardIcon: string = "keyboard_alt";
  keyboardIcon2: string = "sentiment_very_satisfied"

  constructor() {
  }

  public add() {
    if (this.value !== '') {
      this.items = [...this.items, this.value];
      this.value = '';
    }
  }

  public textArea: string = '';
  public isEmojiPickerVisible: boolean | undefined;

  public addEmoji($event: any) {

    // this.icon = this.keyboardIcon2
    // this.value = [...this.value, `${this.textArea}${$event.emoji.native}`]
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
      : this.icon = this.keyboardIcon

    this.isEmojiPickerVisible = !this.isEmojiPickerVisible
  }

  // переключаем переменную
  toggle() {
    this.visibility = !this.visibility;
  }

}
