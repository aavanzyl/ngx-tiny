import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'ngx-code-highlight',
  templateUrl: './ngx-code-highlight.component.html',
  styleUrls: ['./ngx-code-highlight.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgxCodeHighlightComponent implements OnInit {
  @Input() language = 'javascript';
  @ViewChild('code', { static: true }) ref: ElementRef;
  safeHtml = '';

  ngOnInit() {
    const html = this.ref.nativeElement.innerHTML
      .replace(/\{ \{/gi, '{{')
      .replace(/\} \}/gi, '}}')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>');

    this.safeHtml = Prism.highlight(html, Prism.languages[this.language]);
  }
}
