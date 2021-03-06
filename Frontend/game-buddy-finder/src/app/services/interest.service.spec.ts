import { TestBed } from '@angular/core/testing';
import { InterestService } from './interest.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Interest } from '../models/interest';

describe('InterestService', () => {
  let service: InterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(InterestService);
  });

  it('Interest should be valid', () => {
    let interest = new Interest(0,"Dota");
    expect(service.validateInterest(interest)).toBeTrue();
  });

  it('Interest should not be valid', () => {
    let interest = new Interest(null,null);
    expect(service.validateInterest(interest)).toBeFalse();
  });
});
