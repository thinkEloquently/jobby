import { Component, OnInit } from '@angular/core';
import { InputConfigWithPrefix } from '../shared/forms/config/input/input-config-with-prefix';
import { InputConfig } from '../shared/forms/models/input/input-config';

@Component({
  selector: 'app-styles-guide',
  templateUrl: './styles-guide.component.html',
  styleUrls: ['./styles-guide.component.scss']
})
export class StylesGuideComponent implements OnInit {

  configWithPrefixIcon: InputConfig = InputConfigWithPrefix();

  constructor() { }

  ngOnInit(): void {
  }

}
