<?php
	$fullName = $_POST['fullName'];
	$age = $_POST['age'];
	$gender = $_POST['gender'];
	$birthday = $_POST['birthday'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$studentNumber = $_POST['studentNumber'];
	$yearLevel = $_POST['yearLevel'];
	$degreeProgram = $_POST['degreeProgram'];

	$conn = new mysqli('localhost', 'root', 'database');
	if($conn->connect_error){
		die('Connection Failed : '.$conn->connect_error);
	}
fullName, age ,gender, birthday, email, number, studentNumber, yearLevel, degreeProgram	else
	{
		$stmt = $conn->prepare("insert into registration('')
			value(?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt -> blind_param("sssssiiis", $fullName, $age ,$gender, $birthday, $email, $number, $studentNumber, $yearLevel, $degreeProgram);
		$stmt->execute();
		echo "registration successfully";
		$stmt->close();
		$conn->cosel();
	}
