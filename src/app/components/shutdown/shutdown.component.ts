import { Component, OnInit } from '@angular/core';
import {AbstractRegistration} from '../../services/abstract-registration';

@Component({
  selector: 'app-shutdown',
  templateUrl: './shutdown.component.html',
  styleUrls: ['./shutdown.component.css']
})
export class ShutdownComponent implements OnInit {
  messageResponse = '';

  constructor(private registrationService: AbstractRegistration) { }

  ngOnInit() {
  }

  shutdown() {
    this.registrationService.shutDown().subscribe(
      value => {
        this.messageResponse = value.message as string;
      }
    );
  }
}
