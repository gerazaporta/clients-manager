import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HealthInsurancesListPage } from "../health-insurances-list/health-insurances-list";
import { HomePage } from '../home/home';
import { ClientsListPage } from '../clients-list/clients-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClientsListPage;
  tab3Root = HealthInsurancesListPage;

  constructor() {

  }
}
