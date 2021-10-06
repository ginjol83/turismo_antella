import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaeraPage } from './maera.page';

describe('MaeraPage', () => {
  let component: MaeraPage;
  let fixture: ComponentFixture<MaeraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaeraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
