Browser("Browser").Navigate "https://login.salesforce.com/" @@ hightlight id_;_329440_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Login | Salesforce").WebEdit("username").Set "pujarajkishore@accenture.com" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Login | Salesforce").WebEdit("pw").SetSecure "62022e0d8042b647f451a6285c977899952c13eec30475091f6a" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Login | Salesforce").WebButton("Log In").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Verify Your Identity |").WebButton("Verify").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Home | Salesforce").WebButton("App Launcher").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Home | Salesforce").WebEdit("Search apps and items...").Set "sal" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Home | Salesforce").Link("Sales").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Lightning Experience").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Home | Salesforce_2").Link("Opportunities").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait(5)
