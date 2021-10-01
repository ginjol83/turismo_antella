import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreuetaPage } from './creueta.page';

describe('CreuetaPage', () => {
  let component: CreuetaPage;
  let fixture: ComponentFixture<CreuetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreuetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreuetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
