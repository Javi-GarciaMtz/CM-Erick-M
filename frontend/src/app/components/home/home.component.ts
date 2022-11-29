import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const M: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, AfterViewInit {
  options = { fullWidth: false };
  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"];

  Options = { fullWidth: false };

  hrefs = ['one', 'two', 'three', 'four', 'five'];

  public page_title: string;

  constructor( ) {
    this.page_title = 'Ciudad maderas!'
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, { 
        fullWidth: true,
        indicators: true,
        duration: 4000
      });
    });
  
  }

  ngAfterViewInit() {
    var instance = M.Carousel.init({
      fullWidth: false
    });
    
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);

    var instance = M.Carousel.init({
      fullWidth: true
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {hover: false});

      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, {});

      let elemss = document.querySelectorAll('.carousel');
      let instancess = M.Carousel.init(elemss, { fullWidth: false });
    });
    
  }


}
