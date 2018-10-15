import { Component } from '@angular/core';

@Component({
  selector: 'single-demo',
  templateUrl: './single-demo.html'
})
export class SingleDemoComponent {
  public items:Array<string> = [
    {id: 0, text: 'id is 0'},
    {id: 1, text: 'id is 1'},
    {id: 2, text: 'id is 2'}
  ];

  public value:any = {};
  public _disabledV:string = '0';
  public disabled:boolean = false;

  public get disabledV():string {
    return this._disabledV;
  }

  public set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
