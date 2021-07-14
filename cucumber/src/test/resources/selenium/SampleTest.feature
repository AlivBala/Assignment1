Feature: 
As a user I need to verify that I can view the products and prices by navigation
 from the home page to product page

	Background:
		Given The user able to view the products 
		And prices by navigation from the home page to product page 
	
	Scenario: User can view our products  
		Then able to view products and prices by navigating from the home page via "Spend & Save" link
		Then verify that user able to see 2 products, "Aspiration and Aspiration Plus"
		And verify that monthly and yearly plans display when user clicks on Get Aspiration
		Then verify that Yearly radio opion is "$71.88" paid once yearly
		Then verify that monthly radio opion is "$7.99" paid once yearly

		
		