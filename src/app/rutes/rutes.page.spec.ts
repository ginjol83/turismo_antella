import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutesPage } from './rutes.page';

describe('RutesPage', () => {
  let component: RutesPage;
  let fixture: ComponentFixture<RutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
