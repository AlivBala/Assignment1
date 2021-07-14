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
                        usercount = res._body.results.length
                        userNames.push(res._body.results[i].name)
                        userNames.sort()
                    }
                }
                expect(usercount).toBe(10, { "emsg": "Users count:" + usercount + "expected to be 10", "estack": res._body })
                expect(userNames).toContain(expecing_UserNames, { "emsg": "Usernames: " + userNames + "should be match with : " + expecing_UserNames, "estack": res._body })
            })
            .done(done)
    });
})
