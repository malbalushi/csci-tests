var chai = require('chai');
var should = chai.should();

function Event(eventName, eventDate, attendeesCount) {
  var EVENT_NAME = eventName,
      EVENT_DATE = eventDate,
      ATTENDEES_COUNT = attendeesCount;
}

describe('Event Tests', function() {
  var date = new Date();
  var event_test = {
    EVENT_NAME: "test event",
    EVENT_DATE: date,
    ATTENDEES_COUNT: 100
  };

  it('Event should be on a date', function() {
    event_test.EVENT_DATE.should.equal(date)
  })

  it('Event should have an attendees count', function() {
    event_test.ATTENDEES_COUNT.should.equal(100)
  })

})