"use strict";

const webDriver = require("selenium-webdriver"),
      baseURL = "http://peacefullb-6b31bc96c3f8df78.elb.us-west-2.amazonaws.com";

let driver = null;

describe("Peaceful App", function() {
    this.timeout(1000 * 10);


    before((done) => {
        driver = new webDriver.Builder()
            .forBrowser("firefox").build();

        done();
    });
    after((done) => {

        driver.quit();
        done();

    });

    it("Navigate", (done) => {
        driver.get(baseURL).then(() => {
            driver.getTitle().then(function(title){
                console.log("This is Title of the page: " + title);
                done();
            });
        });
    });

    it("Go to 2nd page", done => {
        driver.findElement(webDriver.By.xpath("//*[text()='Go to second page']")).click()
            .then(()=> {
                done();
            });


    });
});