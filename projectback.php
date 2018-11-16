<?php 
	$con = mysqli_connect("localhost","root","root","cd_yiiapp");

	$query = "select * from cd_yiiapp.register";
	$q1 = mysqli_query($con,$query);

	while ($row=mysqli_fetch_assoc($q1))
    {
    	$data[] = $row;
    }
    echo json_encode($data);
?>