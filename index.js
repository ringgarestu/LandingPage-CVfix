document.title = "Landing Page CV";

function directCv() {
  const cv = "https://drive.google.com/drive/folders/1i-R94dOucIN_rzzujYfyCODYE53vzRXS?usp=share_link";
  //   window.location.href = cv;

  const confirmation = confirm("Anda yakin ingin mengunduh?");
  if (confirmation) {
    window.location.href = cv;
  }
}
