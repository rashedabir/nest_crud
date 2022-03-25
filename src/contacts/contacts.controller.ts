import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  async getContactList() {
    return this.contactService.findAll();
  }

  @Get(':id')
  async getContact(@Param('id') id) {
    return this.contactService.findOne(id);
  }

  @Post()
  async createContact(@Body() contactData: Contact): Promise<any> {
    return this.contactService.create(contactData);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id);
    return this.contactService.update(contactData);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    console.log('Delete #' + id);
    return this.contactService.delete(id);
  }
}
