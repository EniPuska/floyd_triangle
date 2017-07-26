<!DOCTYPE html>
<html class="scenarios">
<head>
	<title>Floyd's triangle</title>
</head>
<body>
	
    <div  class="page-container border-radius">
        <h1>Floyd Triangle</h1>
		<form id="myForm">
		<table>
			<tr>
				<td><label for="num">Put Your Number: </label></td>
				<td><input type="text" name="num" id="inputN"  class="border-radius"/></td>
			</tr>
			<tr>
				<td></td>
				<td>
				<input type="button" value="Clear" class="border-radius" id="clear" />
				<input type="submit" value="Print" class="border-radius" /></td>
				
			</tr>
		</table>
		<div class="description result" id="floyd-container" style="line-height: 1.5em;">
		</div>
		
	</form>
    </div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>