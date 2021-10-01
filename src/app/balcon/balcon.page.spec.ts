import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BalconPage } from './balcon.page';

describe('BalconPage', () => {
  let component: BalconPage;
  let fixture: ComponentFixture<BalconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BalconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
