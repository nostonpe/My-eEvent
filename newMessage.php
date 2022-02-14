<?php

include 'config.php';

                    $name = $_POST['name'];
                    $email = $_POST['email'];
                    $subject = $_POST['subject'];
                    $message = $_POST['message'];

                    $sql = "INSERT INTO messages(name,email,subject,message) VALUES ('$name','$email','$subject','$message')";

                    $result = $conn->query($sql);

                    if($result === TRUE){
                        echo 'Το μήνυμα στάλθηκε επιτυχώς!';
                    } else {
                        echo "There is an error :".$conn->error;
                    }
                    
                    $conn->close();

?>