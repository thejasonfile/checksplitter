var numberOfPeople, totalAmount, tipIncluded, dinerID, dinerForm, itemValue

function neededInfo(e) {
	e.preventDefault();
	numberOfPeople = $("#numberofpeople").val();
	totalAmount = $("#billtotal").val();
	if($("#tipincluded").is(":checked")) {
		tipIncluded = true;
	} else {
		tipIncluded = false;
	}
	$("#neededinfo").fadeOut("slow");
	createDinerDivs();
}

function createDinerDivs() {
	$(".heading").append("<h2>Bill Total</h2><div id='runningtotal'>"+totalAmount+"</div>")
	for(i=0; i<numberOfPeople; i++) {
		dinerID = "Diner" + (i+1);
		dinerForm = "<div id="+dinerID+" class='diner'><h3>"+dinerID+"<button class='additembtn'>+</button></h3><ul class='foodlist'></ul><div id='total'></div>"
		$(".container").append(dinerForm);
	}
		$(".container").fadeIn("slow");
}

function addItem() {
	$(this).parents('h3').next().append("<input type='number' class='enteritem'>")
}

function removeItem() {
	$(this).parent().remove();
}

function inputToItem() {
	itemValue = $(this).val()
	$(this).hide();
	$(this).parent("ul").append("<li>"+itemValue+"<button class='removeitembtn'>-</button></li>")
}

$("#neededinfobtn").on("click", neededInfo);
$("div").on("click", ".additembtn", addItem);
$("div").on("blur", ".enteritem", inputToItem);
$("div").on("click", ".removeitembtn", removeItem);