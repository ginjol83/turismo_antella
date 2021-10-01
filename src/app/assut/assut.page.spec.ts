import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssutPage } from './assut.page';

describe('AssutPage', () => {
  let component: AssutPage;
  let fixture: ComponentFixture<AssutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
