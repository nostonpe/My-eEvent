 <?php
                    
                    include 'config.php';

                    $username = $_POST['username'];
                    $name = $_POST['name'];
                    $email = $_POST['email'];

                    $sql = "INSERT INTO users(username,name,email) VALUES ('$username','$name','$email')";

                    $result = $conn->query($sql);

                    if($result === TRUE){
                        echo 'Εγγραφείκατε επιτυχώς στο newsLetter μας';
                        setcookie('username',$username, time() + 60 * 60 * 24 *10);
                        setcookie('name',$name, time() + 60 * 60 * 24 *10);
                        setcookie('email',$email, time() + 60 * 60 * 24 *10);
                    } else {
                        echo "There is an error :".$conn->error;
                    }
                    
                    $conn->close();
 ?>