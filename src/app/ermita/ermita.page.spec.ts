import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErmitaPage } from './ermita.page';

describe('ErmitaPage', () => {
  let component: ErmitaPage;
  let fixture: ComponentFixture<ErmitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErmitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErmitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
