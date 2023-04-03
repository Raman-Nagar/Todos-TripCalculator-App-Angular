import { Component } from '@angular/core';
// import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  userData: any = [{ name: "", amount: "" }];
  result: any;
  isResult: boolean = false;

  constructor() { }

  handleChange(e: any, id: number) {
    this.isResult = false;
    const data = [...this.userData]
    if (e.target.name === "name") {
      const existUser = this.userData.find((trans: any) => trans.name.toLowerCase() === e.target.value.toLowerCase());
      if (existUser) {
        alert("please write new name");
        e.target.value = "";
        return;
      }
    }
    data[id][e.target.name] = e.target.value
    this.userData = data;
  }

  addMore() {
    this.isResult = false;
    this.userData = [...this.userData, { name: "", amount: "" }];
  }

  async addUser(e: any) {
    e.preventDefault();
    const res = await fetch("http://localhost:9000/nagar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.userData)
    })
    this.result = await res.json()
    this.isResult = true;
  }

  reoveUser(id: number) {
    this.isResult = false;
    const newUser = this.userData.filter((data: object, i: number) => i !== id)
    this.userData = newUser;
  }
  isValid() {
    return !this.userData.some((trans: any) => !trans.name || !trans.amount)
  }
}
