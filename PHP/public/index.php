<?php 
    // header("Access-Control-Allow-Origin: *"); 
    // header("Content-Type: application/json; charset=UTF-8"); 
    // header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
    // header("Access-Control-Max-Age: 3600"); 
    // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
    

    // require "./../.env";

    // $requestMethod = $_SERVER["REQUEST_METHOD"];
    // $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    // $uri = explode('/', $uri);

    // $password = getenv('PASSWORD');

    // $servername = "localhost";
    // $username = "root";
    // $password = getenv("PASSWORD");
    // try{
    //     $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
    //     // set the PDO error mode to exception 
    //     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       
    //     if ($requestMethod == "GET"){
    //         if($uri[1] == "pips")
    //         $statement = $conn->query("select * from pips");
    //         $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
    //         echo json_encode($result);
    //     } else {
    //         echo "you sent a POST request, so you don't get ant data, hahaha";
    //     }
        
    //     $input = (array) json_decode(file_get_contents('php://input'), true);
    //     // echo $input['text'];
    //     // echo $input['username'];

    // } catch (PDOException $e) {
    //     echo "connection failed: " . $e->getMessage();
    // }

    header("Access-Control-Allow-Origin: *"); 
    header("Content-Type: application/json; charset=UTF-8"); 
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
    header("Access-Control-Max-Age: 3600"); 
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
    
    require "./../.env";

   
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode('/', $uri);
    
    
    $servername = "localhost";
    $username = "root";
    $password = getenv("PASSWORD"); // reads from the .env file (if imported in index.php)

    try {
        $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $requestMethod = $_SERVER["REQUEST_METHOD"];

        if ($uri[1] == "pips") {
            if ($requestMethod == "GET") {
                $statement = $conn->query("select * from pips");
                $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
                echo json_encode($result);    
            } else if ($requestMethod == "POST") {
                $input = (array) json_decode(file_get_contents('php://input'), TRUE);

                $data = [
                    'username' => $input['username'],
                    'text' => $input['text'],
                    
               ];

                $sql = 'INSERT INTO pips VALUES(default, :username, :text)';
                $statement = $conn->prepare($sql);
                $statement->execute($data);

                $id = $conn->lastInsertId();
                $pip = (object) $input;
                $pip->idpips = $id;

                echo json_encode($pip);
                // echo "You sent a POST request, so you get no data, hahaha!";
            }
        }
        
        
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    
    // echo "Hello world"; 
?> 