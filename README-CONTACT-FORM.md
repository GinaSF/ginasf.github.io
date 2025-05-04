# Contact Form Setup Instructions

The contact form on this website uses [EmailJS](https://www.emailjs.com/) to send emails without requiring a backend server. Follow these steps to set up the contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

## 4. Update the Contact Form Configuration

1. Open the file `js/contact.js`
2. Replace the following placeholders with your actual EmailJS credentials:
   - `YOUR_PUBLIC_KEY` - Your EmailJS public key (found in Account > API Keys)
   - `YOUR_SERVICE_ID` - The ID of the email service you created
   - `YOUR_TEMPLATE_ID` - The ID of the email template you created

```javascript
// Example configuration
emailjs.init('abc123def456ghi789');

// Later in the code:
emailjs.send('service_xxxxxxx', 'template_yyyyyyy', templateParams)
```

## 5. Test the Form

After completing the setup, test the contact form by sending a test message. You should receive the email at the address associated with your EmailJS service.

## Note

The free tier of EmailJS allows 200 emails per month. If you need more, you'll need to upgrade to a paid plan.