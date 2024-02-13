import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.css'
})
export class AppSidebarComponent {
constructor ( private gifsService:GifsService) {}
get tags(): string[]{
  return this.gifsService.tagsHistory;
}

searchTag(tag: string):void{
this.gifsService.searchTag(tag);
}
}
