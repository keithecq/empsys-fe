import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  fileName = '';

    constructor(
      private http: HttpClient,
      private router: Router) {}

    onFileSelected(event : any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("file", file);
            console.log(formData);

            const upload = this.http.post("http://localhost:8080/submitCSV", formData);

            upload.subscribe();

            this.router.navigate(['/employee']).then(() => {
              window.location.reload();
            });;
        }
    }
}
