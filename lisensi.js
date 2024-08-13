function checkUserLicense(licenseKey) {
  var url = "https://script.google.com/macros/s/AKfycbxwT4wiXaZFeCpjYpCqAkUR7bv7JQqOqpZ-ZVU7QLiSAsu5BzzvwecaHxH6tVTF928b/exec?key=" + licenseKey;
  const Lisensi = atob("aHR0cHM6Ly9iaGFyYXRhaW50ZXJuYXNpb25hbC5zdG9yZQ==");
  fetch(url)
    .then(response => response.text())
    .then(result => {
      if (result.trim() === "VALID") {
      } else {
        window.location.href = Lisensi; 
      }
    })
    .catch(error => {
      window.location.href = Lisensi; 
    });
}
