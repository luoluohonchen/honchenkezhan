$(function() {

$("#usersid").blur(
		function() {
			$("#usersid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#usersid").after("<span id='usersid_msg' style='color: red'>用户不能为空</span>");
			}
	});

$("#booksid").blur(
		function() {
			$("#booksid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#booksid").after("<span id='booksid_msg' style='color: red'>书籍不能为空</span>");
			}
	});

$("#sectionsid").blur(
		function() {
			$("#sectionsid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#sectionsid").after("<span id='sectionsid_msg' style='color: red'>章节不能为空</span>");
			}
	});

$("#money").blur(
		function() {
			$("#money_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#money").after("<span id='money_msg' style='color: red'>金额不能为空</span>");
			}
	});

$("#addtime").blur(
		function() {
			$("#addtime_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#addtime").after("<span id='addtime_msg' style='color: red'>日期不能为空</span>");
			}
	});







$('#sub').click(function(){
var usersid = $("#usersid").val();
var booksid = $("#booksid").val();
var sectionsid = $("#sectionsid").val();
var money = $("#money").val();
var addtime = $("#addtime").val();
$("#usersid_msg").empty();
$("#booksid_msg").empty();
$("#sectionsid_msg").empty();
$("#money_msg").empty();
$("#addtime_msg").empty();
if (usersid == "" || usersid == null) {
	$("#usersid").after("<span id='usersid_msg' style='color: red'>用户不能为空</span>");
	return false;
}
if (booksid == "" || booksid == null) {
	$("#booksid").after("<span id='booksid_msg' style='color: red'>书籍不能为空</span>");
	return false;
}
if (sectionsid == "" || sectionsid == null) {
	$("#sectionsid").after("<span id='sectionsid_msg' style='color: red'>章节不能为空</span>");
	return false;
}
if (money == "" || money == null) {
	$("#money").after("<span id='money_msg' style='color: red'>金额不能为空</span>");
	return false;
}
if (addtime == "" || addtime == null) {
	$("#addtime").after("<span id='addtime_msg' style='color: red'>日期不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#usersid_msg").empty();
$("#booksid_msg").empty();
$("#sectionsid_msg").empty();
$("#money_msg").empty();
$("#addtime_msg").empty();
});

});
