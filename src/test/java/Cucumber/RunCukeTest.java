package Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//// runner class
//
//@RunWith(Cucumber.class)
//@CucumberOptions(
////your cucumber options goes here
//		dryRun = false,
//		strict = true,
//		monochrome = true,
//		features = "src/test/resources/com/ytlc/cal/client/test",
//		glue = "com.ytlc.cal.client.test",
//		format = {
//				"pretty",
//				"json:target/cucumber.json",
//				"junit:taget_junit/cucumber.xml",
//				"html:target/site/cucumber-reports",
//				}
//)



//runner class

@RunWith(Cucumber.class)
@CucumberOptions(
//your cucumber options goes here
		//dryRun = false,
		strict = false,
		monochrome = true,
		features = "src/test/resources/com/poc/rest/client",
		glue = "com.poc.rest.client",
		format = {
				"pretty",
				"html:target/site/cucumber-pretty",
				"json:target/cucumber.json"
				}, tags = { "~@ignore" }
)



public class RunCukeTest  {
	
}

