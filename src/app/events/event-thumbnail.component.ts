import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]"class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Data: {{event.data}}</div>
      <div [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div>
        Online URL: {{ event?.onlinUrl }}
      </div>
    </div> 
  `,
  styles: [`
    .thumbnail { min-height: 250px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

}