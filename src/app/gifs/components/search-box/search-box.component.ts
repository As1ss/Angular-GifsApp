import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../../services/gifs.services";


@Component({
  selector: "gifs-search-box",
  templateUrl: "search-box.component.html"
}) export class SearchBoxComponent {


  @ViewChild("txtTagInput")
    tagInput!:ElementRef<HTMLInputElement>;


    constructor(private gifsService:GifsService){

    }

  public searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value="";

  }

  // public searchTagChildren(){
  //   let newTag = this.tagInput.nativeElement.value;

  //   console.log({newTag})

  //   this.tagInput.nativeElement.value="";
  // }


}
