import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Andre';
  age = 18;
  btnDisabled = true;
  person = {
    name: 'Andre',
    age: 27,
  };
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      id: 1,
      name: 'producto 1',
      price: 20,
    },
  ];
  register = {
    name: '',
    email: '',
    password: '',
  };
  toggleButton = () => {
    this.btnDisabled = !this.btnDisabled;
  };
  ageIncrease() {
    this.person.age++;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
