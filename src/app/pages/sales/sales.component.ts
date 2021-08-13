import { Component, OnInit } from '@angular/core';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
 import { defineLocale } from 'ngx-bootstrap/chronos';
 import { esLocale} from 'ngx-bootstrap/locale';
 defineLocale('es', esLocale);

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  locale = 'es';
  dateNow: Date = new Date();
  dateSales: string;
  constructor(private localeService: BsLocaleService) { }

  ngOnInit(): void {
     this.localeService.use('es');
     this.dateSales = this.formatoFecha(this.dateNow, 'dd/mm/yy');
  }

   formatoFecha(fecha, formato) {
    const map = {
      dd: fecha.getDate(),
      mm: fecha.getMonth() + 1,
      yy: fecha.getFullYear().toString().slice(-2),
      yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
  }

}
