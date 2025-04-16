import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList = signal<Contact[]>([
    { id: 1, fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john@usa.com' },
    { id: 2, fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-1000', email: 'mary@usa.com' }
  ]);

  getContacts() {
    return this.contactList.asReadonly();
  }

  addContact(contact: Contact) {
    const updated = [...this.contactList(), { ...contact, id: Date.now() }];
    this.contactList.set(updated);
  }

  updateContact(updatedContact: Contact) {
    const updated = this.contactList().map(c =>
      c.id === updatedContact.id ? updatedContact : c
    );
    this.contactList.set(updated);
  }

  deleteContact(id: number) {
    const updated = this.contactList().filter(c => c.id !== id);
    this.contactList.set(updated);
  }

  getContactById(id: number): Contact | undefined {
    return this.contactList().find(c => c.id === id);
  }
}
