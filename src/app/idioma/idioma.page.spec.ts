import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdiomaPage } from './idioma.page';

describe('IdiomaPage', () => {
  let component: IdiomaPage;
  let fixture: ComponentFixture<IdiomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdiomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
