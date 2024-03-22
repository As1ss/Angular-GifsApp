import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector: "shared-lazy-image",
  templateUrl: "./lazy-image.component.html"
}) export class LazyImageComponent implements OnInit {

  public showLoader:boolean=true;


  @Input()
  public url!: string;

  @Input()
  public alt: string = "";


  ngOnInit(): void {
    if (!this.url) throw new Error("Url needs a value.");
  }

  public hideLoader() {
    this.showLoader= false;

  //   setTimeout(() => {
        //Esto es para crear un segundo hasta ejecutar una operación
  //   }, 10000);
   }
}
