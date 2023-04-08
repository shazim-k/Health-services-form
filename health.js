
		var onSwitch = document.querySelector(".on-switch");
		var offSwitch = document.querySelector(".off-switch");

		onSwitch.addEventListener("click", function() {
			onSwitch.style.display = "none";
			offSwitch.style.display = "block";
		});

    offSwitch.addEventListener("click", function() {
			offSwitch.style.display = "none";
			onSwitch.style.display = "block";
		});
    

    var onSwitches = document.querySelectorAll(".on-switch");
    var offSwitches = document.querySelectorAll(".off-switch");

    onSwitches.forEach(function(onSwitch) {
      onSwitch.addEventListener("click", function() {
        onSwitch.style.display = "none";
        onSwitch.nextElementSibling.style.display = "block";
      });
    });

    offSwitches.forEach(function(offSwitch) {
      offSwitch.addEventListener("click", function() {
        offSwitch.style.display = "none";
        offSwitch.previousElementSibling.style.display = "block";
      });
    });


 
    $(document).ready(function() {
    $("#datepicker").datepicker();
    });

