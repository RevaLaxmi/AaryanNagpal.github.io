const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://revachauhan1:WLO6BYSJfCTr0MR4@cluster0.jynpokg.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const FormSubmissionSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone_number: String,
  subject: String,
  message: String,
  submitted_at: { type: Date, default: Date.now }
});

const FormSubmission = mongoose.model('FormSubmission', FormSubmissionSchema);

app.post('/submit-form', (req, res) => {
  const { full_name, email, phone_number, subject, message } = req.body;

  const newSubmission = new FormSubmission({
    full_name,
    email,
    phone_number,
    subject,
    message
  });

  newSubmission.save()
    .then(submission => {
      console.log('Form submission saved:', submission);
      res.status(200).send('Form submission successful');
    })
    .catch(err => {
      console.error('Error saving form submission:', err);
      res.status(500).send('Internal server error');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-icon').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });
});
