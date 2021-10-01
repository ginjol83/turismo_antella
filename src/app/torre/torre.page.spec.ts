import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TorrePage } from './torre.page';

describe('TorrePage', () => {
  let component: TorrePage;
  let fixture: ComponentFixture<TorrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TorrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
