function listenEvents(waClient) {
  waClient.on('...', () => { /* WhatsApp, do something! */});
}

exports.setupListener = listenEvents;
