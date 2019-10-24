<?php
$username = $_post['user name'];
$password = $_post['password'];
$Gender = $_post['Gender'];
$EMail = $_post['email'];
$phone = $_post['[pone'];
if(!empty($username) || !empty($password) || !empty($gender) || !empty($email) || !empty(phone)) {
    $host = "localhost";
    $dbusername="root";
    $dbpassword="";
    $dbname="web link";

    $conn = new mysql($host, $dbusername. $dbpasssword, $dbname,);
    if(mysqli_coonect_error()){
        die('connect error('. mysqli_cooncet_error().')'. mysqli_connect_error());
    }
    else{
        $select = "select email from regster where email = ? limit 1";
        $select = "insert into register (username,password,gender,email,phone) value(?, ?, ?, ?, ?,)";
        $stmt = $conn->prepare($select);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stm->bind_result();
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if ($rnum==0){
            $stmt-close();
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("ssssii", $username, $password, $gender, $email, $phone);
            $stmt->excute();
            echo "new record insert successful";
        }else{ echo "someone already register using this email";
        }
        $stmt->close();
        $stmt->close();


else{
    echo "all field are required";
    die();
}
?>