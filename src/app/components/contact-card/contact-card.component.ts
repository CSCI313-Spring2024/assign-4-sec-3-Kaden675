import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() delete = new EventEmitter<number>();
}
