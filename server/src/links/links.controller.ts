import { Controller, Get } from '@nestjs/common';
import { Link } from './interfaces/link.interface';

@Controller('links')
export class LinksController {
  @Get()
  getLinks(): Link[] {
    return [
      {
        name: 'YouTube',
        icon: 'https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png',
        url: 'https://www.youtube.com/',
      },
    ];
  }
}
