function validateLinkedInUrl(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (regex.test(url)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  

  validateLinkedInUrl("https://www.linkedin.com/in/john-doe123");
  validateLinkedInUrl("https://www.linkedin.com/in/jane_doe");
  validateLinkedInUrl("https://www.linkedin.com/in/1johndoe");
  