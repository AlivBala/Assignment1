package selenium;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import support.Browser;

public class SimpleTest {

  @Test
  public void sometest() {    
    WebDriver driver = Browser.launch();
    driver.get("https://www.aspiration.com");
    WebElement element = driver.findElement(By.name("") //Inprogress - need time to finish this task

  }
  
}
