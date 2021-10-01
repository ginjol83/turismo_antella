import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IglesiaPage } from './iglesia.page';

describe('IglesiaPage', () => {
  let component: IglesiaPage;
  let fixture: ComponentFixture<IglesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IglesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
