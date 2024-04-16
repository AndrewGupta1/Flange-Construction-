function toggleMenu() {
  const nav = document.getElementById('nav');
  if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
  } else {
      nav.style.display = 'none';
  }
}

window.addEventListener("DOMContentLoaded", function() {
  var callNowBtn = document.getElementById("callNowBtn");
  if(callNowBtn) {
    callNowBtn.addEventListener("click", function() {
      var phoneNumber = "+918169597811";
      var phoneUri = "tel:" + phoneNumber;
      window.open(phoneUri);
    });
  } else {
    console.log('Element with id "callNowBtn" not found');
  }
});











