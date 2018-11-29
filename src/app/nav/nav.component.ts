import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  apptitle: string = 'Home'
  hero: object;
  
  constructor() { }

  ngOnInit() {
    this.hero ={
      iconLink:[{
        link: 'http://facebook.com/original541029',
        class: 'fab fa-facebook-f',
      }, {
        link: 'https://www.instagram.com/original541029/?hl=zh-tw',
        class: 'fab fa-instagram'
      }, {
        link: 'https://github.com/original541029',
        class: 'fab fa-github'
      }
      ],my:[{
        img:'https://scontent.ftpe1-1.fna.fbcdn.net/v/t1.0-0/p370x247/13103284_948659938580627_7914928445941350646_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpe1-1.fna&oh=ef9a78f1bb0276007d9f8027de1afe75&oe=5CAC6219',
        text:'213j12k3j12lj31j2l3jl12j3lj1l2j3l1j2l3j1l2jl3kj12l3j'
      }]
    }
     
    console.log(this.hero)
  }

}
