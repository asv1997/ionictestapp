import { Component } from '@angular/core';
import {  Config, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isApp: boolean;

  loadedFoods = [
    {
      title: 'Burger',
      price : '5',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'description': 'Tasty Cheeseburgers'
    },
    {
      title: 'Sandwich',
      price : '10',
      imageUrl: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Delicious sandwich'
    },
    {
      title: 'Coffee',
      price : '2',
      imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Coffees are awesome'
    },
    {
      title: 'Tea',
      price : '5',
      imageUrl: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description:"Tasty Tea"
    },
    {
      title: 'Rice',
      price : '25',
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Fresh rice'
    },
    {
      title: 'Cake',
      price : '5',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Lovely cake'
    },
    {
      title: 'Tiramisu',
      price : '30',
      imageUrl: 'https://images.unsplash.com/photo-1542326237-94b1c5a538d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGlyYW1pc3V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Wonderful tiramisu'
    },
  ]

  constructor(private platform: Platform) {
    if(this.platform.is('desktop') || this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }
  }

  ngOnInit() {

   
  }
}


