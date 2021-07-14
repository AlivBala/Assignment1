import { browser } from "protractor";
var frisby = require('frisby');
var usercount = 0;
var expecing_UserNames = ['Darth Vader', 'Chewbacca', 'Roos Tarpals', 'Rugor Nass', 'Yarael Poof',
    'Lama Su', 'Tuan Wu', 'Grievous', 'Tarfful', 'Tion Medon']
    
describe("Validate the Star wars API", function () {
    it('get the User details from Star wars API', function (done) {
        frisby.get('https://swapi.dev/api/people')
            .then(function (res) {
                expect(res.status).toEqual(200, { "emsg": res.status + "expected to be 200", "estack": res._body })
                console.log("details", JSON.stringify(res._body, null, 2))

                for (var i = 0; i < res._body.length; i++) {
                    if (res._body.results[i].height > 200) {
                        usercount = res._body.results[i].length
                        break;
                    }
                }
                expect(usercount).toBe(10)
            })
            .done(done)
    });
})