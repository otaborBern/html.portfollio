

document.addEventListener('DOMContentLoaded', function() {
    // Your payment processing code here
    console.log('Payment.js loaded successfully');
});
onClose: function(){
    alert('Window closed.');
  },
  callback: function(response){
    let message = 'Payment complete! Reference: ' + response.reference;
    alert(message);
  }
});

handler.openIframe();
}