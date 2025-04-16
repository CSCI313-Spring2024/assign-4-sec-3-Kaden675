import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existing = this.contactService.getContactById(id);
      if (existing) this.contact = { ...existing };
    }
  }

  save() {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/']);
  }
}
