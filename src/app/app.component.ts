import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public ngOnInit() {
    $(document).ready(function () {
      $('ul li').click(function () {
        $('.current').removeClass('current');
        $(this).addClass('current');
      });
    });
  }
}
