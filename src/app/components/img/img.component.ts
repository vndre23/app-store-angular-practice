import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img  =>', this.img);
    // code
  }
  imageDefault =
    'data:image/jpeg;base64,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';
  @Output() loaded = new EventEmitter<string>();
  //counterFn: number | undefined;
  //counter = 0;
  constructor() {
    //1.
    //before render
    //NO async -- corre una vez
    //de forma inmediata
    console.log('constructor', 'imgValue=> ', this.img);
  }
  ngOnChanges(changes: SimpleChanges) {
    //2.
    //before render y durante
    //cambios en los inputs -- corre muchas veces
    //corre cuando cambie los inputs osea las veces que se actualice el valor
    console.log('ngonChanges', 'imgValue=>', this.img);
  }

  ngOnInit(): void {
    //3.
    //antes del render
    //async - fetch llamadas a Api-- soloo corre una sola vez
    console.log('ngoninit', 'imgValue=>', this.img);
    /*this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);*/
  }
  ngAfterViewInit(): void {
    //4.
    //despues de renderizar
    //se maneja hijos osea manipular los hijos
    console.log('afterViewInit', 'imgValue=>', this.img);
  }
  ngOnDestroy() {
    //solo cuando se elimina el componente
    //osea cuando un ngif remueve el componente
    console.log('ngOndestroy', 'imgValue=>', this.img);
    /*window.clearInterval(this.counterFn)*/
  }
  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
