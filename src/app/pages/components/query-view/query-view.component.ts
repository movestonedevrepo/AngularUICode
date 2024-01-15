import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { QueryListComponent } from './query-list/query-list.component';
export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  price: string;
  creationDate: string;
  description: string;
}

export interface Tab {
  name: string;
  month: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-query-view',
  standalone: true,
  imports: [SharedModule, QueryListComponent],
  templateUrl: './query-view.component.html',
})
export class QueryViewComponent {
  tabs: Array<Tab> = [
    {
      name: 'All',
      month: 0,
      isSelected: false,
    },
    {
      name: 'Last 3 Months Queries',
      month: 3,
      isSelected: false,
    },
    {
      name: 'Last 6 Months Queries',
      month: 6,
      isSelected: false,
    },
  ];
  ELEMENT_DATA: Array<PeriodicElement> = [
    {
      id: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      price: '$35000',
      creationDate: '2024-13-10T13:24:09.000Z',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
      id: 2,
      name: 'Helium',
      weight: 4.0026,
      price: '$35000',
      creationDate: '2024-13-10T13:24:09.000Z',
      description: `Helium is a chemical element with symbol He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`,
    },
    {
      id: 3,
      name: 'Lithium',
      weight: 6.941,
      price: '$35000',
      creationDate: '2024-13-10T13:24:09.000Z',
      description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
          silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
          lightest solid element.`,
    },
    {
      id: 4,
      name: 'Beryllium',
      weight: 9.0122,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
          relatively rare element in the universe, usually occurring as a product of the spallation of
          larger atomic nuclei that have collided with cosmic rays.`,
    },
    {
      id: 5,
      name: 'Boron',
      weight: 10.811,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
          by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
          low-abundance element in the Solar system and in the Earth's crust.`,
    },
    {
      id: 6,
      name: 'Carbon',
      weight: 12.0107,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
          and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
          to group 14 of the periodic table.`,
    },
    {
      id: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
          discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
    },
    {
      id: 8,
      name: 'Oxygen',
      weight: 15.9994,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
           the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
           agent that readily forms oxides with most elements as well as with other compounds.`,
    },
    {
      id: 9,
      name: 'Fluorine',
      weight: 18.9984,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
          lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
          conditions.`,
    },
    {
      id: 10,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 11,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 12,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 13,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 14,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 15,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-09-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 16,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-11-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 17,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-11-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
    {
      id: 18,
      name: 'Neon',
      weight: 20.1797,
      price: '$35000',
      creationDate: '2023-11-10T13:24:09.000Z',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
    },
  ];
  filteredElementData: Array<PeriodicElement> = this.ELEMENT_DATA;
  selectedTab!: Tab;

  changeTableData(event: MatTabChangeEvent) {
    this.tabs.forEach((eachTab: any) => (eachTab.isSelected = false));
    this.tabs[event.index].isSelected = true;
    this.selectedTab = this.tabs[event.index];

    if (this.selectedTab.month > 0) {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - this.selectedTab.month);

      this.filteredElementData = this.ELEMENT_DATA.filter(
        (eachData: PeriodicElement) =>
          new Date(eachData.creationDate) > sixMonthsAgo
      );
    } else {
      this.filteredElementData = this.ELEMENT_DATA;
    }
  }
}
