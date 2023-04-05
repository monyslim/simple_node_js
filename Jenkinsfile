pipeline{
    agent any
    tools{nodejs "nodejsname"}
    stages{
        stage("test"){
            steps{
                echo "this is the test stage"
            }
        }

         stage("production"){
            steps{
                sh """
                        rm -rf simple_node_app
                        git clone https://github.com/monyslim/simple_node_app.git
                        cd simple_node_app
                        echo 'building the docker image'
                        echo ' ---------------------'
                        npm install
                        npm run bere
                        echo '------done------'
                    """
            }
        }
    }
}