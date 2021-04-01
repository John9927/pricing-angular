import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pricing-angular';
  checkbox: any;

  ngOnInit() {
    this.checkbox = document.querySelector('#checkbox');
    setInterval(function() {
      if(!this.checkbox.checked) {
        document.getElementById('price').innerHTML = "$199.99";
        document.getElementById('price2').innerHTML = "$249.99";
        document.getElementById('price3').innerHTML = "$399.99";
      }
      else {
        document.getElementById('price').innerHTML = "$19.99";
        document.getElementById('price2').innerHTML = "$24.99";
        document.getElementById('price3').innerHTML = "$39.99";
      }
    }

    )
  }
}
