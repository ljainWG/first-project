import { Component } from '@angular/core';

@Component({
    selector: 'app-header',     // atleast 2 words separated by hyphen, because if it is single word, it will be considered as a html element and it will clash with that
    standalone: true,
    templateUrl: './header.component.html',         // path of the html file or we can do inline template but it is not good approach, 
                                                    // like this template: '<h1>Header</h1>' as a string
    styleUrl: './header.component.css', 
    // styleUrls: ['./header.component.css'],       // if we are using multiple css filess     
    // tyles: 'h1 { color: red; }'                  // we can also do inline styles like this                 
})
export class HeaderComponent {}