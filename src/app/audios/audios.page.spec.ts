import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiosPage } from './audios.page';

describe('AudiosPage', () => {
  let component: AudiosPage;
  let fixture: ComponentFixture<AudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
