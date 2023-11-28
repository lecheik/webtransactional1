window.addEventListener('DOMContentLoaded',function () 
{
    document.getElementById("mySubmitButton").addEventListener("click", function (event) 
	{ 
                event.preventDefault(); 
				addProgressBar();
    }); 
});

var width = 0;
	var numberofuser = 0;
	
function addProgressBar()
{
	
	if(numberofuser >= 20)
	{
		alert("Maximum number reached");
	}
	else
	{	
		var ProgressBar = document.getElementById("progress");
		width = width + 5;
		numberofuser++;
		ProgressBar.style.width = width + "%";
	}	
}
 