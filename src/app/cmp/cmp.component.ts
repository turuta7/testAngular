import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {


  value = 'Clear me';


  constructor() {
  }

  public textArea: string = '';
  public isEmojiPickerVisible: boolean | undefined;

  public addEmoji($event: any) {
    this.textArea = `${this.textArea}${$event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }


  ngOnInit(): void {
  }


}
