import { browser } from "protractor";
var frisby = require('frisby');
var usercount = 0;
var userNames = [];
var expecing_UserNames = ['Chewbacca', 'Darth Vader', 'Grievous', 'Lama Su',
    'Roos Tarpals', 'Rugor Nass', 'Tuan Wu', 'Tarfful', 'Tion Medon', 'Yarael Poof']

describe("Validate the Star wars API", function () {
    it('get the User details from Star wars API', function (done) {
        frisby.get('https://swapi.dev/api/people')
            .then(function (res) {
                expect(res.status).toEqual(200, { "emsg": res.status + "expected to be 200", "estack": res._body })
                for (var i = 0; i < res._body.results.length; i++) {
                    if (res._body.results[i].height > 200) {
                        userNames.push(res._body.results[i].name)
                        userNames.sort()
                    }
                }
            // there is only one person that where height is greater than 200 and the count will be 1 if it's more than or less than 1 this below step will fail
//             and there will be one name retun when it matched the above requirement(height<200)
                expect(userNames.length).toBe(11, { "emsg": "Users count:" + usercount + "expected to be 1", "estack": res._body })
              expect(userNames).toContain(Darth Vader, { "emsg": "Usernames: " + userNames + "should be match with : " + Darth Vader, "estack": res._body })
            })
            .done(done)
    });
})
