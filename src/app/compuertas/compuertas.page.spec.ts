import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompuertasPage } from './compuertas.page';

describe('CompuertasPage', () => {
  let component: CompuertasPage;
  let fixture: ComponentFixture<CompuertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompuertasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompuertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
