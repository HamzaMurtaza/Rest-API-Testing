const request = require('supertest');
const assert = require('chai').assert;
let url = "https://jsonplaceholder.typicode.com";
let response;

describe('Testing jsonplaceholder API', function () {

    
    /***TESTING API USING GET REQUESTS***/


    describe('Testing GET Requests', function () {

        before(function (done) {
            request(url)
                .get('/users')
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })


        it('Checking the Http Status Code returned', function (done) {

            //filtering response
            let result = response.statusCode;

            //Expected Value
            let test = 200;

            //assertion
            assert.deepEqual(result, test);
            done();

        })


        it('Checking the Content Type returned', function (done) {

            //filtering response
            let result = response.header['content-type'];

            //Expected Value
            let test = "application/json; charset=utf-8";

            //assertion
            assert.deepEqual(result, test);
            done();
        })


        it('Checking some properties of first JSON Object', function (done) {

            //filtering response
            let { id, name, username, email } = response.body[0];
            let result = { id, name, username, email };

            //Expected values
            let test = {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            };

            //assertion
            assert.deepEqual(result, test);
            done();
        });

        it('Checking cascading Address Object in first JSON Object', function (done) {

            //filtering response
            let { address } = response.body[0];

            //Expected values
            let test = {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            };

            //assertion
            assert.deepEqual(address, test);
            done();
        })
    });




    /***TESTING API USING POST REQUESTS***/


    describe('Testing POST Requests', function () {

        before(function (done) {

            request(url)
                .post('/posts')
                .set('Accept', 'application/json')
                .send({
                    title: 'My New Post',
                    body: 'This is my Post',
                    userId: 11
                })
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })


        it('Checking the Http Status Code returned', function (done) {

            //filtering response
            let result = response.statusCode;

            //Expected Value
            let test = 201;

            //assertion
            assert.deepEqual(result, test);
            done();

        })

        it('Checking the Content Type returned', function (done) {

            //filtering response
            let result = response.header['content-type'];

            //Expected Value
            let test = "application/json; charset=utf-8";

            //assertion
            assert.deepEqual(result, test);
            done();
        })



        it('Testing the post created', function (done) {

            let { title, body, userId } = response.body;
            let result = { title, body, userId };

            let test = {
                title: 'My New Post',
                body: 'This is my Post',
                userId: 11
            };
            
            assert.deepEqual(result, test);
            done();

        })


    })






    /***TESTING API USING PUT REQUESTS***/

    describe('Testing PUT Requests', function () {

        before(function (done) {
            request(url)
                .put('/posts/1')
                .set('Accept', 'application/json')
                .send({
                    title: 'My New Title',
                    body: 'This is my New Post Body ',
                })
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })

        it('Checking the Http Status Code returned', function (done) {

            //filtering response
            let result = response.statusCode;

            //Expected Value
            let test = 200;

            //assertion
            assert.deepEqual(result, test);
            done();

        })

        it('Checking the Content Type returned', function (done) {

            //filtering response
            let result = response.header['content-type'];

            //Expected Value
            let test = "application/json; charset=utf-8";

            //assertion
            assert.deepEqual(result, test);
            done();
        })


        it('Checking the post updated', function (done) {

            let { title, body } = response.body;
            let result = { title, body };

            let test = {
                title: 'My New Title',
                body: 'This is my New Post Body '

            };
            
            assert.deepEqual(result, test);
            done();

        })



    })






    /***TESTING API USING DELETE REQUESTS***/

    describe('Testing DELETE Requests', function () {

        before(function (done) {
            request(url)
                .delete('/posts/1')
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if (err) {
                        done(err);
                    }
                    else {
                        response = res;
                        done();
                    }

                })
        })

        it('Checking the Http Status Code returned', function (done) {

            //filtering response
            let result = response.statusCode;

            //Expected Value
            let test = 200;

            //assertion
            assert.deepEqual(result, test);
            done();

        })

        it('Checking the Content Type returned', function (done) {

            //filtering response
            let result = response.header['content-type'];

            //Expected Value
            let test = "application/json; charset=utf-8";

            //assertion
            assert.deepEqual(result, test);
            done();
        })

    })


});