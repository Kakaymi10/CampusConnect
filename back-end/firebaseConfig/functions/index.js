const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.storeEmailData = functions.https.onRequest(async (req, res) => {
  const sender1Email = "guests_rw@alueducation.com";
  const sender2Email = "src_rw@comms.alustudent.com";
  const searchQuery = "from:" + sender1Email + " OR from:" + sender2Email;
  const threads = GmailApp.search(searchQuery);

  if (threads.length === 0) {
    res.status(200).send("No emails found from the specified senders.");
    return;
  }

  const db = admin.database();
  const emailsRef = db.ref('emails');

  for (let i = 0; i < 3; i++) {
    const thread = threads[i];
    const messages = thread.getMessages();

    for (let j = 0; j < messages.length; j++) {
      const message = messages[j];
      const subject = message.getSubject();
      const body = message.getPlainBody();

      const emailData = {
        subject: subject,
        body: body,
        timestamp: admin.database.ServerValue.TIMESTAMP
      };

      await emailsRef.push(emailData);
    }
  }

  res.status(200).send("Email data stored in Firebase.");
});
