// popup contact me
function openForm() {
    document.getElementById("popup").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("popup").style.display = "none";
  }

document.getElementById("contact").addEventListener("click",openForm)
document.getElementById("close-btn").addEventListener("click",closeForm)

// notifikasi pesan terkirim\

function kirm(){
    closeForm()
    window.alert("pesan terkirim")
}
