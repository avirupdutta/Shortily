// feather icons
feather.replace();
var clipboard = new ClipboardJS("#copyBtn");

clipboard.on("success", function() {
    console.log("copied!");
});
clipboard.on("error", function(e) {
    console.log(e);
});

// disable typing in result box
document.querySelector("#finalUrl").addEventListener("input", function(e) {
    e.target.value = "";
});

var protocol = location.protocol;
var site = location.host;
var apiUrl = protocol + "//" + site + "/api/new";

document.querySelector("#shortBtn").addEventListener("click", function(e) {
    var longUrl = document.querySelector("#longUrl").value;
    if (longUrl.length > 0) {
        axios
            .post(apiUrl, {
                url: longUrl,
            })
            .then(function(response) {
                var finalUrl = response.data.url;
                document.querySelector("#finalUrl").value = finalUrl;
            })
            .catch(function(error) {
                console.log(error);
                alert("Something went wrong!");
            });
    } else {
        alert("Invalid url!");
    }
});

// document.querySelector("#copyBtn").addEventListener("click", function() {
//     alert("Copied!");
// });
