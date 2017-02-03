// https://momentjs.com/
// https://momentjs.com/docs/
// https://momentjs.com/docs/#/parsing/
// https://momentjs.com/docs/#/manipulating/
// https://momentjs.com/docs/#/displaying/

// https://cdnjs.com/libraries/moment.js

var day = moment("1995-12-25");

var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);

Format Dates
moment().format('MMMM Do YYYY, h:mm:ss a'); // February 2nd 2017, 10:12:23 pm
moment().format('dddd');                    // Thursday
moment().format("MMM Do YY");               // Feb 2nd 17
moment().format('YYYY [escaped] YYYY');     // 2017 escaped 2017
moment().format();                          // 2017-02-02T22:12:23-03:00

Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 5 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // a day ago
moment().endOf('day').fromNow();          // in 2 hours
moment().startOf('hour').fromNow();       // 12 minutes ago

Calendar Time
moment().subtract(10, 'days').calendar(); // 01/23/2017
moment().subtract(6, 'days').calendar();  // Last Friday at 10:12 PM
moment().subtract(3, 'days').calendar();  // Last Monday at 10:12 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 10:12 PM
moment().calendar();                      // Today at 10:12 PM
moment().add(1, 'days').calendar();       // Tomorrow at 10:12 PM
moment().add(3, 'days').calendar();       // Sunday at 10:12 PM
moment().add(10, 'days').calendar();      // 02/12/2017

Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 10:12 PM
moment().format('LTS');  // 10:12:23 PM
moment().format('L');    // 02/02/2017
moment().format('l');    // 2/2/2017
moment().format('LL');   // February 2, 2017
moment().format('ll');   // Feb 2, 2017
moment().format('LLL');  // February 2, 2017 10:12 PM
moment().format('lll');  // Feb 2, 2017 10:12 PM
moment().format('LLLL'); // Thursday, February 2, 2017 10:12 PM
moment().format('llll'); // Thu, Feb 2, 2017 10:12 PM
